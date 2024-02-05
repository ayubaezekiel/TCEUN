import { Container } from "@mantine/core";
import {
  IconBook,
  IconBuildingHospital,
  IconCapsule,
  IconDna2,
  IconSchool,
} from "@tabler/icons-react";

export default function Services() {
  return (
    <div className="my-14 text-gray-600">
      <div className="flex justify-center flex-col my-24">
        <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
          Services
        </h1>
        <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        <p className="text-center text-gray-700 font-normal text-xl">
          Explore a range of high quality urology/nephrology healthcare
          solutions, training and research.
        </p>
      </div>
      <Container size={"xl"}>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col gap-4 text-center justify-center items-center">
            <IconSchool className="w-24 h-24 text-cyan-600  rounded-full shadow-[0px_0px_10px_10px] shadow-slate-300" />
            <span className="text-2xl font-bold">Training</span>
            <span className="border-b-4 border-cyan-600 w-14 mx-auto my-2"></span>

            <p>
              PhD. Urology, PhD. Urology Nursing, MSc. Urology Nursing,
              Postgraduate Diploma in Urology, Post Fellowship in Genital
              Urinary Reconstruction, Workshops and short courses, Residency
              training(NWPGC),Pre part one training for Surgeons, Gynaecologist
              and physicians(Nephrology)...
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center justify-center items-center">
            <IconCapsule className="w-24 h-24 text-cyan-600  rounded-full shadow-[0px_0px_10px_10px] shadow-slate-300" />
            <span className="text-2xl font-bold">
              Clinical Service (Urology)
            </span>
            <span className="border-b-4 border-cyan-600 w-14 mx-auto my-2"></span>

            <p>
              Retrograde Ureteric and Intrarenal Surgery using Laser,
              Transurethral Prostate Surgery; Vaporization, Resection and
              Enucleation, Endourethral surgery, Laparoscopic Surgery, Complex
              Urethral and Ureteric Reconstruction, Prostate, Bladder and Kdney
              cancer Treatment...
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center justify-center items-center">
            <IconBuildingHospital className="w-24 h-24 text-cyan-600  rounded-full shadow-[0px_0px_10px_10px] shadow-slate-300" />
            <span className="text-2xl font-bold">
              Clinical Service (Nephrology)
            </span>
            <span className="border-b-4 border-cyan-600 w-14 mx-auto my-2"></span>

            <p>
              Plasmapherisis, General Nephrology, Haemodialysis, Transplant
              evaluation for recipient and donor,Interdepartmental
              consultation,Out patient clinic runs on Tuesday...
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center justify-center items-center">
            <IconDna2 className="w-24 h-24 text-cyan-600  rounded-full shadow-[0px_0px_10px_10px] shadow-slate-300" />
            <span className="text-2xl font-bold">
              Clinical Service (Urogynaecology)
            </span>
            <span className="border-b-4 border-cyan-600 w-14 mx-auto my-2"></span>

            <p>
              Kidney transplant, Vesicovaginal Fistula and Rectovaginal Fistula
              repair, Cystocele, rectocele,Female urethral reconstruction,
              Sphincters plasty, Pelvic floor repair/ perrineorrhaphy,
              Vaginoplasty...
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center justify-center items-center">
            <IconBook className="w-24 h-24 text-cyan-600  rounded-full shadow-[0px_0px_10px_10px] shadow-slate-300" />
            <span className="text-2xl font-bold">Research</span>
            <span className="border-b-4 border-cyan-600 w-14 mx-auto my-2"></span>

            <p>
              Urology, Nephrology, Intersex, Urology Data Base, Uro-gynaecology
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
