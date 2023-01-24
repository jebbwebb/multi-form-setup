import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, decrement, increment } from './counter';
import { useNavigate } from 'react-router-dom';
import Addonsmonthlyfinal from './Addonsmonthlyfinal';
import Addonsyearlyfinal from './Addonsyearlyfinal';
export default function Summary() {
  const isPlanName = useSelector((state) => state.counter.name);
  const isPlanPrice = useSelector((state) => state.counter.value);
  const isPlanType = useSelector((state) => state.counter.plan);
  const AddOnsMemes = useSelector((state) => state.counter.addOns);
  const optionSelection = useSelector((state) => state.counter.time);
  console.log(optionSelection);
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate('/thankyou');
  };
  const handleBack = () => {
    if (optionSelection) {
      navigate('/addonsyearly');
    } else if (!optionSelection) {
      navigate('/addons');
    }
  };

  const planYearly = () => {
    return <p>${isPlanPrice}/yr</p>;
  };
  const planMonthly = () => {
    return <p>${isPlanPrice}/mo</p>;
  };
  const totalYearly = () => {
    return <h4>${total}</h4>;
  };
  const totalMonthly = () => {
    return <h4>${total}</h4>;
  };
  const handleTotal = () => {
    if (optionSelection) {
      return totalYearly();
    } else {
      return totalMonthly();
    }
  };

  const handlePlanOption = () => {
    if (optionSelection) {
      return planYearly();
    } else {
      return planMonthly();
    }
  };
  const addOnCost = AddOnsMemes.reduce(
    (total, currentValue) => (total = total + parseInt(currentValue.cost)),
    0
  );
  const total = parseInt(addOnCost) + parseInt(isPlanPrice);

  return (
    <form>
      <div className="content3">
        <div className="content-text">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming</p>
        </div>
        <div className="summary-box">
          <div className="summary-text">
            <h2>
              {isPlanName} ({isPlanType})
            </h2>
            <div className="summary-price">
              <button className="change">Change</button>
              {handlePlanOption()}
            </div>
          </div>
          <div className="addon-body">
            {AddOnsMemes.map((elem) => {
              if (!optionSelection) {
                return <Addonsmonthlyfinal key={elem.id} {...elem} />;
              } else {
                return (
                  <Addonsyearlyfinal
                    key={elem.id}
                    {...elem}
                  ></Addonsyearlyfinal>
                );
              }
            })}
          </div>
        </div>
        <div className="total">
          <p>Total(per month)</p>
          <h4>{handleTotal()}</h4>
        </div>
        <div className="bottom-buttons3">
          <button className="goBack" onClick={handleBack}>
            Go Back
          </button>
          <button className="confirm-button" onClick={handleRoute}>
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
}
