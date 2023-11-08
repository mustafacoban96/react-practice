import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button, Skeleton } from '@mui/material';
import Navbar from './components/Navbar';

const RatingStar = () => {
  const [value, setValue] = useState(3);
  const [loading ,setLoading] = useState(false);

//   const dSecond = () =>{
//     setTimeout(() => {
//         setLoading(true) 
//      }, 2000)
//   }
    


  return (
    
    <>
    <Navbar/>
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
    <Box sx={{p:'10px'}}>
        {/* {
            dSecond()
        } */}
        {
            loading ? (
                <Button sx={{width:'200px',padding:'10px'}} variant='contained' color='error'>Submit</Button>
            ) : (
                <Skeleton variant='rounded' sx={{width:"200px",backgroundColor:'gray.600',padding:'20px'}}/>
            )
        }
        
    </Box>
    </>
  );
}


export default RatingStar;
