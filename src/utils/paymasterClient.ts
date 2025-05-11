const PAYMASTER_URL = process.env.STARTALE_PAYMASTER_URL
  || 'https://public.paymaster.scs.startale.com/v1';

export async function getPaymasterData(amount: string, currency: string) {
  const resp = await fetch(`${PAYMASTER_URL}/pm_getPaymasterData`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, currency })
  });
  if (!resp.ok) {
    throw new Error(`Paymaster error: ${resp.status} ${await resp.text()}`);
  }
  return resp.json();
}
