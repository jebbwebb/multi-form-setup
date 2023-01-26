import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementByAmount } from './counter';
export default function Yearlyaddons(props) {
  const { name, cost, text, id, handleStuff } = props;

  return (
    <>
      <div className="Addon-container">
        <div className="Addons">
          <label className="addon-label" for={id}>
            <div className="addon">
              <input
                className="addon-input"
                type="checkbox"
                name={name}
                value={cost}
                id={id}
                text-attribute={text}
                onClick={(e) => handleStuff(e)}
              ></input>
              <div className="addon-container2">
                <div className="addon-text">
                  <h2>{name}</h2>
                  <p>{text}</p>
                </div>

                <div className="cost">
                  <p>+{cost}/yr</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
