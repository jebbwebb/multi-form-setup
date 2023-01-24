import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementByAmount } from './counter';
import Yearlyamount from './Yearlyamount';
import arcadeImage from '../../src/images/icon-arcade.svg';
import advancedImage from '../../src/images/icon-advanced.svg';
import proImage from '../../src/images/icon-pro.svg';
const image1 = arcadeImage;
const image2 = advancedImage;
const image3 = proImage;

export default function MonthlyPrices(props) {
  const {
    monthlyOptions,

    handleStuff,
  } = props;

  const [style, setStyle] = useState('option2');
  const [style2, setStyle2] = useState('option');
  const [style3, setStyle3] = useState('option');
  const handleStyle = () => {
    setStyle('option2');
    setStyle2('option');
    setStyle3('option');
  };
  const handleStyle2 = () => {
    setStyle2('option2');
    setStyle('option');
    setStyle3('option');
  };
  const handleStyle3 = () => {
    setStyle3('option2');
    setStyle('option');
    setStyle2('option');
  };

  return (
    <div className="options">
      <div className={style}>
        <label for="planLabel">
          <span>
            <input
              defaultChecked
              type="radio"
              name="plan"
              id="planLabel"
              value={monthlyOptions[0].price}
              text-attribute={monthlyOptions[0].planType}
              name-attribute={monthlyOptions[0].name}
              onClick={(e) => handleStuff(e)}
              onChange={handleStyle}
            ></input>
          </span>
          <div className="planImg">
            <img src={image1}></img>
          </div>

          <div className="planText">
            <h2>{monthlyOptions[0].name}</h2>
            <p>${monthlyOptions[0].price}/mo</p>
          </div>
        </label>
      </div>
      <div className={style2}>
        <label for="planLabel2">
          <input
            value={monthlyOptions[1].price}
            type="radio"
            name="plan"
            name-attribute={monthlyOptions[1].name}
            id="planLabel2"
            text-attribute={monthlyOptions[1].planType}
            onClick={(e) => handleStuff(e)}
            onChange={handleStyle2}
          ></input>
          <div className="planImg">
            <img src={image2}></img>
          </div>

          <div className="planText">
            <h2>{monthlyOptions[1].name}</h2>
            <p>${monthlyOptions[1].price}/mo</p>
          </div>
        </label>
      </div>
      <div className={style3}>
        <label for="planLabel3">
          <input
            value={monthlyOptions[2].price}
            type="radio"
            name="plan"
            id="planLabel3"
            text-attribute={monthlyOptions[2].planType}
            name-attribute={monthlyOptions[2].name}
            onClick={(e) => handleStuff(e)}
            onChange={handleStyle3}
          ></input>
          <div className="planImg">
            <img src={image3}></img>
          </div>

          <div className="planText">
            <h2>{monthlyOptions[2].name}</h2>
            <p>${monthlyOptions[2].price}/mo</p>
          </div>
        </label>
      </div>
    </div>
  );
}
