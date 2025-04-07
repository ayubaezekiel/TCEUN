import {
  ActionIcon, // For social media icons
  Anchor, // For themed links
  Box,
  Container,
  Divider,
  Group, // For horizontal layout (e.g., social icons)
  rem, // For responsive units
  SimpleGrid, // For responsive grid layout
  Stack, // For vertical layout
  Text, // For text elements
  Title, // For section headings
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
// --- Image Imports --- (Ensure paths are correct)
import agwu from "../assets/images/agwu.jpg";
import CMD from "../assets/images/CMD.jpg";
import director from "../assets/images/director.jpg";
import makusidi from "../assets/images/Dr Makusidi A.M.png";
import ibrahim from "../assets/images/ibrahim.jpg";
import bello from "../assets/images/MB Bello.jpg";
import khalid from "../assets/images/My Passport 20-01-2021.jpg";
import nasiru from "../assets/images/nasiru sahabi.jpg";
import maaji from "../assets/images/unnamed.jpg";
import VC from "../assets/images/VC.jpg";

// --- Assuming StaffCard Component is imported ---
// Make sure StaffCard is adapted to work well within Mantine grids/layout
// Example minimal StaffCard props based on usage:
interface StaffCardProps {
  image: string;
  name: string;
  title: string;
  note: string;
  Socials?: React.ReactNode; // Render prop for flexibility
  notVc?: boolean; // Prop from original code
}
// If StaffCard is NOT from your project, you'll need to create it or adapt a Mantine Card
// import { StaffCard } from "../pages/Index"; // Assuming path
// Placeholder StaffCard if needed for testing:
const StaffCard = ({ image, name, title, note, Socials }: StaffCardProps) => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      textAlign: "center",
    }}
  >
    <img
      src={image}
      alt={name}
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        objectFit: "cover",
        margin: "0 auto 10px",
      }}
    />
    <h3 style={{ margin: "5px 0", fontSize: "1.1rem" }}>{name}</h3>
    <p style={{ margin: "2px 0", fontSize: "0.9rem", color: "#555" }}>
      {title}
    </p>
    <p style={{ margin: "5px 0 10px", fontSize: "0.8rem", color: "#777" }}>
      {note}
    </p>
    {Socials && <div>{Socials}</div>}
  </div>
);

// --- Data Arrays ---
const boardMembers = [
  {
    image: VC,
    name: "Prof L S Bilbis",
    title: "VC. Usmanu Danfodiyo University",
    note: "BSc(UDUS) PhD(ESSEX), Proffessor of Protein Chemistry/Enzymology",
  },
  {
    image: CMD,
    name: "Dr. A. A. Sabir",
    title: "CMD. Usmanu Danfodiyo University Teaching Hospital",
    note: "MBBS(UDUS) FMCP",
  },
];

const principalOfficers = [
  {
    image: director,
    name: "Prof Ismaila Arzika Mungadi",
    title: "Director",
    note: "MBBS(UDUS), FRCSEd, FWACS, FMAS, Cert Endourol",
  },
  {
    image: bello,
    name: "Dr. Muhammad Bashir Bello",
    title: "Research Officer",
    note: "DVM, MSc, PhD",
  },
  {
    image: nasiru,
    name: "Mallam Nasiru Sahabi",
    title: "Docummentation Officer",
    note: ".......",
  },
  {
    image: ibrahim,
    name: "Malam Ibrahim Lawal",
    title: "Admin Officer",
    note: "BSc",
  },
];

const clinicalStaff = [
  {
    image: maaji,
    name: "Prof Sadisu Mohammed Maaji",
    title: "Radiolgist",
    note: "MBBS, FMCR, FWACS, FAIMER, Cert Endourol",
  },
  {
    image: makusidi,
    name: "Prof. Makusidi A.M",
    title: "Prof.of Medicine & Consultant Physician/Nephrolologist",
    note: "MBBS(UDUS), FMCP(Nig)",
  },
  {
    image: agwu,
    name: "Prof. Ngwobia Peter Agwu",
    title: "Consultant Urologist",
    note: "MBBS, FRCSEd",
  },
  {
    image: khalid,
    name: "Dr. Abdullahi Khalid",
    title: "Consultant Urological Surgeon",
    note: "MBBS, FWACS",
  },
];

// --- Reusable Section Title ---
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const theme = useMantineTheme();
  return (
    <Stack align="center" gap="sm" mb={{ base: "lg", sm: "xl" }}>
      <Title
        order={1}
        tt="uppercase"
        ta="center"
        fz={{ base: rem(28), sm: rem(38) }}
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

// --- Reusable Social Icons ---
// Example social links (replace # with actual URLs if available)
const SocialIcons = () => (
  <Group gap="sm" mt="sm" justify="center">
    <ActionIcon
      component="a"
      href="#"
      variant="subtle"
      color="gray"
      size="lg"
      radius="xl"
    >
      <IconBrandFacebook style={{ width: "60%", height: "60%" }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon
      component="a"
      href="#"
      variant="subtle"
      color="gray"
      size="lg"
      radius="xl"
    >
      <IconBrandTwitter style={{ width: "60%", height: "60%" }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon
      component="a"
      href="#"
      variant="subtle"
      color="gray"
      size="lg"
      radius="xl"
    >
      <IconBrandLinkedin style={{ width: "60%", height: "60%" }} stroke={1.5} />
    </ActionIcon>
  </Group>
);

// --- Main Component ---
export function BoardOfDirectors() {
  return (
    // Use Box or Fragment, Container is used within each section
    <Box py="xl">
      {/* Board of Directors Section */}
      <Container size="lg">
        {" "}
        {/* Use lg for wider sections like this */}
        <SectionTitle title="Board of Directors" />
        {/* Center the 2 board members */}
        <SimpleGrid
          cols={{ base: 1, sm: 2 }} // 1 column base, 2 on sm+
          spacing="xl"
          // Limit width and center if needed, adjust max width as desired
          style={{ maxWidth: rem(800), margin: "0 auto" }}
        >
          {boardMembers.map((member) => (
            <StaffCard
              key={member.name}
              {...member}
              Socials={<SocialIcons />} // Pass Socials component
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* Our Staff Section (Principal Officers) */}
      <Container size="xl" mt={rem(80)}>
        {" "}
        {/* Add top margin */}
        <SectionTitle
          title="Our Staff"
          subtitle="Meet Our Principal Officers"
        />
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }} // Responsive columns
          spacing="xl"
          verticalSpacing="xl"
        >
          {principalOfficers.map((officer) => (
            <StaffCard
              key={officer.name}
              {...officer}
              notVc // Pass the prop from original data if StaffCard uses it
              Socials={<SocialIcons />}
            />
          ))}
        </SimpleGrid>
        {/* View More Link */}
        <Group justify="flex-end" mt="lg">
          <Anchor component={Link} to="/team" fz="lg" fw={500}>
            View All Staff...
          </Anchor>
        </Group>
      </Container>

      {/* Clinical Staff Section */}
      <Container size="xl" mt={rem(80)}>
        {" "}
        {/* Add top margin */}
        <SectionTitle
          title="Clinical Staff"
          subtitle="Meet Our Renowned Clinical Officers"
        />
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }} // Responsive columns
          spacing="xl"
          verticalSpacing="xl"
        >
          {clinicalStaff.map((staff) => (
            <StaffCard
              key={staff.name}
              {...staff}
              notVc // Pass the prop from original data if StaffCard uses it
              Socials={<SocialIcons />}
            />
          ))}
        </SimpleGrid>
        {/* View More Link */}
        <Group justify="flex-end" mt="lg">
          <Anchor component={Link} to="/team" fz="lg" fw={500}>
            View All Staff...
          </Anchor>
        </Group>
      </Container>
    </Box>
  );
}
