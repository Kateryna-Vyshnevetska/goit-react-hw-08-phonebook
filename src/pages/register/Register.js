import React, { useState } from "react";
import { ErrorMessage } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { createUserWitnEmailAndPassword } from "../../requests/requests";
import BasicButton from "../../ui/BasicButton";
import { BasicTextFields } from "../../ui/BasicTextField";
import RegisterAppBar from "../../ui/RegisterAppBar";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userData = { email, password };
    createUserWitnEmailAndPassword(userData, dispatch);
  };

  return (
    <>
      <RegisterAppBar />
      <div className="section">
        <form onSubmit={handleSubmit} className="authForm">
          {ErrorMessage(state) ? <p>{ErrorMessage(state)}</p> : null}
          <BasicTextFields
            label={"Email"}
            name={"email"}
            value={email}
            handleChange={setEmail}
          />
          <BasicTextFields
            label={"Password"}
            name={"password"}
            value={password}
            handleChange={setPassword}
          />
          <BasicButton
            name={"Register"}
            type={"send"}
            handleClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};
