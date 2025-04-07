import {
  Container,
  Title,
  Text,
  Grid,
  Stack,
  Group,
  ThemeIcon,
  Paper,
  Divider, // Use Divider for the underline
  useMantineTheme, // Access theme values if needed
  Box,
} from "@mantine/core";
import { MailPlus, MapPin, Phone } from "lucide-react"; // Keep lucide icons
import { ContactUsForm } from "../components/forms/ContactUsForm"; // Assuming this component exists

// --- Contact Information Data ---
const contactInfo = [
  {
    id: "address",
    title: "Our Address",
    desc: "No. 1 Garba Nadama Rd, Sokoto 840232, Nigeria",
    icon: MapPin,
    ariaLabel: "Address",
  },
  {
    id: "phone",
    title: "Call Us",
    desc: "+234 706 156 7228", // Added space for readability
    icon: Phone,
    ariaLabel: "Phone Number",
  },
  {
    id: "email",
    title: "Email Us",
    desc: "tce-un@udusok.edu.ng",
    icon: MailPlus,
    ariaLabel: "Email Address",
  },
];

export default function ContactUs() {
  const theme = useMantineTheme();

  return (
    <Box>
      {" "}
      {/* Use Box or Fragment as the top-level wrapper */}
      <Container size={"xl"} my="xl">
        {" "}
        {/* Use Mantine spacing props */}
        {/* --- Page Title --- */}
        <Stack align="center" mb="xl">
          {" "}
          {/* Center title and divider */}
          <Title
            order={1} // Use order prop for semantic heading level
            ta="center" // Use Mantine text align prop
            className="text-4xl text-gray-700 uppercase font-bold" // Keep specific Tailwind if needed, or use Mantine props
          >
            Contact Us
          </Title>
          <Divider
            size="md"
            color={theme.colors.cyan[6]} // Use theme color
            className="w-16" // Use Tailwind for specific width if easier
          />
        </Stack>
        {/* --- Main Content Grid --- */}
        <Grid gutter="xl" grow>
          {" "}
          {/* Add gutter for spacing, grow makes columns take equal space if needed */}
          {/* --- Left Column: Contact Info --- */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            {" "}
            {/* Responsive columns */}
            <Stack gap="lg">
              {" "}
              {/* Vertical spacing */}
              <Title order={3} c={theme.colors.cyan[7]} tt="uppercase">
                {" "}
                {/* Use theme color */}
                Get in Touch
              </Title>
              <Title
                order={2}
                className="text-4xl md:text-5xl font-bold text-gray-800"
              >
                Let's Connect
              </Title>
              <Text size="lg" c="dimmed">
                {" "}
                {/* Use Mantine Text size and color */}
                Have questions or need assistance? Reach out to us! We typically
                respond within 12-24 hours.
              </Text>
              {/* Map through contact info */}
              <Stack gap="xl" mt="lg">
                {" "}
                {/* Add margin-top and spacing */}
                {contactInfo.map((item) => (
                  <Group
                    key={item.id}
                    wrap="nowrap"
                    align="flex-start"
                    gap="lg"
                  >
                    <ThemeIcon
                      size={44}
                      radius="md"
                      variant="light"
                      color="cyan"
                    >
                      <item.icon size="1.5rem" aria-label={item.ariaLabel} />
                    </ThemeIcon>
                    <div>
                      <Text size="lg" fw={600} mb={4}>
                        {" "}
                        {/* Use fw for font-weight */}
                        {item.title}
                      </Text>
                      <Text size="md" c="dimmed">
                        {item.desc}
                      </Text>
                    </div>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>
          {/* --- Right Column: Contact Form --- */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            {/* Wrap form in Paper for visual distinction */}
            <Paper shadow="md" radius="md" p="xl" withBorder>
              <Title order={3} mb="lg" ta="center">
                Send us a Message
              </Title>
              <ContactUsForm />
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
