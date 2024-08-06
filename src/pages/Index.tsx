import {
  Icon3dCubeSphere,
  IconArrowRight,
  IconAward,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBuildingHospital,
  IconDeviceHeartMonitor,
  IconDna2,
  IconEyeBolt,
  IconFlask2Filled,
  IconHexagons,
  IconMicroscope,
  IconTestPipe,
  IconTransfer,
  IconUser,
} from "@tabler/icons-react";
import { Button, Container, Image } from "@mantine/core";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import features from "../assets/images/features.jpg";
import Services from "../components/Services";
import ContactForm from "../components/Contact";
import { ReactNode } from "react";
import VC from "../assets/images/VC.jpg";
import CMD from "../assets/images/CMD.jpg";
import director from "../assets/images/director.jpg";
import ibrahim from "../assets/images/ibrahim.jpg";
import nasiru from "../assets/images/nasiru sahabi.jpg";
import bello from "../assets/images/MB Bello.jpg";
import maaji from "../assets/images/unnamed.jpg";
import makusidi from "../assets/images/Dr Makusidi A.M.png";
import agwu from "../assets/images/agwu.jpg";
import khalid from "../assets/images/My Passport 20-01-2021.jpg";
import { Gallery, Partners } from "../components/Galery";
import Faq from "../components/Faq";
import { Card } from "@radix-ui/themes";

export default function Index() {
  return (
    <div>
      <Hero />

      <div className="container mx-auto p-4 grid md:grid-cols-2 gap-4 my-10">
        <Card className="p-4 group hover:bg-cyan-700   rounded-md shadow-[0px_5px_20px_0px]">
          <div className="my-4 flex items-center gap-2">
            <IconEyeBolt className="text-cyan-700 h-24 w-14" />
            <span className="text-3xl font-bold">Vision</span>
          </div>
          <article>
            To be an international centre of excellence for promotion of
            research, invention, manpower development and state of the art
            treatment of commmon Urologic, Uro-gynaecologic and kidney disorders
          </article>
        </Card>
        <Card className="p-4 group hover:bg-cyan-700  rounded-md shadow-[0px_5px_20px_0px]">
          <div className="my-4 flex items-center gap-2">
            <IconDna2 className="text-cyan-700 h-24 w-14" />
            <span className="text-3xl font-bold">Mission</span>
          </div>
          <article>
            To conduct research, pursue manpower development and advance the
            frontiers of knowledge via training and retraining and render
            services of international standard to the teeming population of
            Urology, Urogynaecology and kidney disorder patients and clientele
          </article>
        </Card>
      </div>

      <div className="p-4 bg-cyan-600 mt-10">
        <h1 className="text-3xl font-bold text-center mt-4">
          In An Emergency? <br />
          <span className="text-xs"> Need help now?</span>
        </h1>
        <p className="my-4 text-xl text-center text-white">
          You may need to contact us to determine if a procedure is not being
          temporarily affected by reorganization and upgrade renovation.
        </p>
        <div className="flex justify-center">
          <Button
            mt={10}
            variant="outline"
            color="white"
            styles={{
              root: { borderColor: "white" },
            }}
          >
            Make an Appointment
          </Button>
        </div>
      </div>
      <About />

      <Container size={"xl"} my={30}>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 group hover:bg-cyan-700 shadow-cyan-700 hover:text-white rounded-md shadow-[0px_5px_20px_0px]">
            <div className="my-4 flex items-center gap-2">
              <IconUser className="text-cyan-700 group-hover:text-white h-24 w-14" />
              <span className="text-3xl font-bold">10+</span>
            </div>
            <p>
              The institute has over 10 professsionally trained consultants,
              resident doctors e.t.c.
            </p>
            <p className="my-4">
              <Link
                to={""}
                className="flex gap-2 group-hover:text-white text-gray-600"
              >
                Find out more <IconArrowRight />
              </Link>
            </p>
          </div>
          <div className="p-4 group hover:bg-cyan-700 shadow-cyan-700 hover:text-white rounded-md shadow-[0px_5px_20px_0px]">
            <div className="my-4 flex items-center gap-2">
              <IconBuildingHospital className="text-cyan-700 group-hover:text-white h-24 w-14" />
              <span className="text-3xl font-bold">3</span>
            </div>
            <p>
              The institute has 3 department namely urology, nephrology and
              urogynaecologic
            </p>
            <p className="my-4">
              <Link
                to={""}
                className="flex gap-2 group-hover:text-white text-gray-600"
              >
                Find out more <IconArrowRight />
              </Link>
            </p>
          </div>
          <div className="p-4 group hover:bg-cyan-700 shadow-cyan-700 hover:text-white rounded-md shadow-[0px_5px_20px_0px]">
            <div className="my-4 flex items-center gap-2">
              <IconTestPipe className="text-cyan-700 group-hover:text-white h-24 w-14" />
              <span className="text-3xl font-bold">1</span>
            </div>
            <p>The center has one state of the art research laboratory</p>
            <p className="my-4">
              <Link
                to={""}
                className="flex gap-2 group-hover:text-white text-gray-600"
              >
                Find out more <IconArrowRight />
              </Link>
            </p>
          </div>
          <div className="p-4 group hover:bg-cyan-700 shadow-cyan-700 hover:text-white rounded-md shadow-[0px_5px_20px_0px]">
            <div className="my-4 flex items-center gap-2">
              <IconAward className="text-cyan-700 group-hover:text-white h-24 w-14" />
              <span className="text-3xl font-bold">40+</span>
            </div>
            <p>The center has over 40 individual and general awards</p>
            <p className="my-4">
              <Link
                to={""}
                className="flex gap-2 group-hover:text-white text-gray-600"
              >
                Find out more <IconArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </Container>
      <Container size={"xl"}>
        <div className="my-10">
          <h1 className="text-4xl text-gray-600 text-center uppercase font-bold">
            Surgeries we offer
          </h1>
          <div className="border-b-4 border-cyan-600 w-14 mx-auto my-4" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex items-center">
              <IconTransfer className="w-16 h-16 text-cyan-600" />
              <div>
                <p className="text-gray-700 font-bold text-2xl">
                  Kidney Transplant
                </p>
                <p className="text-gray-700 text-lg">
                  Ultrasound Guided transrectal Prostrate Biopsy and Kidney
                  Biopsy
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon3dCubeSphere className="w-16 h-16 text-cyan-600" />
              <div>
                <p className="text-gray-700 font-bold text-2xl">
                  Percutaneous Nephrolithotomy
                </p>
                <p className="text-gray-700 text-lg">
                  Ultrasound Guided Transrectal Prostate Biopsy and Kidney
                  Biopsy
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <IconFlask2Filled className="w-16 h-16 text-cyan-600" />
              <div>
                <p className="text-gray-700 font-bold text-2xl">
                  Retrograde Ureteric And Intrarenal Surgery using Laser
                </p>
                <p className="text-gray-700 text-lg">
                  Transurethral Prostate Surgery; Vaporization, Resection and
                  Enucleation
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <IconDeviceHeartMonitor className="w-16 h-16 text-cyan-600" />
              <div>
                <p className="text-gray-700 font-bold text-2xl">
                  Endourethral surgery
                </p>
                <p className="text-gray-700 text-lg">
                  Neobladder Reconstruction (bowel bladder) and continent
                  catherizable stoma construction
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <IconMicroscope className="w-16 h-16 text-cyan-600" />
              <div>
                <p className="text-gray-700 font-bold text-2xl">
                  Laparoscopic Surgery
                </p>
                <p className="text-gray-700 text-lg">
                  Sex Reassignment and Intersex Surgeries
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <IconHexagons className="w-16 h-16 text-cyan-600" />
              <div>
                <p className="text-gray-700 font-bold text-2xl">
                  Repair of Congenital Anomalies
                </p>
                <p className="text-gray-700 text-lg">
                  Many other general and specialized urological and
                  uro-gynaecological procedures
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={features} alt="" className="md:h-[650px] h-[500]" />
          </div>
        </div>
      </Container>
      <Services />
      <ContactForm />
      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-24">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            BOARD OF DIRECTORS
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
          <p className="text-center text-gray-700 font-normal text-xl"></p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-auto md:w-[50%]">
          <StaffCard
            image={VC}
            name="Prof L S Bilbis"
            title="VC. Usmanu Danfodiyo University"
            note="BSc(UDUS) PhD(ESSEX), Proffessor of Protein Chemistry/Enzymology"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
          <StaffCard
            image={CMD}
            name="Dr. A. A. Sabir"
            title="CMD. Usmanu Danfodiyo University Teaching Hospital"
            note="MBBS(UDUS) FMCP"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
        </div>
      </Container>

      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-24">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            OUR STAFFS
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
          <p className="text-center text-gray-700 font-normal text-xl">
            MEET OUR PRINCIPAL OFFICERS
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mx-auto">
          <StaffCard
            notVc
            image={director}
            name="Prof Ismaila Arzika Mungadi"
            title="Director"
            note="MBBS(UDUS), FRCSEd, FWACS, FMAS, Cert Endourol"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
          <StaffCard
            image={bello}
            notVc
            name="Dr. Muhammad Bashir Bello"
            title="Research Officer"
            note="DVM, MSc, PhD"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
          <StaffCard
            image={nasiru}
            notVc
            name="Mallam Nasiru Sahabi"
            title="Docummentation Officer"
            note="......."
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
          <StaffCard
            notVc
            image={ibrahim}
            name="Malam Ibrahim Lawal"
            title="Admin Officer"
            note="BSc"
            Socials={
              <div className="flex gap-6 mt-2 ">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
        </div>
        <div className="my-4 hover:text-cyan-700">
          <Link to={"/team"} className="text-2xl font-bold text-gray-600  ">
            View More...
          </Link>
        </div>
      </Container>

      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-24">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            CLINICAL STAFFS
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
          <p className="text-center text-gray-700 font-normal text-xl">
            MEET OUR RENOWED CLINICAL OFFICERS
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mx-auto">
          <StaffCard
            notVc
            image={maaji}
            name="Prof Sadisu Mohammed Maaji"
            title="Radiolgist"
            note="MBBS, FMCR, FWACS, FAIMER, Cert Endourol"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
          <StaffCard
            image={makusidi}
            notVc
            name="Prof. Makusidi A.M"
            title="Prof.of Medicine & Consultant Physician/Nephrolologist"
            note="MBBS(UDUS), FMCP(Nig)"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
          <StaffCard
            image={agwu}
            notVc
            name="Prof. Ngwobia Peter Agwu"
            title="Consultant Urologist"
            note="MBBS, FRCSEd"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
          <StaffCard
            notVc
            image={khalid}
            name="Dr. Abdullahi Khalid"
            title="Consultant Urological Surgeon"
            note="MBBS, FWACS"
            Socials={
              <div className="flex gap-6 mt-2">
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandLinkedin size={30} />
              </div>
            }
          />
        </div>
        <div className="my-4 hover:text-cyan-700">
          <Link to={"/team"} className="text-2xl font-bold text-gray-600 ">
            View More...
          </Link>
        </div>
      </Container>
      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-24">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            GALLERY
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
          <p className="text-center text-gray-700 font-normal text-xl">
            Here is some of our collection of pictures
          </p>
        </div>
        <Gallery />
      </Container>
      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-10">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            OUR PARTNERS
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        </div>
        <Partners />
      </Container>
      <div className="py-8 px-4 bg-cyan-500/10 mt-10">
        <Faq />
      </div>
    </div>
  );
}

interface CardProps {
  Socials: ReactNode;
  title: string;
  note: string;
  name: string;
  image: string;
  readMoreLink?: string;
  notVc?: boolean;
}
export function StaffCard({
  Socials,
  name,
  note,
  title,
  image,
  notVc,
  readMoreLink,
}: CardProps) {
  return (
    <Card
      style={{
        background: "var(--accent-3)",
        borderRadius: "0px 30px 30px 0px",
        boxShadow: "0px 5px 10px 2px",
      }}
    >
      <Image src={image} radius={"0px 30px 30px 0px"} />
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-lg font-semibold text-gray-700">{title}</span>
        <span className="text-3xl font-bold text-gray-800">{name}</span>
        <p className="text-gray-700">{note}</p>
        {Socials}
        {notVc && (
          <Link
            className="my-4 hover:text-cyan-700 text-gray-800 text-2xl"
            to={`${readMoreLink}`}
          >
            Read More...
          </Link>
        )}
      </div>
    </Card>
  );
}
