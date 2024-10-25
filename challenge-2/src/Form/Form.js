import React from 'react';
import Button from '../Button/Button';

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}> {/* Prevent constant refreshing because of typing or other stuff */}
      <Button
        buttonText='Users'
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText='Posts'
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText='Comments'
        reqType={reqType}
        setReqType={setReqType}
      />
    </form>
  );
};

export default Form;