import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const secureAxios = useSecureAxios()
    const [cart] = useCart()
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const totalPrice = cart.reduce((total, current) => total + parseInt(current.price), 0)

    useEffect(() => {
        
        if (totalPrice>0) {
            
            
            secureAxios.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [secureAxios, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
            setSuccess("")
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("")
            setSuccess("")
        }

        //canfirm payment

        const { paymentIntent, err } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || "anonymous@gmail.com",
                    name: user.displayName || "anonynous"
                }
            }
        })

        if (err) {
            console.log("confirm payment error", err);
            setError(err.message)
            setSuccess("")
        } else {
            console.log("confirm payment intent", paymentIntent);
            if (paymentIntent?.status === "succeeded") {
                //saved payment in database and clear cart
                const paymentDetails = {
                    email: user.email,
                    name: user.displayName || '',
                    amount: totalPrice,
                    date: new Date,
                    tnxId: paymentIntent.id,
                    status: "panding",
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.orderId)
                }
                

                const res = await secureAxios.post("/payment-history", { paymentDetails })
               
                setSuccess(`Payment Succeeded! Tnx Id: ${paymentIntent.id}`)
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Successful !!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate("/dashboard/payment-history")
                }
            }


        }
    };

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="mt-10 flex justify-center items-center">
                    <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
            <p className="text-red-600 mt-6">{error}</p>
            {success && <p className="text-green-600 mt-6">{success}</p>}
        </div>
    );
};

export default CheckoutForm;