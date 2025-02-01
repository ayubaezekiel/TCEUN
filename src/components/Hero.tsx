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
         INAUGURATION OF KIDNEY TRANSPLANT PROGRAMME
          </h1>
          {/* <p>
          Applications are invited from suitable qualified candidate for admission into post Graduate Diploma in Urology Nursing
          </p> */}
          <Badge> DATE: 4th Fabruary, 2025</Badge>
          <h1 className="font-bold mt-4 text-red-600">
          Time: 10:00 am
          </h1>
          <p className="text-red-600">VENUE: TETFund Centre of Ecellence Conference Hall, UDUTH</p>
           <h3 className="font-bold mt-4 ">
        For More Details  <a className="text-blue-600" href="http://www.pg.udusok.edu.ng">www.pg.udusok.edu.ng</a>
          </h3> 
        </div>
      </div>
    </div>
  );
}
