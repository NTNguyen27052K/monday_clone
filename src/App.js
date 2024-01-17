import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignUpMain from "./pages/signup/SignUpMain";
import InvitationTwoL from "./pages/signup/InvitationTwo";
import InvitationThree from "./pages/signup/InvitationThree";
import Invitationfour from "./pages/signup/Invitationfour";
import InvitationFive from "./pages/signup/InvitationFive";
import InvitationSix from "./pages/signup/InvitationSix";
import InviteMembers from "./pages/inviteMembers/InviteMembers";
// import InvitationTwo from "./pages/signup/invitationTwo/InvitationTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign_up_new" element={<SignUp />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/invitation" element={<InvitationTwoL />} />
        <Route path="/invitationThree" element={<InvitationThree />} />
        <Route path="/invitationFour" element={<Invitationfour />} />
        <Route path="/invitationFive" element={<InvitationFive />} />
        <Route path="/invitationSix" element={<InvitationSix />} />
        <Route path="/inviteMembers" element={<InviteMembers />} />

        {/* <Route path="/sign_up_new" element={<SignUpNew />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/invitationTwo" element={<InvitationTwo />} /> */}
      </Routes>
    </>
  );
}

export default App;
