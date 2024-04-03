import { Header } from "@/components/auth/header";
import { BackButton } from "./back-buttoon";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back To Login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive w-[30px] h-[30px]" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
