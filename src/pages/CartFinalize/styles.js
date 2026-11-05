import styled from 'styled-components';
import Background from '../../assets/background.svg';
import BannerHome from '../../assets/Group.svg';

const Card = styled.section`
  overflow: hidden;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 4%);

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 32px;
    padding: 5px 12px;
    background: #303030;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    text-transform: none;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  flex-direction: column;
  background:
    linear-gradient(rgb(255 255 255 / 62%), rgb(255 255 255 / 62%)),
    url(${Background}) center / cover fixed;
`;

export const Banner = styled.header`
  display: flex;
  height: 180px;
  align-items: center;
  justify-content: center;
  background: #1f1f1f url('${BannerHome}') center / cover no-repeat;

  button {
    display: grid;
    width: 120px;
    height: 112px;
    place-items: center;
    border: 0;
    background: transparent;
  }

  img {
    display: block;
    height: 130px;
    object-fit: contain;
  }
`;

export const Title = styled.h1`
  position: relative;
  margin: 0 auto 34px;
  padding-bottom: 8px;
  color: #61a120;
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  padding-bottom: 12px;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 48px;
    height: 4px;
    margin: auto;
    background: #61a120;
    content: '';
  }
`;

export const Content = styled.div`
  display: grid;
  max-width: 1280px;
  grid-template-columns: 1fr 30%;
  gap: 18px;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 680px) {
    max-width: 480px;
    grid-template-columns: 1fr;

    aside {
      gap: 16px;
    }
  }
`;

export const AddressCard = styled(Card)`
  min-height: 205px;

  h2 {
    height: 56px;
    line-height: 56px;
    padding: 5px 12px;
    background-color: #484848;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 700; 
  }
  .address {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 22px 38px 18px;

    p {
      color: #111;
      font-size: 17px;
      font-weight: 600;
    }

    button {
      align-self: flex-start;
      margin-top: 7px;
      padding: 0;
      border: 0;
      background: transparent;
      color: #67277a;
      font-size: 16px;
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    .address {
      padding-right: 22px;
      padding-left: 22px;
    }
  }
`;

export const PaymentCard = styled(Card)`
  min-height: 140px;

  h2 {
    height: 56px;
    line-height: 56px;
    padding: 5px 12px;
    background-color: #484848;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 700; 
  }

  .payment-content {
    display: flex;
    min-height: 108px;
    align-items: center;
    justify-content: space-between;
    padding: 13px 34px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 0;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }

  @media (max-width: 480px) {
    .payment-content {
      padding-right: 22px;
      padding-left: 22px;
    }
  }
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  input {
    width: 14px;
    height: 14px;
    accent-color: #078b1b;
  }

  label {
    color: #111;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const PixCode = styled.div`
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  color: #080808;
`;

export const ResumeCard = styled(Card)`
  min-height: 295px;

  .resume-content {
    display: flex;
    min-height: 263px;
    flex-direction: column;
    padding: 35px 20px 16px;
  }

  .price-line,
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price-line {
    margin-bottom: 22px;
    color: #888;
    font-size: 11px;
  }

  .total {
    margin-top: 7px;
    color: #111;
    font-size: 14px;

    strong {
      color: #4a4a4a;
      font-size: 14px;
      font-weight: 700;
    }
  }

  .back-link {
    align-self: flex-start;
    margin-top: auto;
    padding: 0;
    border: 0;
    background: transparent;
    color: #67277a;
    font-size: 11px;
    text-decoration: underline;
  }

  @media (max-width: 680px) {
    min-height: 235px;

    .resume-content {
      min-height: 203px;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  min-height: 38px;
  border: 0;
  border-radius: 5px;
  background: #9758a6;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  transition: background 160ms ease;

  &:hover:not(:disabled) {
    background: #6f357c;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
