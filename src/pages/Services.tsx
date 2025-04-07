import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  lighten,
  List,
  Paper,
  rem,
  rgba,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconActivity,
  IconArrowRight,
  IconBuildingHospital,
  IconCalendarPlus,
  IconCertificate,
  IconFirstAidKit,
  IconHeartbeat,
  IconMicroscope,
  IconStethoscope,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import feature from "../assets/images/features.jpg"; // Replace with actual image path
import diagnosis from "../assets/images/departments-1.jpg";
import surgical from "../assets/images/gallery-10.jpg";

// Enhanced Hero Component with more visual impact
function ServicesHero() {
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
            Comprehensive Urology &<br />
            Nephrology Services
          </Title>

          <Text
            size="xl"
            maw={rem(750)}
            opacity={0.95}
            lh={1.6}
            className="animate-text"
            c={"white"}
          >
            Providing state-of-the-art diagnostics, treatments, research, and
            training to advance patient care and medical knowledge in Sokoto and
            beyond.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

// Featured Services Component
function FeaturedServices() {
  const theme = useMantineTheme();

  const services = [
    {
      icon: <IconStethoscope size={28} />,
      title: "Clinical Consultations",
      description:
        "Expert consultations for urological and nephrological conditions from our experienced specialists.",
      link: "/services/consultations",
    },
    {
      icon: <IconMicroscope size={28} />,
      title: "Advanced Diagnostics",
      description:
        "State-of-the-art diagnostic procedures including urodynamics, imaging, and laboratory services.",
      link: "/services/diagnostics",
    },
    {
      icon: <IconHeartbeat size={28} />,
      title: "Specialized Treatments",
      description:
        "Comprehensive treatment options for kidney stones, urological cancers, and renal diseases.",
      link: "/services/treatments",
    },
    {
      icon: <IconBuildingHospital size={28} />,
      title: "Research Programs",
      description:
        "Groundbreaking research initiatives aimed at advancing medical knowledge and patient outcomes.",
      link: "/services/research",
    },
  ];

  return (
    <Container size="lg" py={{ base: rem(60), md: rem(80) }}>
      <Stack align="center" mb={rem(50)}>
        <Title order={2} ta="center" fz={{ base: rem(28), md: rem(36) }}>
          Our Featured Services
        </Title>
        <Text c="dimmed" ta="center" maw={rem(800)} size="lg">
          We offer a comprehensive range of specialized services designed to
          address the unique needs of patients with urological and nephrological
          conditions.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={rem(30)}>
        {services.map((service, index) => (
          <Paper
            key={index}
            withBorder
            p="xl"
            radius="md"
            style={{
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.shadows.md,
              },
            }}
          >
            <Group mb="md">
              <ThemeIcon
                size={60}
                radius="xl"
                color={theme.primaryColor}
                variant="light"
              >
                {service.icon}
              </ThemeIcon>
              <Title order={3} fz="xl">
                {service.title}
              </Title>
            </Group>

            <Text c="dimmed" mb="xl">
              {service.description}
            </Text>

            <Button
              component={Link}
              to={service.link}
              variant="subtle"
              color={theme.primaryColor}
              rightSection={<IconArrowRight size={16} />}
            >
              Learn More
            </Button>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}

// Comprehensive Services Tab Component
function ServiceTabs() {
  const theme = useMantineTheme();

  const clinicalServices = [
    "Urological Consultations",
    "Nephrological Assessments",
    "Kidney Stone Management",
    "Urinary Tract Infection Treatment",
    "Prostate Health Services",
    "Bladder Control Therapy",
    "Kidney Disease Management",
  ];

  const diagnosticServices = [
    "Urodynamic Studies",
    "Kidney Function Tests",
    "Ultrasound Diagnostics",
    "CT Urography",
    "Cystoscopy",
    "Urinalysis",
    "Biopsy Services",
  ];

  const surgicalServices = [
    "Minimally Invasive Procedures",
    "Endoscopic Surgery",
    "Laser Stone Treatment",
    "Prostate Surgery",
    "Nephrectomy",
    "Reconstructive Urological Surgery",
    "Transplant Support Services",
  ];

  return (
    <Box
      bg={lighten(theme.colors[theme.primaryColor][6], 0.95)}
      py={{ base: rem(60), md: rem(80) }}
    >
      <Container size="lg">
        <Stack align="center" mb={rem(40)}>
          <Title order={2} ta="center" fz={{ base: rem(28), md: rem(36) }}>
            Comprehensive Service Categories
          </Title>
          <Text c="dimmed" ta="center" maw={rem(800)} size="lg">
            Our center offers a wide range of specialized services across
            clinical, diagnostic, and surgical domains to provide complete
            patient care.
          </Text>
        </Stack>

        <Tabs defaultValue="clinical" color={theme.primaryColor}>
          <Tabs.List grow mb="xl">
            <Tabs.Tab
              value="clinical"
              leftSection={<IconFirstAidKit size={16} />}
            >
              Clinical Services
            </Tabs.Tab>
            <Tabs.Tab
              value="diagnostic"
              leftSection={<IconActivity size={16} />}
            >
              Diagnostic Services
            </Tabs.Tab>
            <Tabs.Tab
              value="surgical"
              leftSection={<IconCertificate size={16} />}
            >
              Surgical Procedures
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="clinical">
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Card withBorder p="lg" radius="md">
                <Title order={3} size="h4" mb="md">
                  Our Clinical Services
                </Title>
                <Text mb="lg">
                  Our clinical services focus on comprehensive assessment,
                  management, and ongoing care for patients with urological and
                  nephrological conditions.
                </Text>
                <List
                  spacing="sm"
                  icon={
                    <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                      <IconStethoscope size={16} />
                    </ThemeIcon>
                  }
                >
                  {clinicalServices.map((service, index) => (
                    <List.Item key={index}>{service}</List.Item>
                  ))}
                </List>
              </Card>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={feature}
                  alt="Clinical Services"
                  style={{
                    maxWidth: "100%",
                    borderRadius: theme.radius.md,
                    boxShadow: theme.shadows.md,
                  }}
                />
              </Box>
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="diagnostic">
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={diagnosis}
                  alt="Diagnostic Services"
                  style={{
                    maxWidth: "100%",
                    borderRadius: theme.radius.md,
                    boxShadow: theme.shadows.md,
                  }}
                />
              </Box>
              <Card withBorder p="lg" radius="md">
                <Title order={3} size="h4" mb="md">
                  Our Diagnostic Services
                </Title>
                <Text mb="lg">
                  We offer state-of-the-art diagnostic services utilizing the
                  latest technology to ensure accurate and timely evaluation of
                  urological and kidney conditions.
                </Text>
                <List
                  spacing="sm"
                  icon={
                    <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                      <IconMicroscope size={16} />
                    </ThemeIcon>
                  }
                >
                  {diagnosticServices.map((service, index) => (
                    <List.Item key={index}>{service}</List.Item>
                  ))}
                </List>
              </Card>
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="surgical">
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Card withBorder p="lg" radius="md">
                <Title order={3} size="h4" mb="md">
                  Our Surgical Procedures
                </Title>
                <Text mb="lg">
                  Our skilled surgical team specializes in a wide range of
                  procedures, from minimally invasive techniques to complex
                  reconstructive surgeries.
                </Text>
                <List
                  spacing="sm"
                  icon={
                    <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                      <IconCertificate size={16} />
                    </ThemeIcon>
                  }
                >
                  {surgicalServices.map((service, index) => (
                    <List.Item key={index}>{service}</List.Item>
                  ))}
                </List>
              </Card>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={surgical}
                  alt="Surgical Services"
                  style={{
                    maxWidth: "100%",
                    borderRadius: theme.radius.md,
                    boxShadow: theme.shadows.md,
                  }}
                />
              </Box>
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
}

// Appointment CTA Section
function AppointmentCTA() {
  const theme = useMantineTheme();

  return (
    <Container size="lg" py={{ base: rem(60), md: rem(80) }}>
      <Paper
        radius="lg"
        p={{ base: "xl", md: "2rem" }}
        style={{
          backgroundImage: `linear-gradient(135deg, ${
            theme.colors[theme.primaryColor][6]
          } 0%, ${theme.colors[theme.primaryColor][8]} 100%)`,
          color: theme.white,
        }}
      >
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Stack justify="center" gap="md">
            <Title order={2} fw={700} fz={{ base: "2rem", md: "2.5rem" }}>
              Ready to Schedule Your Visit?
            </Title>
            <Text size="lg" opacity={0.9} lh={1.6} mb="md">
              Our team of specialists is ready to provide you with personalized
              care. Schedule an appointment today and take the first step
              towards better health.
            </Text>
            <Group>
              <Button
                component={Link}
                to="/appointment"
                size="xl"
                radius="xl"
                color="white"
                variant="filled"
                style={{
                  backgroundColor: theme.white,
                  color: theme.colors[theme.primaryColor][6],
                }}
                rightSection={<IconCalendarPlus size={20} />}
              >
                Book an Appointment
              </Button>
              <Button
                component="a"
                href="tel:+1234567890" // Replace with actual phone number
                size="xl"
                radius="xl"
                variant="outline"
                color="white"
              >
                Call Us
              </Button>
            </Group>
          </Stack>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/path/to/doctor-image.jpg"
              alt="Medical Consultation"
              style={{
                maxWidth: "100%",
                borderRadius: theme.radius.lg,
                boxShadow: theme.shadows.lg,
              }}
            />
          </Box>
        </SimpleGrid>
      </Paper>
    </Container>
  );
}

// Main Services Content Component
function ServicesContent() {
  return (
    <>
      <FeaturedServices />
      <ServiceTabs />
      <AppointmentCTA />
    </>
  );
}

// Main Page Component
export default function OurServices() {
  return (
    <Box>
      <ServicesHero />
      <ServicesContent />
    </Box>
  );
}
