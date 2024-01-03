import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignUpMain from "./pages/signup/SignUpMain";
import SignUpPage from "./pages/SignUpPage";
import SignUpPageLeft from "./pages/SignUpPageLeft";
import InputStyle from "./components/input/InputStyle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/signup" element={<SignUpMain />} />
      </Routes>
    </>
  );
}

export default App;
