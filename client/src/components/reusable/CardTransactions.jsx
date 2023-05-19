import React from "react";
import foto from "../../assets/Logo.png";

function CardTransactions() {
  return (
    <div className="">
      <div className="w-96 p-6 text-lg h-28 gap-2 bg-white shadow-lg font-serif font-semibold flex justify-center items-center">
        <div className="mr-32 mx-auto">
          <p className="text-neutral-800 text-sm text-left">
            {/* {state?.user.role === "partner" ? props.nameBuyer : props.name} */}
            abang
          </p>
          <p className="text-neutral-700 font-sans text-xs text-left">
            12 March 2022
          </p>
          <p className="text-redOld font-sans text-sm font-medium mt-2 text-left">
            {/* Total : Rp.{props.total} */}total: 190000
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img className="w-20" src={foto} alt="loading image" />
          {/* <Statuspayment status={props.status} /> */}sucses
        </div>
      </div>
    </div>
  );
}

export default CardTransactions;
