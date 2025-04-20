import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: () => { },
  showCart: () => { },
  hideCart: () => { },
  ShowCheckout: () => { },
  hideCheckout: () => { },
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }
  function hideCart() {
    setUserProgress('');
  }
  function ShowCheckout() {
    setUserProgress('checkout');
  }
  function hideCheckout() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    ShowCheckout,
    hideCheckout,
  }

  return (
    <UserProgressContext.Provider value={userProgressCtx} >
      {children}
    </UserProgressContext.Provider>
  )
}

export default UserProgressContext;