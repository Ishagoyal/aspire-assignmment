import { useEffect, useMemo } from "react";
import useDevice from "../hooks/useDevice";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: any }) => {
  const currentDeviceType = useDevice();

  const mediaClassesSideBar = useMemo(() => {
    let classes = "";
    switch (currentDeviceType) {
      case "tablet":
        classes = "w-[7%]";
        break;
      case "laptop":
        classes = "";
        break;
    }
    return classes;
  }, [currentDeviceType]);

  const mediaClassesRightPanel = useMemo(() => {
    let classes = "";
    switch (currentDeviceType) {
      case "tablet":
        classes = "ml-[7%] !p-6";
        break;
      case "laptop":
        classes = "";
        break;
    }
    return classes;
  }, [currentDeviceType]);

  useEffect(() => {}, [currentDeviceType]);
  return (
    <div className="flex flex-row w-full relative">
      <div
        className={`w-[20%] h-screen fixed max-w-[400px] ${mediaClassesSideBar}`}
      >
        <Sidebar />
      </div>
      <div
        className={`grow w-full p-[3.75rem] ml-[20%] min-h-screen overflow-hidden max-w-[1300px] ${mediaClassesRightPanel}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
