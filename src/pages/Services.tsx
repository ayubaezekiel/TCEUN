import { Container } from "@mantine/core";
import Services from "../components/Services";

export default function OurServices() {
  return (
    <div>
      <div className=" grid grid-cols-2 p-2 bg-cyan-100 ">
        <h1 className="text-lg font-bold">Our Services</h1>
        <h1 className=" text-right text-lg">Home / Our Services</h1>
      </div>
      <div className="p-4 flex flex-col md:flex-row gap-4 my-10">
        <div className="p-4 group hover:bg-cyan-700 shadow-cyan-700 hover:text-white rounded-md shadow-[0px_5px_20px_0px]">
          <div className="my-4 flex items-center gap-2">
            <span className="text-2xl font-bold">Vision</span>
          </div>
          <article className="text-gray-900">
            To be an international centre of excellence for promotion of
            research, invention, manpower development and state of the art
            treatment of commmon Urologic, Uro-gynaecologic and kidney disorders
          </article>
        </div>
        <div className="p-4 group hover:bg-cyan-700 shadow-cyan-700 hover:text-white rounded-md shadow-[0px_5px_20px_0px]">
          <div className="my-4 flex items-center gap-2">
            <span className="text-2xl font-bold">Mission</span>
          </div>
          <article className="text-gray-900">
            To conduct research, pursue manpower development and advance the
            frontiers of knowledge via training and retraining and render
            services of international standard to the teeming population of
            Urology, Urogynaecology and kidney disorder patients and clientele
          </article>
        </div>
      </div>

      <Container size={"xl"}>
        <div className="my-10">
          <h1 className="text-2xl text-gray-600 uppercase font-bold">
            Surgical procedures now available or being provided at the Institute
            include the following:
          </h1>
          <div className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="text-gray-900 text-lg">
              <li className="p-2">Percutaneous Nephrolithotomy </li>
              <li className="p-2">
                Retrograde Ureteric And Intrarenal Surgery using Laser
              </li>
              <li className="p-2">
                Transurethral Prostate Surgery; Vaporization, Resection and
                Enucleation
              </li>
              <li className="p-2">Endourethral surgery</li>
              <li className="p-2">Laparoscopic Surgery</li>
              <li className="p-2">
                Complex Urethral and Ureteric Reconstruction
              </li>
              <li className="p-2">
                Prostate, Bladder and Kdney cancer Treatment
              </li>
              <li className="p-2">
                Neobladder Reconstruction (bowel bladder) and continent
                catherizable stoma construction
              </li>

              <li className="p-2">Sex Reassignment and Intersex Surgeries </li>

              <li className="p-2">Repair of Congenital Anomalies</li>

              <li>
                Ultrasound Guided Transrectal Prostate Biopsy and Kidney Biopsy
              </li>
              <li className="p-2 font-extrabold text-green-800 text-2xl">
                New
              </li>
              <li>Kidney Transplant</li>
              <li>Plasmapheresis</li>

              <li className="p-2">
                Many other general and specialized urological and
                uro-gynaecological procedures
              </li>
            </div>
          </div>
        </div>
        <h1 className=" p-2 text-2xl text-gray-600 uppercase font-bold">
          You may need to contact us to determine if a procedure is not being
          temporarily affected by reorganization and upgrade renovation.
        </h1>
      </Container>
      <Services />
    </div>
  );
}
