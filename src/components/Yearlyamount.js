import React from 'react';
import { useState } from 'react';
import arcadeImage from '../../src/images/icon-arcade.svg';
import advancedImage from '../../src/images/icon-advanced.svg';
import proImage from '../../src/images/icon-pro.svg';
const image1 = arcadeImage;
const image2 = advancedImage;
const image3 = proImage;

export default function Yearlyamount(props) {
  const {
    yearlyOptions,

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
              value={yearlyOptions[0].price}
              text-attribute={yearlyOptions[0].planType}
              name-attribute={yearlyOptions[0].name}
              onClick={(e) => handleStuff(e)}
              onChange={handleStyle}
            ></input>
          </span>
          <div className="planImg">
            <img src={image1}></img>
          </div>

          <div className="planText">
            <h2>{yearlyOptions[0].name}</h2>
            <p>${yearlyOptions[0].price}/yr</p>
            <span>2 months free</span>
          </div>
        </label>
      </div>
      <div className={style2}>
        <label for="planLabel2">
          <input
            value={yearlyOptions[1].price}
            type="radio"
            name="plan"
            name-attribute={yearlyOptions[1].name}
            id="planLabel2"
            text-attribute={yearlyOptions[1].planType}
            onClick={(e) => handleStuff(e)}
            onChange={handleStyle2}
          ></input>
          <div className="planImg">
            <img src={image2}></img>
          </div>

          <div className="planText">
            <h2>{yearlyOptions[1].name}</h2>
            <p>${yearlyOptions[1].price}/yr</p>
            <span>2 months free</span>
          </div>
        </label>
      </div>
      <div className={style3}>
        <label for="planLabel3">
          <input
            value={yearlyOptions[2].price}
            type="radio"
            name="plan"
            id="planLabel3"
            text-attribute={yearlyOptions[2].planType}
            name-attribute={yearlyOptions[2].name}
            onClick={(e) => handleStuff(e)}
            onChange={handleStyle3}
          ></input>
          <div className="planImg">
            <img src={image3}></img>
          </div>

          <div className="planText">
            <h2>{yearlyOptions[2].name}</h2>
            <p>${yearlyOptions[2].price}/yr</p>
            <span>2 months free</span>
          </div>
        </label>
      </div>
    </div>
  );
}
