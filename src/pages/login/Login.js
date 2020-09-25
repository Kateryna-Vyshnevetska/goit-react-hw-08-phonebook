import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "../../redux/selectors";
import { signInWitnEmailAndPassword } from "../../requests/requests";
import BasicButton from "../../ui/BasicButton";
import { BasicTextFields } from "../../ui/BasicTextField";
import LoginAppBar from "../../ui/LoginAppBar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const loginInfo = { email, password };
    setEmail("");
    setPassword("");
    signInWitnEmailAndPassword(loginInfo, dispatch);
  };

  return (
    <>
      <LoginAppBar />
      <div className="section">
        <form onSubmit={handleSubmit} className="authForm">
          {ErrorMessage(state) ? <p>{ErrorMessage(state)}</p> : null}
          <BasicTextFields
            label={"Email"}
            name="email"
            value={email}
            handleChange={setEmail}
          />
          <BasicTextFields
            label={"Password"}
            name="password"
            value={password}
            handleChange={setPassword}
          />
          <BasicButton
            name={"Login"}
            type={"send"}
            handleClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};
