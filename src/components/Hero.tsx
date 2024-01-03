import { Badge } from "@mantine/core";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <div>
      <div className="p-4 flex flex-col gap-2 md:flex-row">
        <div className="md:w-[100%]">
          <HeroCarousel />
        </div>
        <div className="md:w-[50%] bg-cyan-700 p-4">
          <Badge>Date</Badge>
          <div className="text-white">
            <h1 className="font-bold rounded-md mt-4 text-xl bg-black inline-flex p-2">
              Anouncement
            </h1>
            <h1 className="font-bold mt-4">Kidney Transplant</h1>
            <p>
              The TETFund Centre of Excellence in Urology and Nephrology, Usmanu
              Danfodiyo Univeristy & Teaching Hospital has commenced recruitment
              of patients for kidney transplant. if you require this service,
              Please contact 08188024060
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
