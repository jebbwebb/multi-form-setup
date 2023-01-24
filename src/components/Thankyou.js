import React from 'react';
import image from '../../src/images/icon-thank-you.svg';
export default function Thankyou() {
  const image1 = image;
  return (
    <div className="thank-container">
      <div className="thank-image">
        <img src={image1}></img>
      </div>
      <div className="thank-text">
        <h1>Thank You!</h1>
      </div>
      <div className="thank-body">
        <p>
          Thank you for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to mail us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
}
