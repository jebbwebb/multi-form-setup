import React from 'react';
import arcadeImage from '../../src/images/icon-arcade.svg';
import advancedImage from '../../src/images/icon-advanced.svg';
import proImage from '../../src/images/icon-pro.svg';

import Slider from './Slider';

export default function Selectplan({}) {
  const image1 = arcadeImage;
  const image2 = advancedImage;
  const image3 = proImage;

  return (
    <>
      <div className="content">
        <div className="content-text">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing</p>
        </div>

        <Slider></Slider>
      </div>
    </>
  );
}
