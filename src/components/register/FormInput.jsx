import  React from "react";

const RegisterForm = React.lazy(()=>import("./RegisterForm"))

const FormInput = () => {
  return (
    <RegisterForm/>
  );
};

export default FormInput;
