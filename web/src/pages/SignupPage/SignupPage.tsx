import { useEffect, useState } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import PageCenter from 'src/components/PageCenter/PageCenter'
import Container from 'src/components/Container/Container'
import { Badge, Button, Heading, minorScale, Pane, Small, Text, TextInputField } from 'evergreen-ui'
import { FormError } from 'src/lib/types'
import PasswordRequirements from 'src/components/PasswordRequirements/PasswordRequirements'
import BrandLogo from 'src/components/BrandLogo/BrandLogo'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()


  const [signupEmailAddress, setSignupEmailAddress] = useState<string>('')
  const [signupEmailAddressErrors, setSignupEmailAddressErrors] = useState<FormError>({error: false, message: ''})

  const [signupPassword, setSignupPassword] = useState<string>('')
  const [signupPasswordErrors, setSignupPasswordErrors] = useState<FormError>({error: false, message: ''})

  const [disableFields, setDisableFields] = useState<boolean>(false);

  const checkInputValues = (emailAddress:string, password:string):boolean => {
    let valid = true

    // Check for email
    if(!emailAddress){
      setSignupEmailAddressErrors({error: true, message: 'Email Address must not be blank.'})
      valid = false
    }

    // Check for password and requirements
    if(!password){
      setSignupPasswordErrors({error: true, message: 'Password must not be blank.'})
      valid = false
    } else if(!password.match(/[A-Z]/) || password.length < 8){
      setSignupPasswordErrors({error: true, message: 'Password must meet the minimum requirements'})
      valid = false
    }

    return valid

  }

  const submitSignupForm = async () => {

    // Reset Field Errors
    setSignupEmailAddressErrors({error: false, message: ''})
    setSignupPasswordErrors({error: false, message: ''})

    // Check input validity
    const inputsAreValid = checkInputValues(signupEmailAddress, signupPassword)

    // Sign Up the User
    if(inputsAreValid){

      setDisableFields(true)

      const response = await signUp({
        username: signupEmailAddress,
        password: signupPassword,
      })

      if (response.error) {
        toast.error(response.error)
        setDisableFields(false)
      }
    }

  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  return (
    <>
      <Metadata title="Sign Up" description="Sign Up" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <PageCenter>
        <Container maxWidth={400}>
          <Pane marginY={minorScale(9)} gap={minorScale(2)} display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={minorScale(6)} border="default">
            <BrandLogo />
            <Heading is="h1" width="100%" textAlign="center">Create a new account</Heading>
            <Pane marginTop={minorScale(6)} display="flex" gap={minorScale(1)} flexDirection="column" justifyContent="center" alignItems="center" width="100%">
              <TextInputField
                width="100%"
                label="Email Address"
                placeholder="user@email.com"
                value={signupEmailAddress}
                isInvalid={signupEmailAddressErrors.error}
                validationMessage={signupEmailAddressErrors.error && signupEmailAddressErrors.message}
                onChange={(event) => {
                  setSignupEmailAddressErrors({error: false, message: ''})
                  setSignupEmailAddress(event.target.value)
                }}
                disabled={disableFields}
              />
              <TextInputField
                width="100%"
                label="Password"
                placeholder="Password"
                type='password'
                description={<PasswordRequirements password={signupPassword}/>}
                value={signupPassword}
                isInvalid={signupPasswordErrors.error}
                validationMessage={signupPasswordErrors.error && signupPasswordErrors.message}
                onChange={(event) => {
                  setSignupPasswordErrors({error: false, message: ''})
                  setSignupPassword(event.target.value)
                }}
                disabled={disableFields}
              />
              <Button
                width="100%"
                appearance='primary'
                onClick={submitSignupForm}
                type="submit"
                isLoading={disableFields}
              >
                Create Account
              </Button>
              <Text textAlign="center" marginTop={minorScale(4)}>
                Already have an account?
                <br />
                <Link className='text-[#3366FF] hover:text-[#2952CC] hover:underline'  to={routes.login()}>
                  Login!
                </Link>
              </Text>
            </Pane>
          </Pane>
        </Container>
      </PageCenter>
    </>
  )
}

export default SignupPage
