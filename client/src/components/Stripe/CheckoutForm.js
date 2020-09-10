import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [secret, setSecret] = useState({ client_secret: "" });
  const [status, setstatus] = useState("");

  useEffect(() => {
    fetch("/pay/6900", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("res1", res);
        return res.text();
      })
      .then((res) => {
        console.log(JSON.parse(res).client_secret);
        setSecret(JSON.parse(res));
      })
      .catch((res) => {
        console.log("Exception : ", res);
      });
  }, []);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(secret.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Billy BLompson",
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      console.log(result);
      setstatus(result.error.message)
    } else {
      // The payment has been processed!
      console.log(result.paymentIntent);
      console.log(result);
      setstatus(result.paymentIntent.status);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {status.length < 1 ? (
        <div>
          <CardSection /><br/>
          <button disabled={!stripe}>Confirm Payment</button>
        </div>
      ) : (
        <p>{status}</p>
      )}
    </form>
  );
}
