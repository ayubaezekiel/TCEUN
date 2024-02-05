import { Container } from "@mantine/core";
import about from "../assets/images/about.jpg";
import features from "../assets/images/features.jpg";
import { IconCircleCheck } from "@tabler/icons-react";
import { PageBreadcrumbs } from "../components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div>
      <PageBreadcrumbs
        currentUrl={[
          { href: "/", title: "Home" },
          { href: "/news/", title: "About Us" },
        ]}
        title="About Us"
      />
      <div className="p-4 grid md:grid-cols-2 gap-4 my-10">
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
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div>
            <img src={about} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-600 mb-4">
              Background and History
            </h1>
            <article className="mb-4 text-xl text-gray-900 text-justify">
              The Centre was established by the University, through a TetFund
              grant, as a Urology and Nephrology Complex of international
              standard that will provide a forum for research and invention,
              manpower development and treatment of common Urologic,
              Uro-gynaecologic and Renal diseases prevalent in the sub-region.
              The institute was commissioned on the 12th of July 2014 and has
              been equipped for Phase one Urologic training and services.
              <p>
                It is designed to meet the felt needs of Urology and Nephrology
                practice in Nigeria and North-Western Nigeria in particular. In
                collaboration with existing National and International Centre of
                excellence, it shall provide a unique platform for research and
                manpower development COVID-19 has exposed obvious weaknesses in
                our health care research and services.
              </p>
              Specialized medical training abroad and surgical tourism wican not
              continue as usual. The Centre is being equipped to strengthen its
              ability to provide the needed training, research and specialized
              service in Urology, Uro-gynaecology and sustainable Kidney
              Transplantation.
            </article>
          </div>
        </div>
      </Container>
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
          <div>
            <img src={features} alt="" className="md:h-[650px] h-[500]" />
          </div>
        </div>
        <h1 className=" p-2 text-2xl text-gray-600 uppercase font-bold">
          You may need to contact us to determine if a procedure is not being
          temporarily affected by reorganization and upgrade renovation.
        </h1>
        <p className="p-2 text-gray-900 text-lg">
          The centre is accredited for residency training in Urology and
          Nephrology by the National and West African Post Graduate Colleges
          27th and 28th November, 2018 a workshop was organized by the Institute
          that attracted seventy seven(77) Urologist from all over the country
          to participate on the following operations, many of which were
          hitherto not available in any public Hospital in Nigeria. Also, our
          urologists need not to travel outside the country to learn these
          operations
        </p>
        <div className="text-gray-900 text-lg">
          <li className="p-2">Percutaneous Nephrolithotomy </li>
          <li className="p-2">Percutaneous kidney stone surgery</li>
          <li className="p-2">Laser surgery for Kidney and Ureteric stones</li>
          <li className="p-2">Complex reconstructive operations</li>
          <p className="p-2 text-gray-900">
            The centre has now been upgraded to TETFund Centre of Excellence in
            Urology and Nephrology. This will enable the centre pursue its
            mission on research, manpower development and advancing the
            frontiers of knowledge via training and rendering services of
            international standard to the teeming population of Urology,
            Urogynaecology and Kidney disorder patients. The Centre plans
            research to address National Development Challenges and to commence
            Workshops, Seminars, Short courses, MSc, PhD and to integrate
            Fellowship training with MSc/PhD. Training of Nephrology Nurses,
            Urology Nurses and Dialysis Nurses and Technicians will also come
            soon.
          </p>
        </div>
      </Container>
      <Container size={"xl"}>
        <div className="gap-4 mt-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-600 mb-4">
              Objectives
            </h1>
            <div className="space-y-4">
              <div className="flex gap-1">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-lg text-gray-900">
                  Establishment of disease registries and population-based
                  studies to accurately define the magnitude of problems posed
                  by Urologic, Urogynaecologic and kidney diseases, requiring
                  governmental, institutional and global support
                </p>
              </div>
              <div className="flex gap-1">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-lg text-gray-900">
                  Conduct basic research in the biology of prostate and bladder
                  cancer in the tropics, immunology of kidney transplantation in
                  blacks and their response to immunosuppressive transplant
                  therapy
                </p>
              </div>
              <div className="flex gap-1">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-lg text-gray-900">
                  Conduct applied Research and Epidemiological studies on
                  Urological and Kidney disorders in the low resource settings;
                  and develop innovative & optimal care strategies and protocols
                </p>
              </div>
              <div className="flex gap-1">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-lg text-gray-900">
                  Training of medical, paramedical, community health and nursing
                  staff to address the insufficiency and maldistribution of
                  healthcare personnel including Urologists, Urogynaecologist,
                  Nephrologist, Nurses and other relevant allied health workers;
                </p>
              </div>
              <div className="flex gap-1">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-lg text-gray-900">
                  Provision of evidence-based and global standard of clinical
                  care to our teeming patients with Urological, Urogynaecologic
                  and kidney problems. These include kidney Transplantation,
                  modern Urologic surgeries and difficult Vesicovaginal fistula
                  procedures.
                </p>
              </div>
              <div className="flex gap-1">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-lg text-gray-900">
                  To research and develop expertise in minimally invasive
                  treatment for urinary stone and prostate diseases.
                </p>
              </div>
              <div className="flex gap-1">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-lg text-gray-900">
                  To become a world-class facility in Nigeria that can provide a
                  citadel for both industry and grant funded clinical studies
                  and trials
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
