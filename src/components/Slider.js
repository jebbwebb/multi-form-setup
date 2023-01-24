import React, { useState } from 'react';
import Yearlyslider from './Yearlyslider';
import Yearlyamount from './Yearlyamount';
import { useDispatch, useSelector } from 'react-redux';

import {
  incrementByAmount,
  decrement,
  increment,
  option,
  removeOption,
} from './counter';
import { useNavigate } from 'react-router-dom';
export default function Slider({}) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [monthlyChecked, setMonthlyChecked] = useState('isChecked');
  const [yearlyChecked, setYearlyChecked] = useState('notChecked');
  const optionSelection = useSelector((state) => state.counter.time);
  console.log(optionSelection);

  let isStuff = 'Arcade';
  let isPrice = 9;
  let isPlan = 'monthly';

  const handleYearly = () => {
    if (isChecked === false) {
      dispatch(option());
      setMonthlyChecked('notChecked');
      setYearlyChecked('isChecked');
    } else if (isChecked === true) {
      dispatch(removeOption());
      setMonthlyChecked('isChecked');
      setYearlyChecked('notChecked');
    }
  };
  const handleFirstInput = () => {
    if (isChecked === true) {
      return (isStuff = 'Arcade'), (isPrice = 90), (isPlan = 'yearly');
    }
  };

  const handleMonthly = () => {
    setMonthlyChecked('isChecked');
    setYearlyChecked('notChecked');
  };

  const handleStuff = (e) => {
    isStuff = e.target.getAttribute('name-attribute');

    isPrice = e.target.value;
    isPlan = e.target.getAttribute('text-attribute');
  };
  const routeChange = (path) => {
    navigate(path);
  };
  const handleRoute = () => {
    if (isChecked) {
      routeChange('/addonsyearly');
    } else {
      routeChange('/addons');
    }
  };
  const handleBack = () => {
    navigate('/yourinfo');
  };

  {
  }
  const dispatch = useDispatch();
  const handleSelection = (e) => {
    e.preventDefault();
  };

  const monthlyOptions = [
    {
      id: 1,
      name: 'Arcade',
      price: 9,
      planType: 'monthly',
    },
    {
      id: 2,
      name: 'Advanced',
      price: 12,
      planType: 'monthly',
    },
    {
      id: 3,
      name: 'Pro',
      price: 15,
      planType: 'monthly',
    },
  ];
  const yearlyOptions = [
    {
      id: 1,
      name: 'Arcade',
      price: 90,
      text: '2 months free',
      planType: 'yearly',
    },
    {
      id: 2,
      name: 'Advanced',
      price: 120,
      planType: 'yearly',
    },
    {
      id: 3,
      name: 'Pro',
      price: 150,
      planType: 'yearly',
    },
  ];

  return (
    <>
      <form
        id="planSubmit"
        onSubmit={() =>
          dispatch(incrementByAmount(isPrice)) &&
          dispatch(decrement(isStuff)) &&
          dispatch(increment(isPlan)) &&
          handleRoute()
        }
      >
        <div className="options-container">
          {!isChecked ? (
            <Yearlyslider
              monthlyOptions={monthlyOptions}
              handleStuff={handleStuff}
            />
          ) : (
            <Yearlyamount
              yearlyOptions={yearlyOptions}
              handleStuff={handleStuff}
            />
          )}
        </div>
      </form>
      <div className="slider">
        <h4 className={monthlyChecked}>Monthly</h4>
        <label className="switch">
          <input
            type="checkbox"
            onClick={() => setIsChecked((isChecked) => !isChecked)}
            onChange={handleFirstInput()}
            onChange={() => {
              handleYearly();
            }}
            value={isChecked}
          ></input>

          <span className="slide"></span>
        </label>
        <h4 className={yearlyChecked}>Yearly</h4>
      </div>
      <div className="bottom-buttons">
        <button onClick={handleBack} className="goBack" type="button">
          Go Back
        </button>

        <button className="nextStep" type="submit" form="planSubmit">
          Next Step
        </button>
      </div>
    </>
  );
}
