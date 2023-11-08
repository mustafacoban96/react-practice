import { Box, Button, CircularProgress, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/styles'
const MyComponent = styled('div')({
  color:'darkslategray',
  backgroundColor:'aliceblue',
  padding:8,
  borderRadius:4,
  width:"40%"
})
const App2 = () => {
  return (
    <Stack spacing={5} sx={{backgroundColor:'gray'}}>
      <Button variant='contained' color='secondary'>Submit</Button> 
      <Typography variant="myVariant">Hello</Typography>
      <Typography sx={{color:'myCustomColor.superLight'}}>asdasdasd</Typography>
      <Button sx={{width:{xs:"10%" ,sm:"20%", md:"30%"} ,p:'29px'}} variant='contained'>hELLLLLLLLL</Button>
      <MyComponent>asdasd</MyComponent>
      <CircularProgress/>
      <Paper elevation={0} />
      <Paper elevation={2} sx={{backgroundColor:'red', padding:'2px'}}>asdad</Paper>
      <Paper />
      
    </Stack>
  )
}

export default App2
