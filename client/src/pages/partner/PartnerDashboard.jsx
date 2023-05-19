import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";

function PartnerDashboard() {
  const [state] = useContext(UserContext);
  let {
    data: getTransaction,
    isLoading,
    refetch,
  } = useQuery("getTransactionUser", async () => {
    const response = await API.get(getRole(state.user.role));
    return response.data.data;
  });

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
  console.log(getTransaction);
  return (
    <div className="h-[100vh] w-full py-20">
      <div>
        <p className="text-brownMain text-3xl font-semibold text-left ml-64 mb-10">
          Income Partner
        </p>
        <div className="overflow-y-auto h-[70vh] ">
          <table className="table table-compact  bg-neutral-50 w-2/3 mx-auto">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                getTransaction?.map((data, i) => (
                  <tr key={i}>
                    <th>{i}</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PartnerDashboard;
