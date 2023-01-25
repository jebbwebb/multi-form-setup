import React from 'react';

export default function Addonsmonthlyfinal(props) {
  const { name, cost, text } = props;
  console.log(name);
  return (
    <>
      <div className="addon-container">
        <h5>{name}</h5>

        <p>+${cost}/mo</p>
      </div>
    </>
  );
}
