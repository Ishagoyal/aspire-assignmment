import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-row w-full relative">
      <div className="w-[25%] h-screen fixed desktop:max-w-[425px]">
        <Sidebar />
      </div>
      <div className="grow w-full p-[3.75rem] ml-[25%] min-h-screen max-w-full overflow-hidden desktop:max-w-[1400px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
