import React, { useEffect } from "react";
import SplashScreen from "./screens/Splash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routing from "./screens/router/Routing";
import ConfirmAccount from "./screens/account/Confirm";
import Reset from "./screens/account/Reset";
import Success from "./screens/account/Success";
import HomePage from "./screens/HomePage";
import Drawering from "./screens/router/Drawering";
import NotificationRouting from "./screens/router/NotificationRouting";

const App = () => {
  const [isSplashVisible, setSplashVisible] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 2500); // Set the time you want the splash screen to be visible
  }, []);

  return (
    <SafeAreaProvider>
      {isSplashVisible ? <SplashScreen /> : <Routing />}
    </SafeAreaProvider>
  );
};

export default App;
