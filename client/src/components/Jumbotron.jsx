import React from "react";
import Imges from "../assets/foto.png";

function Jumbotron() {
  return (
    <div>
      <div>
        <div className="w-full h-1/3 bg-yellowMain">
          <img className="mx-auto w-4/6 p-6 " src={Imges} alt="Loading" />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
