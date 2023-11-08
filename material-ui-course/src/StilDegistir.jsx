import { Button, Container,styled} from '@mui/material'
import React from 'react'

 const MyButton = styled(Button)({
    backgroundColor:"lightpink",
    color:"#fff",
    margin:"25px",
    padding:"20px",
    "&:hover":{
        backgroundColor:"skyblue"
    }
 })

const StilDegistir = () => {
    
  return (
    
        <Container>
            <MyButton>asdasdadasdasdasdasd</MyButton>
            <Button >asddasd</Button>
            <Button 
            variant='contained'
            disabled
            sx={{
                backgroundColor:"lightpink",
                color:"#fff",
                margin:5,
                "&:hover":{
                    backgroundColor:"lightblue"
                },
                "&:disable":{
                    backgroundColor:"dark",
                    color:"black"
                }
            }}
           
            >unique</Button>
        </Container>
   
  )
}

export default StilDegistir
