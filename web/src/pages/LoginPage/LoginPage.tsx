import { useEffect, useState } from 'react'
import { Badge, Button, Heading, Pane, Text, TextInputField, majorScale, minorScale } from 'evergreen-ui'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Container from 'src/components/Container/Container'
import PageCenter from 'src/components/PageCenter/PageCenter'


type FormError = {
  error: boolean,
  message: string,
}

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  const [loginEmailAddress, setLoginEmailAddress] = useState<string>('')
  const [loginEmailAddressErrors, setLoginEmailAddressErrors] = useState<FormError>({error: false, message: ''})

  const [loginPassword, setLoginPassword] = useState<string>('')
  const [loginPasswordErrors, setLoginPasswordErrors] = useState<FormError>({error: false, message: ''})



  const checkInputValues = (emailAddress:string, password:string):boolean => {
    let valid = true

    // Check for email
    if(!emailAddress){
      setLoginEmailAddressErrors({error: true, message: 'Email Address must not be blank.'})
      valid = false
    }

    // Check for password
    if(!password){
      setLoginPasswordErrors({error: true, message: 'Password must not be blank.'})
      valid = false
    }

    return valid

  }

  const submitLoginForm = async () => {

    // Reset Field Errors
    setLoginEmailAddressErrors({error: false, message: ''})
    setLoginPasswordErrors({error: false, message: ''})

    // Check input validity
    const inputsAreValid = checkInputValues(loginEmailAddress, loginPassword)

    // Login the User
    if(inputsAreValid){

      const response = await logIn({
        username: loginEmailAddress,
        password: loginPassword,
      })

      if (response.error) {
        toast.error(response.error)
      }
    }


  }

  // Navigate user to home page once authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])


  return (
    <>
      <Metadata title="Login" description="Login" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <PageCenter>
        <Container maxWidth={400}>
          <Pane marginY={minorScale(9)} gap={minorScale(2)} display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={minorScale(6)} border="default">
            <Badge color="blue">BRAND LOGO HERE</Badge>
            <Heading is="h1" width="100%" textAlign="center">Log in to your account</Heading>
            <Pane marginTop={minorScale(6)} display="flex" gap={minorScale(1)} flexDirection="column" justifyContent="center" alignItems="center" width="100%">
              <form>

              </form>
              <TextInputField
                width="100%"
                label="Email Address"
                placeholder="user@email.com"
                value={loginEmailAddress}
                isInvalid={loginEmailAddressErrors.error}
                validationMessage={loginEmailAddressErrors.error && loginEmailAddressErrors.message}
                onChange={(event) => {
                  setLoginEmailAddressErrors({error: false, message: ''})
                  setLoginEmailAddress(event.target.value)
                }}
              />
              <TextInputField
                width="100%"
                label="Password"
                placeholder="Password"
                type='password'
                value={loginPassword}
                isInvalid={loginPasswordErrors.error}
                validationMessage={loginPasswordErrors.error && loginPasswordErrors.message}
                onChange={(event) => {
                  setLoginPasswordErrors({error: false, message: ''})
                  setLoginPassword(event.target.value)
                }}
              />
              <Button
                width="100%"
                appearance='primary'
                onClick={submitLoginForm}
                type="submit">
                Login
              </Button>
              <Text textAlign="center" marginTop={minorScale(4)}>
                Don&apos;t have an account?
                <br />
                <Link className='text-[#3366FF] hover:text-[#2952CC] hover:underline'  to={routes.signup()}>
                  Sign up!
                </Link>
              </Text>
            </Pane>
          </Pane>
        </Container>
      </PageCenter>
    </>
  )
}

export default LoginPage
