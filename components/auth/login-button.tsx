"use client";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "model" | "redirect";
  asChild: boolean;
}
export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("login button clicked");
  };
  if (mode === "model") {
    return <span>Todo:Implement modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
