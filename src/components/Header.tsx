import {
  Burger,
  Button,
  Center,
  Container,
  Group,
  Image,
  Menu,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconButton, Popover } from "@radix-ui/themes";
import { IconChevronDown, IconClock, IconPhone } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "../assets/css/HeaderMenu.module.css";
import logo from "../assets/images/logo.png";

const links = [
  { link: "/", label: "HOME" },
  { link: "/about", label: "ABOUT" },
  { link: "/team", label: "OUR TEAM" },
  { link: "/services", label: "SERVICES" },
  {
    link: "#1",
    label: "TRAINING",
    links: [
      { link: "/fellow", label: "Post Fellowship" },
      { link: "https://www.pg.udusok.edu.ng/", label: "PhD. Urology" },
      { link: "https://www.pg.udusok.edu.ng/", label: "PhD. Urology Nursing" },
      { link: "https://pg.udusok.edu.ng/", label: "MSc. Urology Nursing" },
      { link: "https://pg.udusok.edu.ng/", label: "PGD Urology" },
    ],
  },
  { link: "/news", label: "NEWS/EVENT" },
  { link: "/contact", label: "CONTACT" },
  {
    link: "#2",
    label: "EXTRAS",
    links: [
      { link: "/archive", label: "Archive" },
      { link: "/publication", label: "Publications" },
      { link: "/gallerys", label: "Gallery" },
      { link: "/donate", label: "Donate" },
    ],
  },
];

export function Header() {
  const matches = useMediaQuery("(min-width: 56.25em)");

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} className="hover:text-cyan-700">
        <Link to={item.link}>{item.label}</Link>
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
      <div className="p-4 bg-cyan-600 flex justify-between gap-2 items-center">
        <div className="flex gap-2 text-white items-center">
          <IconButton radius="full" color="gray">
            <IconClock />
          </IconButton>
          <span className="text-xs md:text-lg">
            Monday - Friday, 8AM to 5PM
          </span>
        </div>
        <Link to={"https://www.udusok.edu.ng"} className="text-red-700">
          {matches && (
            <Button
              size={"lg"}
              variant="gradient"
              gradient={{ from: "cyan", to: "red" }}
            >
              Visit the University
            </Button>
          )}
        </Link>
        <div className="flex items-center text-white gap-2">
          <IconButton radius="full" color="gray">
            <IconPhone />
          </IconButton>
          <span className="text-xs md:text-lg">Call us now +2347061567228</span>
        </div>
      </div>
      <nav className={`${classes.header} p-4`}>
        <Container size="xl">
          <div className={classes.inner}>
            <Image src={logo} w={100} h={50} />
            <Group gap={5} visibleFrom="sm">
              {items}
              <Button>Make an Appointment</Button>
            </Group>

            <Popover.Root>
              <Popover.Trigger>
                <Burger />
              </Popover.Trigger>
              <Popover.Content width="500px">
                <div className="grid grid-cols-2 gap-2">
                  {links.map((l) => (
                    <Button key={l.label}>
                      <Link to={l.link}>{l.label}</Link>
                    </Button>
                  ))}
                </div>
              </Popover.Content>
            </Popover.Root>
          </div>
        </Container>
      </nav>
    </header>
  );
}
