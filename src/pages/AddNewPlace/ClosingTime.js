import * as React from 'react';  
import TextField from '@mui/material/TextField';  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';  
import Stack from '@mui/material/Stack';  
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';  
import "./addnewplace.css";
 
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';  
 
export default function ClosingTime()   
{  
 const newDate= new Date()
// const newDate=new Date().toTimeString('2018-01-01T00:00:00.000Z')

  const [value, setValue] = React.useState(newDate);  
    return (  
      <LocalizationProvider dateAdapter={AdapterDateFns} >  
        <Stack space={3} >  
          <MobileTimePicker
        
            label="Closing Time"  
            value={value}  
            onChange={(newValue) => {  
              setValue(newValue);  
            }  
}  
          renderInput={(params) => <TextField {...params} />}  
        />  
       
      </Stack>  
    </LocalizationProvider>  
  );  
}  