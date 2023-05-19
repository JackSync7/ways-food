import React from "react";

function CardProduct(props) {
  return (
    <div>
      <div className="w-fit px-4 text-lg h-16 text-brownMain gap-2 bg-neutral-50 shadow-lg font-serif font-semibold flex justify-center items-center">
        <img className="w-12" src={props.img} alt="loading image" />
        {props.name}
      </div>
    </div>
  );
}

export default CardProduct;
