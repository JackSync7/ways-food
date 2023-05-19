import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import Geocoding from "../../components/reusable/Geocoding";

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
                <th>Price</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                getTransaction?.map((data, i) => (
                  <tr key={i + 1}>
                    <th>{i}</th>
                    <td>{data.userOrder.fullname}</td>
                    <td>
                      {
                        <Geocoding
                          latitude={-6.402444}
                          longitude={106.801487}
                        />
                      }
                    </td>
                    <td>Rp.{data.seller.totalPrice}</td>
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
