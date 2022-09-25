import React from "react";
import { observer } from "mobx-react-lite";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;

      try {
        const data = {
          payment_method_id: id,
          // user: "ka",
          first_name: "firstName",
          last_name: "lastName",
          email: "bann@gmail.com",
          address: "address",
          country: "country",
          city: "city",
          telephone: "8985925",
          // cart_user_id: "12",
          company: "company",
          items: [
            {
              product: 9,
              quantity: 2,
              price: 1234,
              color: "red",
            },
          ],
        };
        const respons = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/order/`,
          data
        );
      } catch (e) {}
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "400px",
        margin: "0 auto",
        marginTop: "200px",
        marginBottom: "150px",
      }}
    >
      <CardElement />
      <button type="submit" disabled={!stripe}>
        pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51J0jlWH3X4xB1ZGdHL5dgfy23qqsy088MI1qTlwhrWRpztROjFIoDoUNIqe70ktEVTXmmYYfFeQ5qSMROxNEHHaV00jR4XR3eN"
);

const Visa = observer(() => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
});

export default Visa;
