import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
  const [value, setValue] = useState('');

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}` 
  return (
    <>
  <form onSubmit={(e) => {
    e.preventDefault()
    console.log(value, today)}} noValidate>
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
    <Button type="submit" variant="contained" color="secondary">
    Submit
  </Button>
</form>
  </>
  )
}

export default App;
