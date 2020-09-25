import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./firebase/config";
import { uploadUserProfileAction } from "./redux/actions";
import { CheckStartPage } from "./routes";

export function App() {
  const [userData, setUserData] = useState("");
  const [page, setPage] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    db.auth().onAuthStateChanged((user) => {
      setUserData(user);
    });
  }, []);

  useEffect(() => {
    if (userData) {
      const profile = {
        displayName: userData.displayName,
        uid: userData.uid,
        email: userData.email,
      };
      dispatch(uploadUserProfileAction(profile));
    }
    setPage(CheckStartPage(userData));
  }, [userData]);

  return <>{page}</>;
}
