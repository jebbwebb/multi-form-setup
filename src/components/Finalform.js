import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

import Selectplan from './Selectplan';

export default function Finalform() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? (
        <Form submitForm={submitForm} />
      ) : (
        navigate('/selectplan')
      )}
    </>
  );
}
