import React from 'react'
import { Box } from '@mui/material'
import { GoogleLogin } from 'react-google-login'
import { client } from '../../axios'
//`https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email&response_type=token&redirect_uri=https://localhost:44411&client_id=${'502163719591-s5jjj1sr04029lbhoabv96jsgjpuqb3d.apps.googleusercontent.com'}`
export default () => {
  const handleSuccess = (res) => {
    const { accessToken, tokenId } = res
    sessionStorage.setItem('accessToken', accessToken)
    console.log('res ', res, ' at ', accessToken)
    client.post('user/authenticate', { tokenId: tokenId })
  }

  const handleFailure = () => {}

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GoogleLogin
        clientId='502163719591-s5jjj1sr04029lbhoabv96jsgjpuqb3d.apps.googleusercontent.com'
        buttonText='Login'
        cookiePolicy='single_host_origin'
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        style={{ width: 60 }}
      />
    </Box>
  )
}
