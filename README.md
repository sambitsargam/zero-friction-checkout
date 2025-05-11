# @startale/zero-friction-checkout

**Zero-Friction Checkout** provides instant social-login onboarding, gasless transactions, and persistent sessions on Soneium Mainnet, powered by Startale's Account Abstraction Toolkit.

## 🚀 Features

- **Social Login Onboarding** (Google, Discord, etc.)  
- **Instant Smart Wallet Creation** (ERC-7579)  
- **Gasless Transactions** via Startale Paymaster (ERC-4337)  
- **Session Persistence** Across Devices  
- **Plug & Play** Checkout Button and Hooks  
- **Zero Configuration**: Public endpoints, no API keys required  

## 📦 Installation

```bash
npm install @startale/zero-friction-checkout
```

## 🔧 Usage

Wrap your app with the `SessionProvider`:

```tsx
import React from 'react';
import { SessionProvider, ZeroFrictionCheckoutButton } from '@startale/zero-friction-checkout';

const App = () => (
  <SessionProvider>
    <h1>Shop</h1>
    <ZeroFrictionCheckoutButton amount="0.01" currency="ETH" />
  </SessionProvider>
);

export default App;
```

### API Reference

#### `SessionProvider`

Provides React context to manage session tokens.

```tsx
import { SessionProvider } from '@startale/zero-friction-checkout';

<SessionProvider>{/* your app */}</SessionProvider>
```

#### `ZeroFrictionCheckoutButton`

Props:

- `amount: string` (required)  
- `currency?: string` (default: `'ETH'`)  

```tsx
<ZeroFrictionCheckoutButton amount="0.05" currency="ETH" />
```

#### Hooks

- `useSocialLogin()`: `{ login, logout, user, loading }`  
- `useCheckout()`: `{ checkout({ amount, currency }), loading }`  
- `useSession()`: `{ sessionToken, setSessionToken }`

## ⚙️ Configuration

Environment variables (optional—defaults to public endpoints):

```bash
STARTALE_RPC_URL=           # e.g. https://rpc.soneium.mainnet.startale.com
STARTALE_PAYMASTER_URL=     # e.g. https://paymaster.startale.com/v1
```

## 🛠️ Scripts

- `npm run build` — Bundles TypeScript  
- `npm run test` — Runs tests  
- `npm run lint` — Lints source  
- `npm run release` — Builds and publishes to npm  

## 🤝 Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/foo`)  
3. Commit your changes (`git commit -am 'Add foo'`)  
4. Push to the branch (`git push origin feature/foo`)  
5. Open a Pull Request

## 📄 License

MIT © Sambit Sargam Ekalabya
