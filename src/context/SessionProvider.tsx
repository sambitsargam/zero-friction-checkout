import React, { createContext, useContext, useEffect, useState } from 'react';
import { persistSession, loadSession } from '../utils/sessionStorage';

interface SessionContextValue {
  sessionToken: string | null;
  setSessionToken(token: string): void;
}

const SessionContext = createContext<SessionContextValue>({ sessionToken: null, setSessionToken: () => {} });

export const SessionProvider: React.FC = ({ children }) => {
  const [sessionToken, setSessionTokenState] = useState<string | null>(null);

  useEffect(() => {
    const saved = loadSession();
    if (saved) setSessionTokenState(saved);
  }, []);

  const setSessionToken = (token: string) => {
    setSessionTokenState(token);
    persistSession(token);
  };

  return (
    <SessionContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
