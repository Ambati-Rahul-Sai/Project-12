import { auth, provider } from "../firebase";

function signInApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}
export default signInApi;
