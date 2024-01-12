import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignUpMain from "./pages/signup/SignUpMain";
import InvitationTwoL from "./pages/signup/InvitationTwo";
// import InvitationTwo from "./pages/signup/invitationTwo/InvitationTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign_up_new" element={<SignUp />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/invitation" element={<InvitationTwoL />} />
        {/* <Route path="/sign_up_new" element={<SignUpNew />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/invitationTwo" element={<InvitationTwo />} /> */}
      </Routes>
    </>
  );
}

export default App;
