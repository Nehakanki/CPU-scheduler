// eslint-disable-next-line no-unused-vars
import React from 'react';

import PropTypes from 'prop-types'; // Import PropTypes library

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

const Table = ({ value: solvedProcessesInfo }) => {
  const total = (array) =>
    array.reduce((acc, currentValue) => acc + currentValue, 0);

  const numberOfProcesses = solvedProcessesInfo.length;
  const turnaoundTime = solvedProcessesInfo.map((process) => process.tat);
  const waitingTime = solvedProcessesInfo.map((process) => process.wat);

  const totalTAT = total(turnaoundTime);
  const averageTAT = totalTAT / numberOfProcesses;

  const totalWAT = total(waitingTime);
  const averageWAT = totalWAT / numberOfProcesses;

  return (
    <>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Job</th>
            <th className='px-4 py-2'>Arrival Time</th>
            <th className='px-4 py-2'>Burst Time</th>
            <th className='px-4 py-2'>Finish Time</th>
            <th className='px-4 py-2'>Turn Around Time</th>
            <th className='px-4 py-2'>Waiting Time</th>
          </tr>
        </thead>
        <tbody>
          {solvedProcessesInfo.map((item) => (
            <tr key={`process-row-${item.job}`}>
              <td className='border px-4 py-2'>{item.job}</td>
              <td className='border px-4 py-2'>{item.at}</td>
              <td className='border px-4 py-2'>{item.bt}</td>
              <td className='border px-4 py-2'>{item.ft}</td>
              <td className='border px-4 py-2'>{item.tat}</td>
              <td className='border px-4 py-2'>{item.wat}</td>
            </tr>
          ))}
          {
            <tr>
              <td className='border px-4 py-2 text-right' colSpan={4}>
                Average
              </td>
              <td className='border px-4 py-2'>{precisionRound(averageTAT, 3)}</td>
              <td className='border px-4 py-2'>{precisionRound(averageWAT, 3)}</td>
            </tr>
          }
        </tbody>
      </table>
    </>
  );

};
Table.propTypes = {
    value: PropTypes.arrayOf(PropTypes.object).isRequired // Define value prop as an array of objects
  };
  

export default Table;
