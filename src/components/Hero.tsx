import { Badge } from "@mantine/core";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <div className="p-4 flex flex-col gap-2 md:flex-row">
      <div className="md:w-[80%]">
        <HeroCarousel />
      </div>
      <div className="bg-cyan-500 p-4">
        <div className="text-white">
          <h1 className="font-bold rounded-md mt-4 text-xl bg-black inline-flex p-2">
            Anouncement
          </h1>
          <h1 className="font-bold mt-4">
            Sokoto Alberta Monthly Kidney Transplant Seminar Series
          </h1>
          <p>
            Towards Establishing a viable kidney transplant program,
            Distinguished Speaker: Philip F Halloran, MD, PhD, OC, FRSC
          </p>
          <Badge>April 25th 2024</Badge>
          <h1 className="font-bold mt-4 text-red-600">
            Time:5pm West African Standard Time(10:00MDT) Physical venue: IUN
            Conference Hall, UDUTH Sokoto Meeting ID: 83401470153 Passcode:
            527662
          </h1>
        </div>
      </div>
    </div>
  );
}
