import React from 'react';
import { useSocialLogin } from '../hooks/useSocialLogin';
import { useCheckout } from '../hooks/useGaslessTx';

export interface CheckoutButtonProps {
  amount: string;
  currency?: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ amount, currency = 'ETH' }) => {
  const { login, user } = useSocialLogin();
  const { checkout, loading } = useCheckout();

  const handleClick = async () => {
    if (!user) {
      await login();
    }
    await checkout({ amount, currency });
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Processing…' : `Pay ${amount} ${currency}`}
    </button>
  );
};

export default CheckoutButton;
