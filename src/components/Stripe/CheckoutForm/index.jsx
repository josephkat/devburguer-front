import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import '../styles.css';

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || isSubmitting) {
      return;
    }

    if (!cartProducts.length) {
      setMessage('Seu carrinho está vazio. Volte ao carrinho e tente novamente.');
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      });

      if (error) {
        setMessage(error.message ?? 'Não foi possível confirmar o pagamento.');
        toast.error(error.message ?? 'Não foi possível confirmar o pagamento.');
        return;
      }

      if (paymentIntent?.status === 'succeeded') {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        });

        try {
          const { status } = await api.post('/orders',
            { products },
            {
              validateStatus: (status) => true,
            },
          );

          if (status === 201 || status === 200) {
            setTimeout(() => {
              navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
              clearCart();
            }, 2000);
            
            toast.success('Pedido realizado com sucesso!');
          } else if (status === 409) {
            toast.error('Falha ao realizar o pedido.');
          } else {
            setMessage('Não foi possível registrar o pedido. Entre em contato com a loja.');
          }

        } catch {
          setMessage(
            'Pagamento confirmado, mas não foi possível registrar o pedido. Entre em contato com a loja.',
          );
          return;
        }
        return;
      } else {
        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
      }

      setMessage('O pagamento ainda está sendo processado.');
    } catch {
      setMessage('Não foi possível confirmar o pagamento. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-form-container">
      <form onSubmit={handleSubmit} className="checkout-form">
        <h1>Pagamento</h1>
        <PaymentElement id="payment-element" />
        <button disabled={!stripe || !elements || isSubmitting} id="submit" type="submit">
          {isSubmitting ? 'Processando pagamento...' : 'Finalizar pagamento'}
        </button>
        {message && <div id="payment-message" role="alert">{message}</div>}
      </form>
    </div>
  );
}
