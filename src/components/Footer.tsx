import { Container, ActionIcon, Group, rem, Image } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandSkype,
} from "@tabler/icons-react";
import classes from "../assets/css/FooterLinks.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Useful Links",
    links: [
      { label: "Home", link: "#" },
      { label: "About Us", link: "#" },
      { label: "Services", link: "#" },
      { label: "Contact Us", link: "#" },
      { label: "Upcoming Events", link: "#" },
    ],
  },
  {
    title: "Our services",
    links: [
      { label: "Training", link: "#" },
      { label: "Clinical Service(Urology)", link: "#" },
      { label: "Clinical Service(Nephrology)", link: "#" },
      { label: "Clinical Service(Urogynechology)", link: "#" },
      { label: "Research", link: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="pt-4 bg-gray-100 mt-10">
      <Container className={classes.inner} size={"xl"}>
        <div className="flex flex-col gap-2 text-xs">
          <Image src={logo} h={100} w={200} className="my-4" />
          <div className="flex flex-col gap-2">
            <span>No. 1 Garba Nadama Rd, Sokoto 840232, Nigeria</span>
            <span>Phone: +2347061567228 </span>
            <span>Email: tce-un@udusok.edu.ng</span>
          </div>
        </div>
        <div>
          <div className="md:flex gap-4 hidden">
            {data.map((t, index) => (
              <div key={index}>
                <div className="font-bold my-4">{t.title}</div>
                <div>
                  {t.links.map((a) => (
                    <ul key={a.label}>
                      <li>
                        <Link
                          to={a.link}
                          className="hover:underline mx-2 text-xs"
                        >
                          {a.label}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter} size={"xl"}>
        <span className="text-xs">
          © Copyright TCE-UN 2024. All rights reserved. <br />
          Designed by Muntech Technologies
        </span>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="cyan" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="cyan" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="cyan" variant="subtle">
            <IconBrandFacebook
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="cyan" variant="subtle">
            <IconBrandSkype
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
