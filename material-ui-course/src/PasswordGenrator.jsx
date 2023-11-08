import { Box, Stack, Typography } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';


const generatePassword = (length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) => {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+=<>?/[]{}';



  let allowedChars = '';

  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  if (includeNumbers) {
    allowedChars += numberChars;
  }
  if (includeSymbols) {
    allowedChars += symbolChars;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
};

const DemoPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));
const StrengthPaper = styled(Stack)(({ theme }) =>({
  borderRadius:'4px',
  padding:'6px',
  backgroundColor:'#ffff',
  
}))

const BigBoard = styled(Paper)(({theme}) =>({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  width:'30%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  marginTop:'20px'
}))

  


const PasswordGenrator = () => {

    const [password, setPassword] = useState('Password Generate');
    const [characterLength, setCharacterLength] = useState(6);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [strengthPaperStyle,setStrengthPaperStyle] = useState();
    const [passwordStrength2,setPasswordStrength2] = useState('Empty');
    const [showAlert, setShowAlert] = useState(false);
    const [errorAlert,setErrorAlert] = useState(false);


  const calculatePasswordStrength = (password,countOption) => {
    if (password.length > 10 && countOption > 2) {
      return 'Strong';
    } else if (password.length > 8 && countOption>0) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };
 
  const handleGeneratePassword = () => {
    const newPassword = generatePassword(
      characterLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );

    if(newPassword.includes('undefined')){
      console.log('tanımsız')
      setPassword('undefined');
      setErrorAlert(true)
      return 0;
    }
    // options true number;
    const booleanValues = [includeLowercase,includeNumbers,includeUppercase,includeSymbols]
    const trueCount = booleanValues.filter(value => value === true).length
    const passwordStrength = calculatePasswordStrength(newPassword,trueCount);
    let strengthPaperStyle = {};



  if (passwordStrength === 'Strong') {
   
    strengthPaperStyle = { backgroundColor: 'green' };
  } else if (passwordStrength === 'Medium') {
    
    strengthPaperStyle = { backgroundColor: 'orange' };
  } else {
    
    strengthPaperStyle = { backgroundColor: 'red' };
  }

  // Parola gücüne göre StrengthPaper bileşeninin rengini ayarladıktan sonra setStrengthPaperStyle ile güncelleyin.
    setStrengthPaperStyle(strengthPaperStyle);
    setPasswordStrength2(passwordStrength);
    setPassword(newPassword);
    
  };

  const handleCopyToClipboard = () => {
    
    navigator.clipboard.writeText(password);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000); 
  };

  return (
    <>    
    
    <Box sx={{padding:'50px',display:'flex,',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
      
    <Box sx={{textAlign:'center'}}>
        <Typography variant='h7' sx={{textAlign:'center', color:'gray', fontWeight:'700'}}>Password Generator</Typography>
    </Box>
    <Box sx={{ width: '100%' ,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Stack spacing={2} sx={{width:'30%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <DemoPaper sx={{width:'100%',display:'flex', justifyContent:'space-around',alignItems:'center',p:'12px'}}>
                {password && <Typography variant='h6' sx={{color:'lightgray'}}>{password}</Typography>}
                <ContentCopyIcon onClick={handleCopyToClipboard} sx={{color:'#32de84', cursor:'pointer'}}/>
          </DemoPaper>
      </Stack>
      
      <BigBoard direction='column'>
        <Stack direction='row' spacing={2} sx={{width:'90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding:'8px',marginTop:'10px'}}>
          <Typography sx={{fontWeight:'500',color:'gray'}} variant='h7'>Character Length</Typography>
          <Typography sx={{fontWeight:'500'}} variant='h5'>{characterLength}</Typography>
        </Stack>
        <Slider
          defaultValue={8}
          value={characterLength}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={6}
          max={14}
          onChange={e => setCharacterLength(e.target.value)}
          sx={{width:'80%',color:'#32de84',marginTop:'10px'}}
        />
        <FormGroup sx={{width:'100%',marginTop:'10px',padding:'15px'}}>
          <FormControlLabel control={<Checkbox checked={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} sx={{color:'#32de84', '&.Mui-checked': {
            color: '#32de84',
          },}} />} label="Include Uppercase Letters" />
          <FormControlLabel control={<Checkbox checked={includeLowercase} onChange={e => setIncludeLowercase(e.target.checked)} sx={{color:'#32de84', '&.Mui-checked': {
            color: '#32de84',
          },}} />} label="Include Lowercase Letters" />
          <FormControlLabel control={<Checkbox checked={includeNumbers} onChange={e => setIncludeNumbers(e.target.checked)} sx={{color:'#32de84', '&.Mui-checked': {
            color: '#32de84',
          },}} />} label="Include Numbers" />
          <FormControlLabel control={<Checkbox checked={includeSymbols} onChange={e => setIncludeSymbols(e.target.checked)} sx={{color:'#32de84', '&.Mui-checked': {
            color: '#32de84',
          },}} />} label="Include Symbols" />
          
          <Stack direction='row' spacing={2} sx={{backgroundColor:'black',width:'100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding:'8px',marginTop:'10px',borderRadius:'8px'}}>
              <Typography sx={{fontWeight:'800',color:'gray'}} variant='h6'>STRENGTH</Typography>
              <Stack direction='row' spacing={2} sx={{padding:'5px'}}>
                <Typography sx={{fontWeight:'500'}} variant='h7'>{passwordStrength2}</Typography>
                <StrengthPaper variant='soft' style={strengthPaperStyle}/>
                <StrengthPaper variant='soft' style={strengthPaperStyle}/>
                <StrengthPaper variant='soft' style={strengthPaperStyle}/>
                <StrengthPaper variant='soft' style={strengthPaperStyle}/>
                <StrengthPaper variant='soft' style={strengthPaperStyle}/>
              </Stack>
          </Stack>
          <Button
            sx={{color:'#32de84',marginTop:'10px','&:hover':{backgroundColor:'#32de84',color:'#1A2027'}}}
            endIcon={<ArrowForwardIcon/>} onClick={handleGeneratePassword}
          >Generate</Button>
        </FormGroup>
      </BigBoard>
    </Box>

    </Box>
    {showAlert && (
        <Snackbar
          open={showAlert}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          onClose={() => setShowAlert(false)}
          TransitionComponent={Slide}
        >
          <Alert variant='filled' severity="success">
            Password copied to clipboard!
          </Alert>
        </Snackbar>
      )}
      {errorAlert && (
        <Snackbar
          open={errorAlert}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          onClose={() => setErrorAlert(false)}
          TransitionComponent={Slide}
        >
          <Alert variant='filled' severity="error">
            Please choose content of password!
          </Alert>
        </Snackbar>
      )}
    </>

  )
}

export default PasswordGenrator
