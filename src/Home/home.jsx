// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputForm from '../Components/InputForm';
import Output from '../Components/OutputForm/Output';

const Home = () => {
  return (
    <>
      <div className="mt-12 mx-auto max-w-4xl">
        <h1 className="mb-12 text-red-500 text-3xl font-bold">CPU SCHEDULING VISUALIZER</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <InputForm />
          
          </div>
          <div><Output />
            
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full text-center bg-gray-100 p-4">
        Made By Neha Kanki|{' '}
        <a
          className="text-black underline"
          href='https://github.com/anandhu720/CPU-Scheduling-Visualizer'
        >
          Github
        </a>
      </footer>
    </>
  );
};

export default Home;
