const express = require("express");
const app = express();
const path = require("path");

// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.get("/stripe/stripe-key", (req, res) => {
    res.json({ client: process.env.STRIPE_SECRET_KEY });
});


app.post("/pay/:amt", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.params.amt,
    currency: "usd",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
  });
  res.send( paymentIntent)
});
app.use(express.static(path.join(__dirname, "client/build")));

app.use("*", express.static(path.join(__dirname, "client", "build")));

const port = 4242 || process.env.PORT;
app.listen(port, () => console.log(`Node server listening on port ${port}!`));
