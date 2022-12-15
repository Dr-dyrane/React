import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../shared";

import AddCustomer from "../components/AddCustomer";

export default function Customers() {
  const [customers, setCustomers] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname

  function toggleShow() {
    setShow(!show);
  }

  useEffect(() => {
    const url = baseUrl + "api/customers/";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    })
      .then((response) => {
        if (response.status === 401) {
          navigate("/login", {
            state: {
              previousUrl: currentUrl,
            },
          });
        }
        return response.json();
      })
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);
  function newCustomer(name, industry) {
    const data = { name: name, industry: industry };
    const url = baseUrl + "api/customers/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        toggleShow();
        console.log("customer added");
        setCustomers([...customers, data.customers]);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <h1>Here are our customers:</h1>
      {customers
        ? customers.map((customer) => {
            return (
              <div className="m-2" key={customer.id}>
                <Link to={"/customers/" + customer.id}>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-decoration-none">
                    {customer.name}
                  </button>
                </Link>
              </div>
            );
          })
        : null}
      <AddCustomer
        newCustomer={newCustomer}
        show={show}
        toggleShow={toggleShow}
      />
    </>
  );
}
