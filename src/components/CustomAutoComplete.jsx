import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import top100Films from './top100Films';
import top100Films from '../utils/top100Films';
import { topStudent } from '../utils/top100Films';

const CustomAutoComplete = () => {
  return (
    <Autocomplete
      disablePortal
      options={topStudent}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Student" />}
    />

  )
}

export default CustomAutoComplete