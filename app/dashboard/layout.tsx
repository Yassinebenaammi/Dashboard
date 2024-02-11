import Navbar from "../ui/dashboard/Navbar/Navbar";
import Sidebar from "../ui/dashboard/Sidebar/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-primary min-h-full bg-bg">
      <div className="lg:w-1/4 bg-bgSoft h-screen p-5">
        <Sidebar />
      </div>
      <div className="w-3/4 ml-3 h-full m-4">
        <Navbar />
        <div className="overflow-hidden ">
          {children}
        </div>
      </div>
    </div>
  );
}
