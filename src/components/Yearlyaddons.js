import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementByAmount } from './counter';
export default function Yearlyaddons(props) {
  const { name, cost, text, id, handleStuff } = props;

  return (
    <>
      <div className="Addon-container">
        <div className="Addons">
          <div className="addon">
            <label for={id} className="addon-label">
              <input
                className="addon-input"
                type="checkbox"
                name={name}
                value={cost}
                id={id}
                text-attribute={text}
                onClick={(e) => handleStuff(e)}
              ></input>
              <h2>{name}</h2>
              <p>{text}</p>
            </label>
            <div className="cost">
              <p>+${cost}/yr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
