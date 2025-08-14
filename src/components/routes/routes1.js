
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharHomePage from "../charHomePage/charHomePage";

import App from "../app/app";

const Routes1 = () => {
    return (
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="charInfo" element={<CharHomePage/>} />
         
        
      </Routes>
    </BrowserRouter>
    )
}
export default Routes1;