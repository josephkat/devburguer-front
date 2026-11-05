import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from "../../config/stripeConfig";
import { CheckoutForm } from "../../components";

export function Checkout() {
    const { state } = useLocation();
    const clientSecret = state?.clientSecret;
   
     if(!clientSecret) {
        return <div>Não foi possível iniciar o pagamento. Volte ao carrinho e tente novamente.</div>;
     }

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    );
}