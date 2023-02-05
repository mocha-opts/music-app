import React, { memo, Fragment } from 'react'
import ScanCodeLogin from './ScanCodeLogin'
import PhoneEmailLogin from './PhoneEmailLogin'
function Login() {
  return (
    <Fragment>
      <ScanCodeLogin />
      <PhoneEmailLogin />
    </Fragment>
  )
}

export default Login
