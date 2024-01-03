import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignUpMain from "./pages/signup/SignUpMain";
import SignUpPage from "./pages/SignUpPage";
import SignUpPageLeft from "./pages/SignUpPageLeft";
import InputStyle from "./components/input/InputStyle";

import SignUpNew from "./pages/signup/signUpNew/SignUpNew";
import Invitation from "./pages/signup/invitation/Invitation";
import InvitationTwo from "./pages/signup/invitationTwo/InvitationTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/sign_up_new" element={<SignUpNew />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/invitationTwo" element={<InvitationTwo />} />
      </Routes>
    </>
  );
}

export default App;
