import { db, fs } from "../firebase/config";
import {
  uploadUserProfileAction,
  errorAction,
  signOutAction,
} from "../redux/actions";

export const createUserWitnEmailAndPassword = async (
  { nickname, email, password },
  dispatch
) => {
  try {
    await db.auth().createUserWithEmailAndPassword(email, password);
    db.auth().currentUser.updateProfile({
      displayName: nickname,
    });
    const user = db.auth().currentUser;
    dispatch(uploadUserProfileAction(user));
  } catch (error) {
    dispatch(errorAction(error));
  }
};

export const onAuthUser = async (dispatch) => {
  db.auth().onAuthStateChanged((user) => {
    if (!user) {
      console.log(user);
    }
    dispatch(uploadUserProfileAction(user));
  });
};

export const signInWitnEmailAndPassword = async (
  { email, password },
  dispatch
) => {
  try {
    await db.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    dispatch(errorAction(error));
  }
};

export const signOut = (dispatch) => {
  db.auth().signOut();
  dispatch(signOutAction(true));
};

export const addDataToCloudFirebase = (id, newContact) => {
  fs.collection(`${id}`).add({ ...newContact });
};

export const deleteContactFromCloudFirebase = (id, idDoc) => {
  fs.collection(`${id}`).doc(`${idDoc}`).delete();
};
