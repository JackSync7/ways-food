import React, { useContext, useEffect, useState } from "react";
import Foto from "../assets/foto.png";
import { UserContext } from "../context/userContext";
import CardTransactions from "../components/reusable/CardTransactions";
import { Link } from "react-router-dom";
import { API } from "../config/api";

function Profile() {
  const [state] = useContext(UserContext);
  const [dataTrans, setDataTrans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTransactions = async () => {
    try {
      const response = await API.get(getRole(state.user.role));
      setDataTrans(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getRole = (roles) => {
    switch (roles) {
      case "partner":
        return "/transaction-partner";
      case "customer":
        return "/transaction-user";
      default:
        return;
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="mx-auto h-[100vh] bg-neutral-50 p-20">
      <div className="flex justify-between w-3/4 h-5/6 mx-auto shadow-md p-10">
        <div className=" w-full">
          <div className=" text-neutral-800 ">
            <p className="text-2xl font-semibold text-left ml-16">My Profile</p>
            <div className="mt-4 flex">
              <div>
                <img className="w-52" src={!isLoading && state.user.image} />
                <Link to="/edit-profile">
                  <button className="w-52 text-lg bg-brownMain text-neutral-50 py-1 mt-2 rounded-md">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div className="flex flex-col gap-3 ml-6">
                <div>
                  <p className="text-lg text-left text-brownMain font-medium">
                    Full Name
                  </p>
                  <p className="text-left">
                    {!isLoading && state.user.fullname}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-left text-brownMain font-medium">
                    Email
                  </p>
                  <p className="text-left">{!isLoading && state.user.email}</p>
                </div>
                <div>
                  <p className="text-lg text-left text-brownMain font-medium">
                    Phone
                  </p>
                  <p className="text-left">{!isLoading && state.user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-2xl font-medium text-neutral-800">
            History Transaction
          </p>
          <div className="overflow-auto h-full flex flex-col-reverse">
            {!isLoading &&
              dataTrans?.map((data, i) => (
                <div key={i}>
                  <CardTransactions
                    name={data.seller.fullname}
                    nameBuyer={data.userOrder.fullname}
                    status={data.status}
                    total={data.totalPrice}
                    role={state.user.role}
                  />
                </div>
                // <div>
                //   <div>{data.seller.fullname}</div>
                //   <div>{data.status}</div>
                //   <div>{data.userOrder.fullname}</div>
                // </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
