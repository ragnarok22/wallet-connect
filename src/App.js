import { useEffect, useState } from 'react';
import { useEthers, useEtherBalance } from '@usedapp/core';

function App() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const startDapp = () => {}
  const handleConnectWallet = (e) => {
    activateBrowserWallet();

  }

  useEffect(() => {
    startDapp();
  });

  return (
    <div className="App">
      {
        account
        ? <p>{etherBalance && JSON.stringify(etherBalance)} ETH</p>
        : <button onClick={handleConnectWallet}>Conectar con la wallet</button>
      }
    </div>
  );
}

export default App;
