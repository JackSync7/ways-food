import React from "react";
import foto from "../../assets/Logo.png";

function CardTransaction(props) {
  return (
    <div className="">
      <div className="w-80 p-6 text-lg h-28 gap-2 bg-white shadow-lg font-serif font-semibold flex justify-center items-center">
        <div className="mr-32 mx-auto">
          <p className="text-neutral-800 text-sm text-left">{props.name}</p>
          <p className="text-neutral-700 font-sans text-xs text-left">
            12 March 2022
          </p>
          <p className="text-redOld font-sans text-sm font-medium mt-2 text-left">
            Total : Rp.{props.total}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img className="w-20" src={foto} alt="loading image" />
          <Statuspayment status={props.status} />
        </div>
      </div>
    </div>
  );
}

const Statuspayment = ({ status }) => {
  switch (status) {
    case "pending":
      return <p className="bg-yellowMain text-brownMain text-sm">Pending</p>;
    case "success":
      return <p className="bg-greenLow text-brownMain text-sm">Success</p>;
    case "failed":
      return <p className="bg-redOld text-neutral-50 text-sm">Failed</p>;
    default:
      return;
  }
};

export default CardTransaction;
