import {
  Accordion,
  ActionIcon, // Using AppShell context can be helpful but not strictly necessary here
  Burger,
  Button,
  Center,
  Container, // Access theme colors/spacing
  Divider,
  Drawer, // Use Drawer for mobile nav
  Group,
  Image,
  Menu,
  Modal,
  rem,
  ScrollArea, // For visual separation in drawer
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconClock, IconPhone } from "@tabler/icons-react";
// Use NavLink from react-router-dom for active link styling if desired
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom"; // Using basic Link for now

import classes from "../assets/css/HeaderMenu.module.css";
import logo from "../assets/images/logo.png"; // Ensure path is correct
import { AppointmentForm } from "./forms/AppointmentForm";

const links = [
  { link: "/", label: "HOME" },
  { link: "/about", label: "ABOUT" },
  { link: "/team", label: "OUR TEAM" },
  { link: "/services", label: "SERVICES" },
  {
    link: "#1", // Anchor links or actual parent pages are better for accessibility
    label: "TRAINING",
    links: [
      { link: "/fellow", label: "Post Fellowship" },
      // Use target="_blank" for external links
      {
        link: "https://www.pg.udusok.edu.ng",
        label: "PhD. Urology",
        external: true,
      },
      {
        link: "https://www.pg.udusok.edu.ng/",
        label: "PhD. Urology Nursing",
        external: true,
      },
      {
        link: "https://pg.udusok.edu.ng/",
        label: "MSc. Urology Nursing",
        external: true,
      },
      {
        link: "https://pg.udusok.edu.ng/",
        label: "PGD Urology",
        external: true,
      },
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
      { link: "/gallery", label: "Gallery" },
      { link: "/donate", label: "Donate" },
    ],
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [openedModal, { open: modalOpened, close: closeModal }] =
    useDisclosure(false);

  const mainNavItems = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        key={item.label}
        component={Link} // Use component prop for routing
        to={item.link}
        target={item.external ? "_blank" : undefined} // Handle external links
        rel={item.external ? "noopener noreferrer" : undefined}
      >
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
          shadow="md" // Add shadow to dropdown
          radius="sm"
        >
          <Menu.Target>
            {/* Using a Button-like structure for better click area and consistency */}
            <a
              href={link.link} // Keep href for semantics, but prevent default
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
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
        className={classes.link}
        // Example using NavLink for active styling (requires CSS for .active class)
        // className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
      >
        {link.label}
      </Link>
    );
  });

  // Mobile drawer navigation items
  const mobileNavItems = links.map((link) => {
    if (link.links) {
      return (
        <Accordion key={link.label} variant="transparent">
          <Accordion.Item value={link.label}>
            <Accordion.Control>
              <Text fw={500} size="md">
                {link.label}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="xs">
                {link.links.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className={classes.mobileSubLink}
                    onClick={closeDrawer} // Close drawer on link click
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.link}
        className={classes.mobileLink}
        onClick={closeDrawer} // Close drawer on link click
      >
        {link.label}
      </Link>
    );
  });

  return (
    // Using AppShell.Header might be better if using full AppShell layout
    // <AppShell.Header>
    <header className={classes.headerWrapper}>
      {" "}
      {/* Optional wrapper if needed */}
      {/* Top Bar */}
      <div className={classes.topBar}>
        <Container size="xl" className={classes.topBarContent}>
          <Group gap="xs" wrap="nowrap" className={classes.topBarItem}>
            <ActionIcon variant="transparent" color="white" size="sm">
              <IconClock style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
            <Text size="xs" inherit>
              {" "}
              {/* Inherit color, control size */}
              Mon - Fri, 8AM - 5PM
            </Text>
          </Group>

          {/* Hide button on very small screens if needed, Mantine's Button adjusts size */}
          <Button
            component="a" // Use anchor tag for external link
            href="https://www.udusok.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }} // Adjusted gradient
            size="xs" // Smaller default size
            visibleFrom="xs" // Hide on smallest screens if desired
          >
            Visit University
          </Button>

          <Group gap="xs" wrap="nowrap" className={classes.topBarItem}>
            <ActionIcon variant="transparent" color="white" size="sm">
              <IconPhone style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
            <Text size="xs" inherit component="a" href="tel:+2347061567228">
              {" "}
              {/* Make callable */}
              +234 706 156 7228
            </Text>
          </Group>
        </Container>
      </div>
      {/* Main Navigation */}
      <Container size="xl">
        <div className={classes.inner}>
          {/* Logo */}
          <Link to="/" onClick={closeDrawer}>
            <Image src={logo} h={45} w="auto" alt="Logo" /> {/* Adjust size */}
          </Link>

          {/* Desktop Navigation */}
          <Group gap={5} visibleFrom="md">
            {" "}
            {/* Adjust breakpoint */}
            {mainNavItems}
            <Button
              onClick={() => {
                modalOpened();
                closeDrawer();
              }}
              radius="xl"
              ml="md" // Margin left for spacing
            >
              Make Appointment
            </Button>
            <Modal
              size={"xl"}
              opened={openedModal}
              onClose={closeModal}
              title="Schedule Appointment"
            >
              <AppointmentForm />
            </Modal>
          </Group>

          {/* Mobile Navigation Burger */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md" // Adjust breakpoint
            size="sm"
          />
        </div>
      </Container>
      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%" // Full width drawer
        padding="md"
        title={
          <Link to="/" onClick={closeDrawer}>
            <Image src={logo} h={35} w="auto" alt="Logo" />
          </Link>
        } // Logo in drawer title
        hiddenFrom="md" // Adjust breakpoint
        zIndex={1001} // Ensure drawer is above sticky header
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`}>
          <Stack gap="sm">
            {mobileNavItems}
            <Divider my="sm" />
            <Button
              onClick={() => {
                modalOpened();
                closeDrawer();
              }}
              fullWidth // Make button full width in drawer
              radius="xl"
            >
              Make Appointment
            </Button>
            <Modal
              opened={openedModal}
              onClose={closeModal}
              title="Schedule Appointment"
            >
              <AppointmentForm />
            </Modal>
          </Stack>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
