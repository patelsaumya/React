import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";


function App() {

  const authContextData = useContext(AuthContext);

  return (
    // <AuthContext.Provider
    //     value={
    //   {
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler
    //   }
    // }>
    //   {/* The value (contextData) will be updated by React whenever the value to each key changes */}
    //   {/* Not needed if you have a default value for the context data */}
    //   {/* All the components inside AuthContext.Provider will have access to AuthContext */}
    //   <MainHeader />
    //   <main>
    //     {!isLoggedIn && <Login onLogin={loginHandler} />}
    //     {isLoggedIn && <Home onLogout={logoutHandler} />}
    //   </main>
    // </AuthContext.Provider>

      <React.Fragment>
        <MainHeader />
        <main>
          {!authContextData.isLoggedIn && <Login />}
          {authContextData.isLoggedIn && <Home />}
        </main>
      </React.Fragment>
  );
}

export default App;
