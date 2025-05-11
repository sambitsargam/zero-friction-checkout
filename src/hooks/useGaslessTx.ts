import { useState } from 'react';
import { sendUserOperation } from '@startale/aa-sdk';
import { getPaymasterData } from '../utils/paymasterClient';

export function useGaslessTx() {
  const [loading, setLoading] = useState(false);

  const checkout = async ({ amount, currency }: { amount: string; currency: string }) => {
    setLoading(true);
    const paymaster = await getPaymasterData(amount, currency);
    await sendUserOperation({ paymaster });
    setLoading(false);
  };

  return { checkout, loading };
}
