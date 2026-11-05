import { QrCodeIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../assets/Logo.svg';
import { api } from '../../services/api';
import { useCart } from '../../hooks/CartContext';
import { Footer } from '../../components/Footer';
import {
  AddressCard,
  Banner,
  Container,
  Content,
  PaymentCard,
  PaymentOption,
  PixCode,
  Title,
} from './styles';
import { CartResume } from '../../components';

export function CartFinalize() {
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const navigate = useNavigate();
  const { cartProducts } = useCart();

  const handleContinue = async () => {
    if (!cartProducts.length) {
      toast.error('Adicione produtos ao carrinho antes de finalizar o pedido.');
      return;
    }

    if (paymentMethod !== 'card') {
      toast.info('No momento, o pagamento online está disponível apenas para cartão.');
      return;
    }

    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });
      navigate('/checkout', {
        state: data,
      });
    } catch {
      toast.error('Não foi possível iniciar o pagamento. Tente novamente.');
    }
  };

  return (
    <Container>
      <Banner>
        <button
          type="button"
          aria-label="Voltar para o início"
          onClick={() => navigate('/')}
        >
          <img src={Logo} alt="Dev Burguer" />
        </button>
      </Banner>
      <Title>Checkout - Finalizar pedido</Title>

      <Content>
        <div>
          <AddressCard>
            <h2>Endereço entrega</h2>
            <div className="address">
              <p>Rua: Lorem Ipsum, 65</p>
              <p>Bairro: Centro</p>
              <p>Cep: 77777700</p>
              <p>Cidade: São Paulo - SP</p>
              <button
                type="button"
                onClick={() =>
                  toast.info(
                    'Entre em contato com a loja para alterar o endereço de entrega.',
                  )
                }
              >
                Trocar endereço de entrega
              </button>
            </div>
          </AddressCard>

          <PaymentCard>
            <h2>Forma de pagamento</h2>
            <div className="payment-content">
              <fieldset>
                <legend className="sr-only">
                  Selecione a forma de pagamento
                </legend>
                <PaymentOption>
                  <input
                    id="cash"
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <label htmlFor="cash">Dinheiro</label>
                </PaymentOption>
                <PaymentOption>
                  <input
                    id="card"
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <label htmlFor="card">Cartão Crédito/Débito</label>
                </PaymentOption>
                <PaymentOption>
                  <input
                    id="pix"
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={() => setPaymentMethod('pix')}
                  />
                  <label htmlFor="pix">PIX</label>
                </PaymentOption>
              </fieldset>
              {paymentMethod === 'pix' && (
                <PixCode aria-label="Ilustração de código QR para pagamento PIX">
                  <QrCodeIcon size={50} weight="fill" />
                </PixCode>
              )}
            </div>
          </PaymentCard>
        </div>

        <CartResume
          buttonText='Finalizar pedido'
          showReviewlink={true}
          onContinue={handleContinue}
        />
      </Content>

      <Footer />
    </Container>
  );
}
