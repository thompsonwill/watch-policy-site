import React from "react";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

import { loadStripe } from "@stripe/stripe-js";

const publishable =
  "pk_test_51H4zsrA7Ji1u6B7NoPyKiE9v7qW8EB2fkm8Qqh2sARFXHYC0ezsFKH53d7T4HQy77f9CVaWuTFiKzIilJBuHKiqz00g6iAhyxO";
const stripe = loadStripe(publishable);

// var response = fetch("/stripe/stripe-key", {
//   method: "GET",
//   mode: "no-cors",
//   cache: "no-cache",
//   credentials: "same-origin",
//   headers: { "Content-Type": "application/json" },
// })
//   .then((res) => {
//     console.log("res1", res);
//     return res.text();
//   })
//   .then((res) => {
//     console.log("res1", res);

//     return res.JSON;
//   })
//   .catch((res) => {
//     console.log("Exception : ", res);
//   });

export default function Stripe(props) {
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
}
