import { Card, Container, Image } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { ReactNode } from "react";

import { Link } from "react-router-dom";
import director from "../assets/images/director.jpg";
import ibrahim from "../assets/images/ibrahim.jpg";
import nasiru from "../assets/images/nasiru sahabi.jpg";
import bello from "../assets/images/MB Bello.jpg";
import maaji from "../assets/images/unnamed.jpg";
import makusidi from "../assets/images/Dr Makusidi A.M.png";
import agwu from "../assets/images/agwu.jpg";
import khalid from "../assets/images/My Passport 20-01-2021.jpg";
import imam from "../assets/images/Imam.jpg";
import sadiq from "../assets/images/sadiq.png";
import sani from "../assets/images/sani.jpg";

import zarau from "../assets/images/Zarau.jpg";

export default function OurTeam() {
  return (
    <div>
      <div className=" grid grid-cols-2 p-2 bg-cyan-100 ">
        <h1 className="text-lg font-bold">Our Team</h1>
        <h1 className=" text-right text-lg">Home / Our Team</h1>
      </div>
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
          <StaffCard
            notVc
            image={zarau}
            name="Hajiya Zara'u Umar"
            title="Finance Officer"
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
            image={director}
            name="Prof Ismaila Arzika Mungadi"
            title="Professor of Surgery"
            note="MBBS,FRCSEd, FWACS FMAS, Cert Endourol"
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
            image={maaji}
            name="Prof Sadisu Mohammed Maaji"
            title="Radiolgist"
            note="MBBS,FMCR, FWACS FAIMER, Cert Endourol"
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
          <StaffCard
            notVc
            image={sadiq}
            name="Dr. Abubakar Sadiq Muhammad"
            title="Consultant Urological Surgeon/ Associate Lecturer"
            note="MBBS, FMCS (Urol), FWACS (Urol)"
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
            image={imam}
            name="Dr. Mustapha Umar Imam"
            title="Associate Professor"
            note="MBBS, PhD"
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
            image={sani}
            name="Dr. Abdurrahman Muhammad Sani"
            title="Senior Lecturer in Nursing Sciences"
            note="RN, BNSc, HND(Public Health Nursing) FWACN, MSc, PhD"
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
function StaffCard({
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
      bg={"cyan.2"}
      styles={{
        root: {
          borderRadius: "0px 30px 30px 0px",
        },
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
