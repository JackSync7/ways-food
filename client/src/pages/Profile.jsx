import React, { useContext, useEffect, useState } from "react";
import Foto from "../assets/foto.png";
import { UserContext } from "../context/userContext";
import CardTransaction from "../components/reusable/CardTransaction";
import { Link } from "react-router-dom";
import { API } from "../config/api";
import { useQuery } from "react-query";

function Profile() {
  const [state] = useContext(UserContext);
  const [dataTrans, setDataTrans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRole, setIsRole] = useState("");

  useEffect(() => {
    if (state.user.role === "partner") {
      setIsRole("/transaction-partner");
    } else if (state.user.role === "customer") {
      setIsRole("/transaction-user");
    }
  }, []);

  const getTransactions = async () => {
    try {
      const response = await API.get("/transaction-partner");
      // console.log("FUNCTION ; ", response.data.data);
      setDataTrans(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);
  console.log("data mau di loop : ", dataTrans);
  // let {
  //   data: getTransaction,
  //   isLoading,
  //   refetch,
  // } = useQuery("getTransaction", async () => {
  //   const response = await API.get("transaction-partner");

  //   return response.data.data;
  // });

  return (
    <div className="mx-auto h-[100vh] bg-neutral-50 p-20">
      <div className="flex justify-between w-3/4 h-5/6 mx-auto shadow-md p-10">
        <div className=" w-full">
          <div className=" text-neutral-800 ">
            <p className="text-2xl font-semibold text-left ml-16">My Profile</p>
            <div className="mt-4 flex">
              <div>
                <img className="w-52" src={state.user.image} />
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
                  <p className="text-left">{state.user.fullname}</p>
                </div>
                <div>
                  <p className="text-lg text-left text-brownMain font-medium">
                    Email
                  </p>
                  <p className="text-left">{state.user.email}</p>
                </div>
                <div>
                  <p className="text-lg text-left text-brownMain font-medium">
                    Phone
                  </p>
                  <p className="text-left">{state.user.phone}</p>
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
                // <CardTransaction
                //   name={data.seller.fullname}
                //   nameBuyer={data.userOrder.fullname}
                //   status={data.status}
                //   total={data.totalPrice}
                // />
                <div>tess{i}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
