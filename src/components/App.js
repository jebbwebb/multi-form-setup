import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../css/app.css';
import Addons from './Addons';
import Finalform from './Finalform';
import Selectplan from './Selectplan';
import Addonyearly from './Addonyearly';
import Sidebarmobile from './Sidebarmobile';
import { HashRouter, Route, Routes } from 'react-router-dom';
import summary from './Summary';
import Summary from './Summary';
import Thankyou from './Thankyou';

function App() {
  const [width, setWidth] = useState(window.innerWidth < 850);

  const updateMedia = () => {
    setWidth(window.innerWidth < 850);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const monthlyAdd = [
    {
      id: 1,
      name: 'Online Services',
      cost: 1,
      text: 'Access to multiplayer games',
    },
    {
      id: 2,
      name: 'Larger Storage',
      cost: 2,
      text: 'Extra 1TB of cloud save',
    },
    {
      id: 3,
      name: 'Customizable Profile',
      cost: 2,
      text: 'Custom theme on your profile',
    },
  ];
  const yearlyAdd = [
    {
      id: 1,
      name: 'Online Services',
      cost: 10,
      text: 'Access to multiplayer games',
    },
    {
      id: 2,
      name: 'Larger Storage',
      cost: 20,
      text: 'Extra 1TB of cloud save',
    },
    {
      id: 3,
      name: 'Customizable Profile',
      cost: 20,
      text: 'Custom theme on your profile',
    },
  ];

  return (
    <div className="main">
      <Sidebarmobile></Sidebarmobile>

      <div className="plan">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/yourinfo" element={<Finalform />}></Route>
          <Route path="/selectplan" element={<Selectplan />}></Route>
          <Route
            path="/addons"
            element={<Addons monthlyAdd={monthlyAdd}></Addons>}
          ></Route>
          <Route
            path="/addonsyearly"
            element={<Addonyearly yearlyAdd={yearlyAdd} />}
          ></Route>
          <Route path="/summary" element={<Summary />}></Route>

          <Route path="/thankyou" element={<Thankyou />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
