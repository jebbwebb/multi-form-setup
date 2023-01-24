import React from 'react';

export default function Addonsmonthlyfinal(props) {
  const { name, cost, text } = props;
  console.log(name);
  return (
    <>
      <div className="addon-container">
        <p>{name}</p>
        <div className="addon-price">
          <p>+${cost}/mo</p>
        </div>
      </div>
    </>
  );
}
