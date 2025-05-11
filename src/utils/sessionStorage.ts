const STORAGE_KEY = 'zfc_session';

export function persistSession(token: string) {
  localStorage.setItem(STORAGE_KEY, token);
}

export function loadSession(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}
