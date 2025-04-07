import {
  Anchor, // For themed links
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  rem,
  SimpleGrid, // Alternative for simpler grids
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  Icon3dCubeSphere,
  IconArrowRight,
  IconAward,
  IconBook,
  IconBuildingHospital,
  IconCapsule,
  IconDeviceHeartMonitor,
  IconDna2,
  IconFlask2Filled,
  IconHexagons,
  IconMicroscope,
  IconSchool,
  IconTestPipe,
  IconTransfer,
  IconUser,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import features from "../assets/images/features.jpg"; // Ensure path is correct
import React from "react";

// --- Stats Card Component ---
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  description: string;
  link?: string; // Optional link for "Find out more"
}

function StatCard({ icon, value, description, link = "#" }: StatCardProps) {
  const theme = useMantineTheme();
  return (
    <Card withBorder radius="md" p="lg" shadow="sm">
      <Stack gap="md">
        <Group gap="lg" align="center" wrap="nowrap">
          <ThemeIcon
            variant="light" // Or gradient/filled
            color={theme.primaryColor} // Use theme color
            size={rem(60)} // Icon background size
            radius="md"
          >
            {/* Ensure icon itself has appropriate size */}
            {React.cloneElement(icon as React.ReactElement, {
              size: "2rem",
              stroke: 1.5,
            })}
          </ThemeIcon>
          <Title order={2} fz={rem(40)} fw={700}>
            {" "}
            {/* Large value */}
            {value}
          </Title>
        </Group>
        <Text c="dimmed" size="sm" lh={1.5}>
          {description}
        </Text>
        <Anchor
          component={Link}
          to={link} // Use provided link or fallback
          size="sm"
          c={theme.primaryColor}
        >
          <Group gap={4} wrap="nowrap">
            <span>Find out more</span>
            <IconArrowRight size={rem(16)} stroke={1.5} />
          </Group>
        </Anchor>
      </Stack>
    </Card>
  );
}

// --- Surgery Item Component ---
interface SurgeryItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SurgeryItem({ icon, title, description }: SurgeryItemProps) {
  const theme = useMantineTheme();
  return (
    <Group wrap="nowrap" gap="lg" align="flex-start">
      <ThemeIcon
        variant="light"
        color={theme.primaryColor}
        size={rem(50)} // Slightly smaller icon for list
        radius="xl" // Circular
      >
        {React.cloneElement(icon as React.ReactElement, {
          size: "1.5rem",
          stroke: 1.5,
        })}
      </ThemeIcon>
      <div>
        <Text fw={600} mb={4}>
          {title}
        </Text>
        <Text size="sm" c="dimmed" lh={1.5}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

// --- Service Card Component ---
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const theme = useMantineTheme();
  return (
    <Card withBorder radius="md" p="xl" shadow="sm">
      <Stack align="center" gap="md">
        {/* Larger icon with a subtle shadow/border effect */}
        <ThemeIcon
          size={rem(80)}
          radius="xl" // Circular
          variant="outline" // Or light/filled
          color={theme.primaryColor}
          // Style below creates a subtle pseudo-shadow, adjust as needed
          // style={{ border: `2px solid ${theme.colors.gray[2]}`, boxShadow: `0 4px 10px ${theme.colors.gray[3]}` }}
        >
          {React.cloneElement(icon as React.ReactElement, {
            size: "2.5rem",
            stroke: 1.5,
          })}
        </ThemeIcon>

        <Title order={3} fz="lg" ta="center">
          {title}
        </Title>
        <Divider
          size="sm"
          w={rem(50)}
          color={theme.primaryColor}
          my={rem(4)} // Small margin
        />
        <Text ta="center" c="dimmed" size="sm" lh={1.6}>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}

// --- Main Services Page Component ---
export default function Services() {
  const theme = useMantineTheme();

  const statsData = [
    {
      icon: <IconUser />,
      value: "10+",
      description:
        "Professionally trained consultants, resident doctors, and support staff dedicated to patient care.",
      link: "/team",
    },
    {
      icon: <IconBuildingHospital />,
      value: "3",
      description:
        "Specialized departments: Urology, Nephrology, and Urogynaecology, offering focused expertise.",
      link: "/departments",
    }, // Example links
    {
      icon: <IconTestPipe />,
      value: "1",
      description:
        "A state-of-the-art research laboratory driving innovation in urological and nephrological science.",
      link: "/research",
    },
    {
      icon: <IconAward />,
      value: "40+",
      description:
        "Recognized with numerous individual and institutional awards for excellence in care and research.",
      link: "/awards",
    },
  ];

  const surgeriesData = [
    {
      icon: <IconTransfer />,
      title: "Kidney Transplant",
      description: "Comprehensive care for kidney transplantation procedures.",
    },
    {
      icon: <Icon3dCubeSphere />,
      title: "Percutaneous Nephrolithotomy (PCNL)",
      description: "Minimally invasive surgery for large kidney stones.",
    },
    {
      icon: <IconFlask2Filled />,
      title: "Retrograde Intrarenal Surgery (RIRS)",
      description: "Advanced laser treatment for kidney and ureteric stones.",
    },
    {
      icon: <IconDeviceHeartMonitor />,
      title: "Endourology & Prostate Surgery",
      description:
        "Including TURP, Laser Vaporization/Enucleation, and Endourethral procedures.",
    },
    {
      icon: <IconMicroscope />,
      title: "Laparoscopic Surgery",
      description:
        "Minimally invasive techniques for various urological conditions.",
    },
    {
      icon: <IconHexagons />,
      title: "Reconstructive & Congenital Anomaly Repair",
      description:
        "Complex procedures including Neobladder, Intersex, and Urethral surgeries.",
    },
  ];

  const servicesData = [
    {
      icon: <IconSchool />,
      title: "Training",
      description:
        "PhD programs, MSc, PGD, Fellowships, Residency Training, Workshops, and short courses across Urology, Nephrology, and Nursing specializations.",
    },
    {
      icon: <IconCapsule />,
      title: "Clinical Service (Urology)",
      description:
        "Advanced procedures including RIRS, Laser Prostate Surgery, Laparoscopy, Cancer Treatment, Reconstructive Surgery, and more.",
    },
    {
      icon: <IconBuildingHospital />,
      title: "Clinical Service (Nephrology)",
      description:
        "Including Plasmapheresis, General Nephrology care, Haemodialysis, Transplant evaluation, and comprehensive outpatient clinics.",
    },
    {
      icon: <IconDna2 />,
      title: "Clinical Service (Urogynaecology)",
      description:
        "Specialized care including VVF/RVF repair, Cystocele/Rectocele repair, Urethral Reconstruction, Vaginoplasty, and Pelvic Floor repairs.",
    },
    {
      icon: <IconBook />,
      title: "Research",
      description:
        "Active research programs focusing on Urology, Nephrology, Uro-gynaecology, Intersex conditions, and maintaining extensive Urology Databases.",
    },
    // Add a 6th service if you have one, or adjust the grid columns
    // { icon: <IconSomeOtherIcon />, title: "Another Service", description: "Description of the other service offered." },
  ];

  return (
    <>
      {/* Stats Section */}
      <Container size="xl" py="lg">
        {/* Use SimpleGrid for easy responsive columns */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </SimpleGrid>
      </Container>

      {/* Surgeries Section */}
      <Container size="xl" py="xl">
        {/* Section Title */}
        <Stack align="center" gap="sm" mb={{ base: "lg", sm: "xl" }}>
          <Title
            order={2}
            ta="center"
            tt="uppercase"
            fz={{ base: rem(28), sm: rem(34) }}
          >
            Surgeries We Offer
          </Title>
          <Divider size="sm" w={rem(60)} color={theme.primaryColor} />
        </Stack>

        {/* Content Grid */}
        <Grid gutter={{ base: "lg", md: "xl" }} align="stretch">
          {" "}
          {/* Align items to stretch height */}
          {/* List Column */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              {" "}
              {/* Spacing between surgery items */}
              {surgeriesData.map((surgery, index) => (
                <SurgeryItem key={index} {...surgery} />
              ))}
            </Stack>
          </Grid.Col>
          {/* Image Column */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={features}
              alt="Advanced surgical procedures"
              radius="md"
              h={{ base: 300, sm: 450, md: "100%" }} // Responsive height, full height on md+
              fit="cover" // How image covers the space
            />
          </Grid.Col>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box bg={theme.colors.gray[0]} py="xl">
        <Container size="xl">
          {/* Section Title */}
          <Stack align="center" gap="sm" mb={{ base: "lg", sm: "xl" }}>
            <Title
              order={2}
              ta="center"
              tt="uppercase"
              fz={{ base: rem(28), sm: rem(34) }}
            >
              Our Services
            </Title>
            <Divider size="sm" w={rem(60)} color={theme.primaryColor} />
            <Text ta="center" c="dimmed" fz="lg" maw={rem(800)}>
              Explore a range of high-quality urology/nephrology healthcare
              solutions, training opportunities, and cutting-edge research.
            </Text>
          </Stack>

          {/* Services Grid */}
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }} // Responsive columns
            spacing="xl"
            verticalSpacing="xl" // Ensure vertical spacing too
          >
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
