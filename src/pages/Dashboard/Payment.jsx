import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {

    return (
        <div>
            <SectionHeader title={`Payment`} subtitle={`Please Pay to it`} styleName={`text-3xl`}></SectionHeader>
            <div  className="bg-white w-1/2 mx-auto p-10 rounded-lg">
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;