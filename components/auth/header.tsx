import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col w-full gap-y-4 items-center justify-center">
      <div className="flex space-y-6">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 100 100"
            width="90px"
          >
            <title>Artboard 48</title>
            <path d="M49.92,14.38A36,36,0,1,0,75.38,24.92,35.76,35.76,0,0,0,49.92,14.38Zm24,60a34,34,0,1,1,10-24A33.78,33.78,0,0,1,74,74.42Z" />
            <path d="M37.3,52.54a2.17,2.17,0,0,1-2.17-2.17h-2a4.17,4.17,0,1,0,.79-2.45l1.62,1.17a2.17,2.17,0,1,1,1.75,3.44Z" />
            <rect x="60.22" y="44.54" width="7.33" height="2" />
            <polygon points="69.33 46.28 71.36 48.14 69.19 51.89 66.2 48.91 63 52.1 60.51 49.61 59.09 51.03 63 54.93 66.2 51.73 69.62 55.15 73.89 47.74 70.68 44.81 69.33 46.28" />
            <polygon points="56.6 52.1 54.11 49.61 52.7 51.03 56.6 54.93 59.4 52.14 57.98 50.73 56.6 52.1" />
            <path d="M50.2,52.1l-1.83-1.83a11,11,0,0,0-.69-3.73H58.3v-2H46.71a11.07,11.07,0,0,0-12.89-4.69l.63,1.9a9.09,9.09,0,0,1,11.94,8.63c0,.2,0,.4,0,.6L46.3,51l0,0a9.08,9.08,0,1,1-14-8.29l-1.1-1.67A11.08,11.08,0,1,0,48.1,52.83l2.1,2.1,2-2-1.41-1.42Z" />
          </svg>
        </span>
        <h1 className={cn("text-3xl font-semibold", font.className)}>Auth</h1>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
