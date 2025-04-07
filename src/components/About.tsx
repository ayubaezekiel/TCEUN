import {
  Anchor, // Use Box for simple wrappers if needed
  Container, // Controls max-width and padding
  Divider, // For the underline effect
  Grid, // For responsive column layout
  Group, // For horizontal alignment (icon + text)
  Image, // Mantine Image component
  rem, // For responsive units
  Stack, // For vertical layout and spacing
  Text, // For paragraphs and general text
  ThemeIcon, // To style icons consistently
  Title, // For semantic headings
  useMantineTheme,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom"; // Keep react-router Link

// Assuming image import is correct
import about from "../assets/images/about.jpg";

export function About() {
  const theme = useMantineTheme();

  // Define the list items for easier mapping
  const objectivesList = [
    "Establishment of disease registries and population-based studies to accurately define the magnitude of problems posed by Urologic, Urogynaecologic and kidney diseases, requiring governmental, institutional and global support.",
    "Conduct basic research in the biology of prostate and bladder cancer in the tropics, immunology of kidney transplantation in blacks and their response to immunosuppressive transplant therapy.",
    // Add more objectives here if needed
  ];

  return (
    // Use Container for consistent padding and max-width, add vertical spacing
    <Container size="xl" py={{ base: "lg", sm: rem(80) }}>
      {/* Title Section */}
      <Stack align="center" gap="sm" mb={{ base: "lg", sm: "xl" }}>
        <Title
          order={1} // Main heading for the section
          tt="uppercase" // text-transform: uppercase
          ta="center" // text-align: center
          fz={{ base: rem(28), sm: rem(38) }} // Responsive font size
        >
          About Us
        </Title>
        <Divider
          size="sm"
          w={rem(60)} // Width of the divider
          color={theme.primaryColor} // Use theme color
        />
        <Text
          ta="center"
          c="dimmed" // Dimmed text color
          fz="lg" // Font size
          maw={rem(800)} // Max width for readability
        >
          TETFund Centre of Excellence in Urology and Nephrology (TCE-UN) <br />
          Institute of Urology and Nephrology, Usmanu Danfodiyo University,
          Sokoto, Nigeria
        </Text>
      </Stack>

      {/* Main Content Grid */}
      <Grid gutter={{ base: "lg", md: "xl" }}>
        {" "}
        {/* Responsive gutter */}
        {/* Image Column */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          {" "}
          {/* Full width below md, half width md+ */}
          <Image
            src={about}
            alt="About TETFund Centre of Excellence in Urology and Nephrology"
            radius="md" // Add border radius
            // Consider adding a caption or shadow if desired
            // shadow="sm"
          />
        </Grid.Col>
        {/* Text/Objectives Column */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg">
            {" "}
            {/* Vertical spacing for content in this column */}
            <Title order={2} fz="xl" c="gray.8">
              {" "}
              {/* Subheading */}
              Objectives
            </Title>
            {/* Italicized Intro Paragraph */}
            <Text component="blockquote" c="dimmed" fz="lg" lh={1.6}>
              The Centre was established by the University, through a TetFund
              grant, as a Urology and Nephrology Complex of international
              standard that will provide a forum for research and invention,
              manpower development and treatment of common Urologic,
              Uro-gynaecologic and Renal diseases prevalent in the sub-region.
            </Text>
            {/* Objectives List */}
            <Stack gap="md">
              {objectivesList.map((objective, index) => (
                <Group key={index} wrap="nowrap" align="flex-start" gap="sm">
                  {/* Icon */}
                  <ThemeIcon
                    color={theme.primaryColor} // Use theme color
                    variant="light" // Or "filled"
                    size="lg"
                    radius="xl" // Circular icon background
                  >
                    <IconCircleCheck style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  {/* Text */}
                  <Text fz="md" lh={1.6} style={{ flex: 1 }}>
                    {" "}
                    {/* Allow text to take remaining space */}
                    {objective}
                  </Text>
                </Group>
              ))}
            </Stack>
            {/* Read More Link */}
            <Anchor
              component={Link}
              to="/about" // Ensure this links to the correct detailed about page
              fz="lg" // Match text size if desired
              fw={500}
              mt="md" // Add some margin top
            >
              Read More...
            </Anchor>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
