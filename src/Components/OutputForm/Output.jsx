// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';

import { solve } from './Solve/solver';

import Table from './Table';

const Output = () => {
  const {
    nameOfAlgo: selectedAlgo,
    arrivalTime,
    burstTime,
    timeQuantum,
    priority: priorities,
  } = useSelector((state) => state.inputs);

  if (!arrivalTime.length || !burstTime.length) {
    return (
      <div
        style={{
        //   margin: '30px 10px',
          
          padding: '10px 30px',
          borderRadius: 10,
          minHeight: '50px',
          boxShadow: '5px 5px 10px',
        }}
        className='bg-gray-300'
      >
        <div className='bg-gray-300 '>
          <p style={{ fontSize: 35 }}>Output</p>
        </div>
        <p style={{ fontSize: 18 }}>Table will be shown here ....</p>
      </div>
    );
  } else {
    const { solvedProcessesInfo } = solve(
      selectedAlgo,
      arrivalTime,
      burstTime,
      timeQuantum,
      priorities
    );
    return (
      <>
        <div
         className="bg-gray-300 p-8 rounded-lg w-[600px] shadow-md"
        >
          <h1 className='text-red-500  font-medium'>Output : <span className='text-black'>You chossed {selectedAlgo} CPU Scheduling Algorithm</span></h1>
         
          <Table value={solvedProcessesInfo} />
        </div>
      </>
    );
  }
};

export default Output;