import React from "react";
import { useHistory } from "react-router-dom";
import ProfileAppBar from "../../ui/ProfileAppBar";
import { useSelector } from "react-redux";
import BasicButton from "../../ui/BasicButton";

export const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const { goBack } = useHistory();

  return (
    <>
      <ProfileAppBar />
      <div className="section">
        <p>Your email: {profile.email}</p>
        <BasicButton name="Go back" type="undo" handleClick={() => goBack()} />
      </div>
    </>
  );
};
