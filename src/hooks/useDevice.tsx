import { useState, useEffect } from "react";
import { DeviceType, breakpoints } from "../types/screens";

const useDevice = (): DeviceType => {
  // Initialize state with the default device type
  const [currentDeviceType, setCurrentDeviceType] = useState<DeviceType>(
    DeviceType.mobile
  );

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Find the current device type based on window width
      const windowWidth = window.innerWidth;
      let currentType: DeviceType = DeviceType.mobile;

      if (windowWidth > breakpoints.mobile) {
        currentType = DeviceType.tablet;
      }
      if (windowWidth > breakpoints.tablet) {
        currentType = DeviceType.laptop;
      }
      if (windowWidth > breakpoints.laptop) {
        currentType = DeviceType.desktop;
      }

      // Set the current device type to state
      setCurrentDeviceType(currentType);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return currentDeviceType;
};

export default useDevice;
