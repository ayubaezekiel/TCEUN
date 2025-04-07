import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  List, // Use List component for bullet points
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
  Alert, // Use Alert for important notices
} from "@mantine/core";
import { IconCircleCheck, IconInfoCircle } from "@tabler/icons-react";

// Assuming image imports are correct
import about from "../assets/images/about.jpg";
import features from "../assets/images/features.jpg";

// --- Reusable Section Title --- (If not already imported/defined globally)
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  order?: 1 | 2 | 3 | 4 | 5 | 6; // Allow setting heading level
}
function SectionTitle({ title, subtitle, order = 2 }: SectionTitleProps) {
  const theme = useMantineTheme();
  return (
    <Stack align="center" gap="sm" mb={{ base: "lg", sm: "xl" }}>
      <Title
        order={order} // Use passed order
        tt="uppercase"
        ta="center"
        fz={{ base: rem(28), sm: rem(34) }} // Adjust size as needed
      >
        {title}
      </Title>
      <Divider size="sm" w={rem(60)} color={theme.primaryColor} />
      {subtitle && (
        <Text ta="center" c="dimmed" fz="lg" maw={rem(800)}>
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}

// --- Main About Page Component ---
export default function AboutPage() {
  const theme = useMantineTheme();

  const surgicalProcedures = [
    "Percutaneous Nephrolithotomy (PCNL)", // Added acronym
    "Retrograde Intrarenal Surgery (RIRS) using Laser", // Added acronym
    "Transurethral Prostate Surgery (e.g., TURP, Laser Vaporization/Enucleation)", // Examples
    "Endourethral surgery",
    "Laparoscopic Surgery",
    "Complex Urethral and Ureteric Reconstruction",
    "Prostate, Bladder, and Kidney Cancer Treatment",
    "Neobladder Reconstruction and Continent Catherizable Stoma Construction",
    "Sex Reassignment and Intersex Surgeries",
    "Repair of Congenital Anomalies",
    "Ultrasound Guided Transrectal Prostate Biopsy and Kidney Biopsy",
    "Kidney Transplant",
    "Plasmapheresis",
    "Many other general and specialized urological and uro-gynaecological procedures",
  ];

  const workshopProcedures = [
    "Percutaneous Nephrolithotomy (PCNL)",
    "Percutaneous kidney stone surgery (likely same as PCNL, clarification needed?)", // Check for duplication
    "Laser surgery for Kidney and Ureteric stones (RIRS)",
    "Complex reconstructive operations",
  ];

  const objectivesList = [
    "Establishment of disease registries and population-based studies to accurately define the magnitude of problems posed by Urologic, Urogynaecologic and kidney diseases, requiring governmental, institutional and global support.",
    "Conduct basic research in the biology of prostate and bladder cancer in the tropics, immunology of kidney transplantation in blacks and their response to immunosuppressive transplant therapy.",
    "Conduct applied Research and Epidemiological studies on Urological and Kidney disorders in low-resource settings; and develop innovative & optimal care strategies and protocols.",
    "Training of medical, paramedical, community health and nursing staff to address the insufficiency and maldistribution of healthcare personnel including Urologists, Urogynaecologist, Nephrologist, Nurses and other relevant allied health workers.",
    "Provision of evidence-based and global standard of clinical care to our teeming patients with Urological, Urogynaecologic and kidney problems. These include kidney Transplantation, modern Urologic surgeries and difficult Vesicovaginal fistula procedures.",
    "To research and develop expertise in minimally invasive treatment for urinary stone and prostate diseases.",
    "To become a world-class facility in Nigeria that can provide a citadel for both industry and grant-funded clinical studies and trials.",
  ];

  return (
    <Box>
      {" "}
      {/* Main wrapper */}
      {/* Vision & Mission Section */}
      <Container size="lg" py="xl">
        <Grid gutter="xl">
          {/* Vision Card */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder shadow="sm" padding="xl" radius="md" h="100%">
              <Stack>
                <Title order={3} c={theme.primaryColor}>
                  Vision
                </Title>
                <Text c="dimmed" lh={1.6}>
                  To be an international centre of excellence for promotion of
                  research, invention, manpower development and state-of-the-art
                  treatment of common Urologic, Uro-gynaecologic and kidney
                  disorders.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
          {/* Mission Card */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder shadow="sm" padding="xl" radius="md" h="100%">
              <Stack>
                <Title order={3} c={theme.primaryColor}>
                  Mission
                </Title>
                <Text c="dimmed" lh={1.6}>
                  To conduct research, pursue manpower development and advance
                  the frontiers of knowledge via training and retraining and
                  render services of international standard to the teeming
                  population of Urology, Urogynaecology and kidney disorder
                  patients and clientele.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      {/* Background & History Section */}
      <Container size="xl" py="xl">
        <Grid gutter={{ base: "lg", md: "xl" }} align="center">
          {" "}
          {/* Center items vertically */}
          {/* Image Column */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            {" "}
            {/* Slightly smaller image column */}
            <Image
              src={about}
              alt="About the Institute of Urology and Nephrology"
              radius="md"
            />
          </Grid.Col>
          {/* Text Column */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              <Title order={2}>Background and History</Title>
              <Text lh={1.7} style={{ textAlign: "justify" }}>
                {" "}
                {/* Justify text */}
                The Centre was established by the University, through a TetFund
                grant, as a Urology and Nephrology Complex of international
                standard that will provide a forum for research and invention,
                manpower development and treatment of common Urologic,
                Uro-gynaecologic and Renal diseases prevalent in the sub-region.
                The institute was commissioned on the 12th of July 2014 and has
                been equipped for Phase one Urologic training and services.
              </Text>
              <Text lh={1.7} style={{ textAlign: "justify" }}>
                It is designed to meet the felt needs of Urology and Nephrology
                practice in Nigeria and North-Western Nigeria in particular. In
                collaboration with existing National and International Centres
                of excellence, it shall provide a unique platform for research
                and manpower development. COVID-19 exposed obvious weaknesses in
                our health care research and services.
              </Text>
              <Text lh={1.7} style={{ textAlign: "justify" }}>
                Specialized medical training abroad and surgical tourism cannot
                continue as usual. The Centre is being equipped to strengthen
                its ability to provide the needed training, research and
                specialized service in Urology, Uro-gynaecology and sustainable
                Kidney Transplantation.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      {/* Surgical Procedures Section */}
      <Container size="xl" py="xl">
        <SectionTitle title="Surgical Procedures" order={2} />
        <Grid gutter={{ base: "lg", md: "xl" }}>
          {/* List Column */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            {/* Use Mantine List for proper semantics and styling */}
            <List
              spacing="sm"
              size="md" // List item size
              icon={
                <ThemeIcon color={theme.primaryColor} size={20} radius="xl">
                  <IconCircleCheck
                    style={{ width: rem(12), height: rem(12) }}
                  />
                </ThemeIcon>
              }
            >
              {surgicalProcedures.map((procedure, index) => (
                <List.Item key={index}>{procedure}</List.Item>
              ))}
              {/* Highlight new procedures if needed */}
              {/* <List.Item
                         icon={ <ThemeIcon color="teal" size={20} radius="xl"><IconStar style={{ width: rem(12), height: rem(12) }} /></ThemeIcon> }
                         c="teal.7" fw={600}
                     >
                         Kidney Transplant (NEW)
                     </List.Item> */}
            </List>
          </Grid.Col>
          {/* Image Column */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={features}
              alt="Surgical Procedures at the Centre"
              radius="md"
              h={{ base: 300, sm: 450, md: "100%" }} // Responsive height
              fit="cover"
            />
          </Grid.Col>
        </Grid>

        {/* Important Notice */}
        <Alert
          icon={<IconInfoCircle size="1rem" />}
          title="Service Availability Notice"
          color="yellow" // Use a notice color
          radius="md"
          mt="xl" // Margin top
          variant="light" // Or filled/outline
        >
          You may need to contact us directly to determine if a specific
          procedure is temporarily affected by our ongoing reorganization and
          facility upgrades.
        </Alert>
      </Container>
      {/* Training Accreditation & Workshop Section */}
      <Container size="lg" py="xl">
        {" "}
        {/* Constrain width for text */}
        <Stack gap="lg">
          <Text lh={1.7}>
            The centre is accredited for residency training in Urology and
            Nephrology by the National and West African Postgraduate Medical
            Colleges. On the 27th and 28th of November 2018, a workshop was
            organized by the Institute that attracted seventy-seven (77)
            Urologists from all over the country to participate in the following
            operations, many of which were hitherto not available in any public
            Hospital in Nigeria, reducing the need for international training
            for these procedures:
          </Text>
          {/* Workshop Procedures List */}
          <List
            spacing="xs"
            size="sm" // Slightly smaller list
            icon={
              <ThemeIcon color="gray" size={18} radius="xl">
                <IconCircleCheck style={{ width: rem(10), height: rem(10) }} />
              </ThemeIcon>
            }
            withPadding // Indent list
            pl="lg" // Add left padding
          >
            {workshopProcedures.map((proc, index) => (
              <List.Item key={index}>{proc}</List.Item>
            ))}
          </List>

          <Text lh={1.7}>
            The centre has now been upgraded to the TETFund Centre of Excellence
            in Urology and Nephrology. This will enable the centre to pursue its
            mission on research, manpower development, and advancing the
            frontiers of knowledge via training and rendering services of
            international standard to the teeming population of Urology,
            Urogynaecology and Kidney disorder patients. The Centre plans
            research to address National Development Challenges and to commence
            Workshops, Seminars, Short courses, MSc, PhD programmes, and to
            integrate Fellowship training with MSc/PhD. Training of Nephrology
            Nurses, Urology Nurses and Dialysis Nurses and Technicians will also
            commence soon.
          </Text>
        </Stack>
      </Container>
      {/* Objectives Section */}
      <Container size="lg" py="xl">
        {" "}
        {/* Constrain width for list */}
        <Title order={2} mb="lg">
          {" "}
          {/* Section title */}
          Objectives
        </Title>
        <Stack gap="md">
          {objectivesList.map((objective, index) => (
            <Group key={index} wrap="nowrap" align="flex-start" gap="sm">
              <ThemeIcon
                color={theme.primaryColor}
                variant="light"
                size="lg"
                radius="xl"
              >
                <IconCircleCheck style={{ width: "70%", height: "70%" }} />
              </ThemeIcon>
              <Text fz="md" lh={1.6} style={{ flex: 1 }}>
                {objective}
              </Text>
            </Group>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
