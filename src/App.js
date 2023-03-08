import React from "react";
import Banner from "./Components/Banner";
import CardContainer from "./Components/CardContainer";
import Navbar from "./Components/Navbar";
import InputField from "./Components/InputField";
import Capsules from "./Components/Capsules";

const App = () => {
  return (
    <div className=" text-center md:text-left ">
      <div className="banner-wrap">
        <Navbar />
        <div className="pl-12 pt-2 pr-12">
          <Banner />
        </div>
      </div>

      <InputField />
      {/* <Capsules /> */}
    </div>
  );
};

export default App;
