import { fcfs } from './FCFS.js';
import { sjf } from './SJF';
import { srtf } from './SRTF.js';
import { rr } from './RR.js';
import { npp } from './NPP';
import { pp } from './PP.js';

export const solve = (
  selectedAlgo,
  arrivalTime,
  burstTime,
  timeQuantum,
  priorities
) => {
  if (selectedAlgo === 'FCFS') {
    return fcfs(arrivalTime, burstTime);
  } else if (selectedAlgo === 'SJF') {
    return sjf(arrivalTime, burstTime);
  } else if (selectedAlgo === 'SRTF') {
    return srtf(arrivalTime, burstTime);
  } else if (selectedAlgo === 'RR') {
    return rr(arrivalTime, burstTime, timeQuantum);
  } else if (selectedAlgo === 'NPP') {
    return npp(arrivalTime, burstTime, priorities);
  } else if (selectedAlgo === 'PP') {
    return pp(arrivalTime, burstTime, priorities);
  } else {
    return;
  }
};