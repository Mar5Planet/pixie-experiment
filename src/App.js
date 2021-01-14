import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

function App() {
  const [value, setValue] = useState('');
  const [checkedB, setCheckedB] = useState(true);


  const handleChange = (event) => {
    setCheckedB(!checkedB)
  };

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}` 
  return (
    <>
  <form onSubmit={(e) => {
    e.preventDefault()
    console.log(value)}} noValidate>
  <TextField
    onChange={(e) => setValue(e.target.value)}
    id="date"
    label="Availability"
    type="date"
    defaultValue={today}
    InputLabelProps={{
      shrink: true,
    }}
    />
    <Button onClick={() =>console.log(checkedB)} type="submit" variant="contained" color="secondary">
      Ultra Violence
  </Button>
</form>
<Switch 
checked={checkedB}
onChange={handleChange}
color="primary"
name="checkedB"/>
  </>
  )
}

export default App;
