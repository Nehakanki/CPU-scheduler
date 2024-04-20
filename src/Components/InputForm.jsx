// eslint-disable-next-line no-unused-vars
import  { useState } from 'react';
 import { FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';
 import { VariableForm } from './variableForm/VariableForm';

const InputForm = () => {
  const [algo, setAlgo] = useState('FCFS');

  const handleChange = (e) => {
    setAlgo(e.target.value);
  };

  return (
    <Paper className="p-8 rounded-md shadow-md">
      <FormControl fullWidth>
        <InputLabel id="algo-label">Algorithm</InputLabel>
        <Select
          labelId="algo-label"
          id="algo-select"
          value={algo}
          onChange={handleChange}
          label="Algorithm"
        >
          <MenuItem value='FCFS'>First Come First Serve, FCFS</MenuItem>
          <MenuItem value='SJF'>Shortest Job First, SJF (Non Preemitive)</MenuItem>
          <MenuItem value='SRTF'>Shortest Remaining Time First, SRTF</MenuItem>
          <MenuItem value='RR'>Round Robin, RR</MenuItem>
          <MenuItem value='NPP'>Priority, NPP (Non Preemitive)</MenuItem>
          <MenuItem value='PP'>Priority, PP (Preemitive)</MenuItem>
        </Select>
      </FormControl>

      <VariableForm nameOfAlgo={algo} />
    </Paper>
    
  );
};

export default InputForm;
