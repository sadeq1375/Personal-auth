import { Button } from "@/components/ui/button";
import classes from "@/styles/theme.module.css";
import { useTransition } from "react";

const RegisterWrapper = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className={classes.gradientbordercard}>
      <Button
        type="submit"
        disabled={isPending}
        variant="outline"
        className="border-0"
      >
        <span>
          <span className={classes.highlightbg}></span>
          <span className={`text-white ${classes.buttontext}`}>
            Create an account
          </span>
        </span>
      </Button>
      <div className="shimmer dely-[-12.5s]"></div>
    </div>
  );
};

export default RegisterWrapper;
