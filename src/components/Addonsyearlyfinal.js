import React from 'react';

export default function Addonsyearlyfinal(props) {
  const { name, cost, text } = props;
  console.log(name);
  return (
    <>
      <div className="addon-text">
        <p>{name}</p>

        <p>+${cost}/yr</p>
      </div>
    </>
  );
}
