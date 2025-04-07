import { Box, Card, Container, Image, rgba } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconExternalLink,
  IconMail,
} from "@tabler/icons-react";
import { ReactNode, useState } from "react";

import { Link } from "react-router-dom";
import agwu from "../assets/images/agwu.jpg";
import director from "../assets/images/director.jpg";
import makusidi from "../assets/images/Dr Makusidi A.M.png";
import ibrahim from "../assets/images/ibrahim.jpg";
import imam from "../assets/images/Imam.jpg";
import bello from "../assets/images/MB Bello.jpg";
import khalid from "../assets/images/My Passport 20-01-2021.jpg";
import nasiru from "../assets/images/nasiru sahabi.jpg";
import sadiq from "../assets/images/sadiq.png";
import sani from "../assets/images/sani.jpg";
import maaji from "../assets/images/unnamed.jpg";
import zarau from "../assets/images/Zarau.jpg";

import {
  ActionIcon,
  Anchor,
  Badge,
  Divider,
  Group,
  Overlay,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Transition,
  useMantineTheme,
} from "@mantine/core";

// --- Reusable Section Title Component with animation ready classes ---
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
}

function SectionTitle({ title, subtitle, accent = false }: SectionTitleProps) {
  const theme = useMantineTheme();
  return (
    <Stack
      align="center"
      gap="sm"
      mb={{ base: "xl", sm: "2rem" }}
      className="section-title"
    >
      <Title
        order={1}
        tt="uppercase"
        ta="center"
        fz={{ base: rem(28), sm: rem(40) }}
        fw={700}
        c={accent ? theme.primaryColor : undefined}
        className="title-animate"
      >
        {title}
      </Title>
      <Divider
        size="md"
        w={rem(80)}
        color={theme.primaryColor}
        className="divider-animate"
      />
      {subtitle && (
        <Text
          ta="center"
          c="dimmed"
          fz={{ base: "md", sm: "lg" }}
          maw={rem(800)}
          className="subtitle-animate"
        >
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}

// --- Staff Data ---
const principalOfficers = [
  {
    image: director,
    name: "Prof Ismaila Arzika Mungadi",
    title: "Director",
    note: "MBBS(UDUS), FRCSEd, FWACS, FMAS, Cert Endourol",
    readMoreLink: "/team/mungadi",
    email: "mungadi@example.com",
    featured: true,
  },
  {
    image: bello,
    name: "Dr. Muhammad Bashir Bello",
    title: "Research Officer",
    note: "DVM, MSc, PhD",
    email: "mbello@example.com",
  },
  {
    image: nasiru,
    name: "Mallam Nasiru Sahabi",
    title: "Documentation Officer",
    note: "BSc Documentation Science, MSc Information Management",
    email: "nsahabi@example.com",
  },
  {
    image: ibrahim,
    name: "Malam Ibrahim Lawal",
    title: "Admin Officer",
    note: "BSc Business Administration, Dip. HR Management",
    email: "ilawal@example.com",
  },
  {
    image: zarau,
    name: "Hajiya Zara'u Umar",
    title: "Finance Officer",
    note: "BSc Accounting, ICAN Certified",
    email: "zumar@example.com",
  },
];

const clinicalStaff = [
  {
    image: director,
    name: "Prof Ismaila Arzika Mungadi",
    title: "Professor of Surgery",
    note: "MBBS, FRCSEd, FWACS, FMAS, Cert Endourol",
    readMoreLink: "/team/mungadi",
    email: "mungadi@example.com",
    featured: true,
  },
  {
    image: maaji,
    name: "Prof Sadisu Mohammed Maaji",
    title: "Radiologist",
    note: "MBBS, FMCR, FWACS, FAIMER, Cert Endourol",
    email: "smaaji@example.com",
  },
  {
    image: makusidi,
    name: "Prof. Makusidi A.M",
    title: "Prof. of Medicine & Consultant Physician/Nephrologist",
    note: "MBBS(UDUS), FMCP(Nig)",
    email: "makusidi@example.com",
  },
  {
    image: agwu,
    name: "Prof. Ngwobia Peter Agwu",
    title: "Consultant Urologist",
    note: "MBBS, FRCSEd",
    email: "agwu@example.com",
  },
  {
    image: khalid,
    name: "Dr. Abdullahi Khalid",
    title: "Consultant Urological Surgeon",
    note: "MBBS, FWACS",
    email: "akhalid@example.com",
  },
  {
    image: sadiq,
    name: "Dr. Abubakar Sadiq Muhammad",
    title: "Consultant Urological Surgeon/ Associate Lecturer",
    note: "MBBS, FMCS (Urol), FWACS (Urol)",
    email: "asmuhammad@example.com",
  },
  {
    image: imam,
    name: "Dr. Mustapha Umar Imam",
    title: "Associate Professor",
    note: "MBBS, PhD",
    email: "muimam@example.com",
  },
  {
    image: sani,
    name: "Dr. Abdurrahman Muhammad Sani",
    title: "Senior Lecturer in Nursing Sciences",
    note: "RN, BNSc, HND(Public Health Nursing) FWACN, MSc, PhD",
    email: "amsani@example.com",
  },
];

function TeamHero() {
  const theme = useMantineTheme();

  return (
    <Box
      pos="relative"
      h={{ base: rem(500), md: rem(600) }}
      bg={theme.colors[theme.primaryColor][9]}
    >
      <Container size="lg" h="100%">
        <Stack
          align="center"
          justify="center"
          h="100%"
          gap="xl"
          pos="relative"
          ta="center"
        >
          <Badge
            variant="filled"
            size="lg"
            color="white"
            px="xl"
            py="xs"
            style={{ backgroundColor: rgba(theme.white, 0.2) }}
          >
            Excellence in Specialized Care
          </Badge>

          <Title
            order={1}
            fz={{ base: rem(36), sm: rem(52) }}
            fw={900}
            lh={1.1}
            className="animate-title"
            c={"white"}
          >
            Our Exceptional Team
          </Title>

          <Text
            size="xl"
            maw={rem(750)}
            opacity={0.95}
            lh={1.6}
            className="animate-text"
            c={"white"}
          >
            Meet the dedicated professionals making breakthroughs in medical
            research and treatment
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

// --- Main Team Page Component ---
export default function OurTeam() {
  const theme = useMantineTheme();
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <Box>
      <TeamHero />

      {/* Principal Officers Section */}
      <Container size="xl" py={{ base: "xl", sm: "3rem" }}>
        <SectionTitle
          title="Our Staff"
          subtitle="Meet our dedicated team of principal officers who lead our organization with expertise and vision"
        />

        {/* Featured Officer - Director */}
        {principalOfficers
          .filter((officer) => officer.featured)
          .map((director) => (
            <Paper
              withBorder
              shadow="md"
              p="xl"
              radius="lg"
              mb="3rem"
              key={director.name}
              style={{
                background: `linear-gradient(45deg, ${theme.white}, ${
                  theme.colors[theme.primaryColor][1]
                })`,
              }}
            >
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                <Box>
                  <Image
                    src={director.image}
                    alt={director.name}
                    radius="md"
                    h={{ base: rem(300), md: rem(400) }}
                    fit="cover"
                    style={{ boxShadow: theme.shadows.md }}
                  />
                </Box>
                <Stack justify="center">
                  <Badge
                    color={theme.primaryColor}
                    size="lg"
                    variant="filled"
                    w="fit-content"
                  >
                    {director.title}
                  </Badge>
                  <Title order={2} fz={{ base: "2rem", md: "2.5rem" }}>
                    {director.name}
                  </Title>
                  <Text fz="lg">{director.note}</Text>
                  <Text c="dimmed" fz="md">
                    Leading our organization with vision and expertise, driving
                    innovation and excellence in healthcare.
                  </Text>
                  <Group gap="md" mt="md">
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      color={theme.primaryColor}
                      radius="xl"
                      component="a"
                      href={`mailto:${director.email}`}
                    >
                      <IconMail size="1.2rem" />
                    </ActionIcon>
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      color={theme.primaryColor}
                      radius="xl"
                    >
                      <IconBrandLinkedin size="1.2rem" />
                    </ActionIcon>
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      color={theme.primaryColor}
                      radius="xl"
                    >
                      <IconBrandTwitter size="1.2rem" />
                    </ActionIcon>
                  </Group>
                </Stack>
              </SimpleGrid>
            </Paper>
          ))}

        {/* Other Principal Officers */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {principalOfficers
            .filter((officer) => !officer.featured)
            .map((officer) => (
              <StaffCard key={officer.name} {...officer} />
            ))}
        </SimpleGrid>
      </Container>

      {/* Clinical Staff Section */}
      <Box py={{ base: "xl", sm: "3rem" }}>
        <Container size="xl">
          <SectionTitle
            title="Clinical Staff"
            subtitle="Our renowned clinical officers provide world-class patient care with expertise across medical specialties"
          />

          {/* Filter Buttons */}
          <Group justify="center" mb="xl">
            <Anchor
              onClick={() => setActiveFilter("all")}
              c={activeFilter === "all" ? theme.primaryColor : "dimmed"}
              fw={activeFilter === "all" ? 700 : 400}
              fz="md"
              style={{ cursor: "pointer" }}
            >
              All Staff
            </Anchor>
            <Anchor
              onClick={() => setActiveFilter("professors")}
              c={activeFilter === "professors" ? theme.primaryColor : "dimmed"}
              fw={activeFilter === "professors" ? 700 : 400}
              fz="md"
              style={{ cursor: "pointer" }}
            >
              Professors
            </Anchor>
            <Anchor
              onClick={() => setActiveFilter("consultants")}
              c={activeFilter === "consultants" ? theme.primaryColor : "dimmed"}
              fw={activeFilter === "consultants" ? 700 : 400}
              fz="md"
              style={{ cursor: "pointer" }}
            >
              Consultants
            </Anchor>
          </Group>

          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
            spacing="xl"
            verticalSpacing="xl"
          >
            {clinicalStaff
              .filter((staff) => {
                if (activeFilter === "all") return true;
                if (activeFilter === "professors")
                  return staff.title.toLowerCase().includes("professor");
                if (activeFilter === "consultants")
                  return staff.title.toLowerCase().includes("consultant");
                return true;
              })
              .map((staff) => (
                <StaffCard key={staff.name} {...staff} />
              ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Join Us CTA Section */}
      <Container size="xl" py={{ base: "xl", sm: "3rem" }}>
        <Paper withBorder shadow="md" p="xl" radius="lg">
          <Stack align="center" ta="center">
            <Title order={2} c="white">
              Join Our Team
            </Title>
            <Text maw={rem(600)} mx="auto" fz="lg" c="dark" opacity={0.9}>
              We're always looking for talented professionals to join our
              growing team. Check our careers page for current opportunities.
            </Text>
            <Anchor
              component={Link}
              to="/careers"
              size="lg"
              mt="md"
              c="white"
              style={{
                border: "2px solid white",
                padding: "0.5rem 1.5rem",
                borderRadius: theme.radius.md,
                fontWeight: 600,
              }}
            >
              View Open Positions
            </Anchor>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

interface StaffCardProps {
  Socials?: ReactNode;
  title: string;
  note: string;
  name: string;
  image: string;
  readMoreLink?: string;
  email?: string;
  featured?: boolean;
}

// Enhanced StaffCard component with hover effects
function StaffCard({
  name,
  note,
  title,
  image,
  readMoreLink = "#",
  email,
}: StaffCardProps) {
  const theme = useMantineTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      withBorder
      shadow="sm"
      padding={0}
      radius="md"
      style={{
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        transform: hovered ? "translateY(-5px)" : "none",
        boxShadow: hovered ? theme.shadows.md : theme.shadows.sm,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with overlay on hover */}
      <Box pos="relative">
        <Image src={image} alt={name} height={rem(240)} fit="cover" />
        <Transition mounted={hovered} transition="fade" duration={200}>
          {(styles) => (
            <Overlay
              style={{
                ...styles,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              opacity={0.7}
            >
              <Group gap="md">
                {email && (
                  <ActionIcon
                    variant="filled"
                    color="white"
                    radius="xl"
                    size="lg"
                    component="a"
                    href={`mailto:${email}`}
                  >
                    <IconMail size="1.2rem" />
                  </ActionIcon>
                )}
                <ActionIcon
                  variant="filled"
                  color="white"
                  radius="xl"
                  size="lg"
                >
                  <IconBrandLinkedin size="1.2rem" />
                </ActionIcon>
                <ActionIcon
                  variant="filled"
                  color="white"
                  radius="xl"
                  size="lg"
                >
                  <IconBrandTwitter size="1.2rem" />
                </ActionIcon>
              </Group>
            </Overlay>
          )}
        </Transition>
      </Box>

      {/* Content Section */}
      <Stack p="md" gap="xs">
        <Text fz="sm" fw={600} c={theme.primaryColor} tt="uppercase">
          {title}
        </Text>
        <Text fz="lg" fw={700} lineClamp={2}>
          {name}
        </Text>
        <Text fz="sm" c="dimmed" lineClamp={3}>
          {note}
        </Text>

        {/* Optional Read More Link */}
        {readMoreLink && readMoreLink !== "#" && (
          <Group mt="xs" align="center">
            <Anchor
              component={Link}
              to={readMoreLink}
              size="sm"
              display="flex"
              c={theme.primaryColor}
            >
              View Profile{" "}
              <IconExternalLink
                size="0.8rem"
                style={{ marginLeft: "0.2rem" }}
              />
            </Anchor>
          </Group>
        )}
      </Stack>
    </Card>
  );
}
