import type { AppProps } from 'next/app';
import { ChainId, Web3sdkioProvider } from '@web3sdkio/react';
import { SessionProvider } from "next-auth/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>  
      <Web3sdkioProvider desiredChainId={activeChainId}>
        <Component {...pageProps} />
      </Web3sdkioProvider>
    </SessionProvider>
  );
}

export default MyApp;
