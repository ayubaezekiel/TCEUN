import { Container } from "@mantine/core";

import { Cable, MailPlus, MapPin, Phone } from "lucide-react";
import { ContactUsForm } from "../components/forms/ContactUsForm";
import { PageBreadcrumbs } from "../components/Breadcrumbs";

export default function ContactUs() {
  return (
    <div>
      <PageBreadcrumbs
        currentUrl={[
          { href: "/", title: "Home" },
          { href: "/contact/", title: "Contact" },
        ]}
        title="Contact Us"
      />
      <Container size={"xl"}>
        <div className="my-10">
          <h1 className="text-4xl text-gray-600 text-center uppercase font-bold">
            Contact Us
          </h1>
          <div className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></div>
        </div>
      </Container>

      <section className="grid md:grid-cols-2 gap-4 my-14 p-4 w-[90%] mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-primary text-2xl uppercase">Get in Touch</span>
          <span className="text-5xl font-bold text-gray-800">Contact Us</span>
          <span className="text-gray-600 text-xl">
            We have a dedicated support center for all of your support needs. We
            usually get back to you within 12-24 hours.
          </span>
          {info.map((i) => (
            <div className="flex gap-2 mt-10 items-center">
              {<i.icon className="text-info" />}
              <div>
                <span className="text-2xl font-bold text-gray-800">
                  {i.title}
                </span>
                <p className="text-xl text-gray-600 mt-2">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <ContactUsForm />
        </div>
      </section>
    </div>
  );
}

const info = [
  {
    title: "Our Address",
    desc: "Plot 1756 Cadastral zone E27 Apo, Abuja",
    icon: MapPin,
  },
  {
    title: "Call Us",
    desc: "+2327049225550",
    icon: Phone,
  },
  {
    title: "Email Us",
    desc: "info@sahadhospitals.com",
    icon: MailPlus,
  },
  {
    title: "Customer Support",
    desc: "info@sahadhospitals.com",
    icon: Cable,
  },
];
