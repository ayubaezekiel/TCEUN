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
          POST GRADUATE DIPLOMA IN UROLOGY NURSING 2024/2025 ADMISSION
          </h1>
          <p>
          Applications are invited from suitable qualified candidate for admission into post Graduate Diploma in Urology Nursing
          </p>
          <Badge> Reg. Deadline: 31st January, 2025</Badge>
          <h1 className="font-bold mt-4 text-red-600">
          Africa's First Professional Urology Nursing Programme
          </h1>
          <p>Accredited by NMCN for Registration as a Specialist Urology Nurse</p>
          <h3 className="font-bold mt-4 ">
        To Apply Visit  <a className="text-blue-600" href="http://www.pg.udusok.edu.ng">www.pg.udusok.edu.ng</a>
          </h3>
        </div>
      </div>
    </div>
  );
}
