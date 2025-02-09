import { Router, Route, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated="login">
        <Route path="/" page={CalendarPage} name="home" />
        <Route path="/calendar" page={CalendarPage} name="calendar" />
        <Route path="/projections" page={ProjectionsPage} name="projections" />
        <Route path="/settings" page={SettingsPage} name="settings" />
      </PrivateSet>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
