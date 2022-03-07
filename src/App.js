import React, { useState } from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Footer from './footer';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
      <div>
        {value === index && (<h2>{children}</h2>)}
      </div>
    )
  }

  return (
    <>
      <div className='main_div'>
        <div>
          <br />
          <h1>#ToDo </h1>
          <br />
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="All" />
            <Tab label="Active" />
            <Tab label="Completed" />
          </Tabs>
          <TabPanel value={value} index={0}><Tab1 /></TabPanel>
          <TabPanel value={value} index={1}><Tab2 /></TabPanel>
          <TabPanel value={value} index={2}><Tab3 /></TabPanel>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
