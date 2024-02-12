import { Link, Route, Routes } from "react-router-dom";
import EcardDesignComponent from "../Components/EcardDesignComponent/EcardDesignComponent";

const ApplicationRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Redirect />} />
      <Route path="/u/*" element={<EcardDesignComponent />} />
      <Route path="/*" element={<Redirect />} />
    </Routes>
  );
};

const Redirect = () => {
  window.location.replace("https://selftact.com/");
  return <div></div>;
};

export default ApplicationRoute;
