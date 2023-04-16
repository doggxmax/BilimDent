import { Fragment } from "react";
import "./App.css";

import En from "./en/en";
import { Route, Routes } from "react-router-dom";
import EN from "./en/en";
import TR from "./tr/tr";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<EN />} />
        <Route path="/tr/*" element={<TR />} />
      </Routes>
    </Fragment>
  );
}

export default App;
