import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increment, addOnName, addOnCost, addOnText } from './counter';

import Monthlyaddons from './Monthlyaddons';

export default function Addons({ monthlyAdd }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/selectplan');
  };
  let arr = [];
  //useEffect to reset state back to intial value so it doesnt save previous states
  //do the same thing you did with selectplan but do it for the addons so they can have ids
  console.log(arr);
  const dispatch = useDispatch();
  const handleStuff = (e) => {
    let addOnFinal = {
      id: 0,
      name: '',
      cost: 0,
      text: '',
    };

    if (e.target.checked) {
      addOnFinal.name = e.target.name;
      addOnFinal.cost = e.target.value;
      addOnFinal.id = e.target.id;
      addOnFinal.text = e.target.getAttribute('text-attribute');

      arr.push(addOnFinal);
    } else {
      var index = arr.findIndex((item) => item.id === e.target.id);
      arr.splice(index, 1);
    }
    console.log(arr);
  };

  const routeChange = (path) => {
    navigate(path);
  };
  const changeRoute = (e) => {
    routeChange('/summary');
  };

  return (
    <>
      <div className="content2">
        <div className="content-text">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enchance your gaming experience.</p>
        </div>
        <form
          onSubmit={() => {
            dispatch(addOnName(arr));
            changeRoute();
          }}
        >
          {monthlyAdd.map((addOns) => {
            return (
              <Monthlyaddons
                key={addOns.id}
                {...addOns}
                handleStuff={handleStuff}
              ></Monthlyaddons>
            );
          })}

          <div className="bottom-buttons2">
            <button onClick={handleBack} className="goBack" type="button">
              Go Back
            </button>
            <button className="nextStep" type="submit">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
