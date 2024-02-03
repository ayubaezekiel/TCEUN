import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Image,
  Button,
  em,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconClock, IconPhone } from "@tabler/icons-react";
import classes from "../assets/css/HeaderMenu.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const links = [
  { link: "/", label: "HOME" },
  { link: "/about", label: "ABOUT" },
  { link: "/team", label: "OUR TEAM" },
  { link: "/services", label: "SERVICES" },
  {
    link: "#1",
    label: "TRAINING",
    links: [
      { link: "/docs", label: "Post Fellowship" },
      { link: "/", label: "Comming soon" },
      { link: "/", label: "Comming soon" },
      { link: "/", label: "Comming soon" },
    ],
  },
  { link: "/news", label: "NEWS/EVENT" },
  { link: "/contact", label: "CONTACT" },
  {
    link: "#2",
    label: "EXTRAS",
    links: [
      { link: "/archive", label: "Archive" },
      { link: "/publications", label: "Publications" },
      { link: "/gallery", label: "Gallery" },
      { link: "/donate", label: "Donate" },
    ],
  },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} className="hover:text-cyan-700">
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={`${classes.link} font-bold`}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.link}
        className={`${classes.link} font-bold`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header>
      <div className="p-4 bg-cyan-600 flex justify-around gap-2 items-center">
        <span className="flex gap-2 text-white">
          <IconClock /> Monday - Friday, 8AM to 5PM
        </span>
        <Link to={"https://www.udusok.edu.ng"} className="text-red-700">
          <Button
            size={isMobile ? "sm" : "lg"}
            variant="gradient"
            gradient={{ from: "cyan", to: "red" }}
          >
            Visit the University
          </Button>
        </Link>
        <span className="flex gap-2 text-white">
          <IconPhone /> Call us now +2347061567228
        </span>
      </div>
      <nav className={`${classes.header} p-4`}>
        <Container size="xl">
          <div className={classes.inner}>
            <Image src={logo} w={100} h={50} />
            <Group gap={5} visibleFrom="sm">
              {items}
              <Button>Make an Appointment</Button>
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </div>
        </Container>
      </nav>
    </header>
  );
}
