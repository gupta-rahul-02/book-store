import React from 'react'
import {Box, Typography} from '@mui/material'
function About() {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography variant='h2'>
          This is CRUD Application
        </Typography>
        <Typography variant='h3'>Using MERN Stack</Typography>
      </Box>
    </div>
  )
}

export default About