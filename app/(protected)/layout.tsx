import { Toaster } from "sonner";
import NavBar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-blue-800">
      <NavBar />
      <Toaster />
      {children}
    </div>
  );
};

export default ProtectedLayout;
