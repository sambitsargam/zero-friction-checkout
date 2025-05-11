import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';

export function useSocialLogin() {
  const { login, user, logout } = usePrivy();
  const [loading, setLoading] = useState(false);

  const doLogin = async () => {
    setLoading(true);
    await login();
    setLoading(false);
  };

  return { login: doLogin, logout, user, loading };
}
