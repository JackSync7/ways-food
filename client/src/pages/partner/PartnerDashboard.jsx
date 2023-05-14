import React from "react";
import { useQuery } from "react-query";
import { API } from "../../config/api";

function PartnerDashboard() {
  let {
    data: getTransaction,
    isLoading,
    refetch,
  } = useQuery("getTransactionUser", async () => {
    const response = await API.get(`/transaction-user`);
    return response.data.data;
  });
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
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>location</th>
                <th>Last Login</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>location</th>
                <th>Last Login</th>
                <th>Favorite Color</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PartnerDashboard;
