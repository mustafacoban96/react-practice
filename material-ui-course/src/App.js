import { Typography,Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './App.css';
import {makeStyles} from "@mui/material"

function App() {
  return (
    <>
    {/* Typography */}
      {/* <Typography 
      variant='h3'
      color="secondary"
      align='center'
      >merhaba</Typography>
      <Typography
      color="red"
      noWrap
      >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, est porro et doloribus perferendis aspernatur pariatur veniam cumque. Natus expedita quaerat labore laboriosam est enim modi ratione ad veniam ullam!
      </Typography>
      <Typography variant='h1' component="h4">
        lalalalalaal
      </Typography> */}


      {/* Button */}
      {/* <Button variant='contained' sx={{}}>Submit</Button>
      <Button 
      variant='contained'
      color='secondary'
      onClick={() => console.log("merhaba")}
      >Submit</Button> */}

      {/* Icon */}
      <Button
      variant='contained'
      color='error'
      // startIcon={<LogoutIcon/>}     
      endIcon={<LogoutIcon/>}      
      >Logout</Button>
      </>
  );
}

export default App;
