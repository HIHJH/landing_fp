import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PreRegistration from "./pages/PreRegistration";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pre-registration" element={<PreRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
