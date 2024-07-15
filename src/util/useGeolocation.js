import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const lat = location?.coords?.latitude || null;
  const lon = location?.coords?.longitude || null;

  return { lat, lon };
};
