import { Container, Image } from "@mantine/core";
import { Card } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { About } from "../components/About";
import ContactForm from "../components/Contact";
import { EmergencySection } from "../components/EmergencySection";
import Faq from "../components/Faq";
import { Partners } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { MissionAndVision } from "../components/MissionAndVision";
import Services from "../components/Services";
import { BoardOfDirectors } from "../components/BoardOfDirectors";

export default function Index() {
  return (
    <div>
      <Hero />

      <MissionAndVision />

      <EmergencySection />
      <About />

      <Services />
      <ContactForm />
      <BoardOfDirectors />

      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-10">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            OUR PARTNERS
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        </div>
        <Partners />
      </Container>
      <div className="py-8 px-4">
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
