import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CharHomePage from "../charHomePage/charHomePage";

const Routes1 = () => {
    return (
        <BrowserRouter>
      <Routes>
       
          <Route path="charInfo" element={<CharHomePage/>} />
         
        
      </Routes>
    </BrowserRouter>
    )
}
export default Routes1;