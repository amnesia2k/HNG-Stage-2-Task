import * as React from "react";

export default function useNetworkStatus() {
  const [isOnline, setIsOnline] = React.useState(true);

  const updateNetworkStatus = () => {
    setIsOnline(navigator.onLine);
  };

  React.useEffect(() => {
    updateNetworkStatus();
  }, []);

  React.useEffect(() => {
    window.addEventListener("load", updateNetworkStatus);
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    return () => {
      window.removeEventListener("load", updateNetworkStatus);
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);
    };
  }, []);

  return { isOnline };
}
