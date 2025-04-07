import {
  Box, // Use Box for background and padding
  Button,
  Container, // To constrain content width
  Stack, // For vertical layout and centering
  Text,
  Title,
  useMantineTheme, // Access theme colors/spacing
  rem, // For responsive units
} from "@mantine/core";
import { Link } from "react-router-dom"; // Assuming you use react-router-dom

export function EmergencySection() {
  const theme = useMantineTheme();

  return (
    <Box
      // Use a prominent theme color, e.g., primary color or a specific blue/cyan
      // bg={theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background}
      bg={theme.colors.cyan[7]} // Or use theme.colors.blue[7], etc.
      c="white" // Set default text color to white for contrast
      py={{ base: rem(50), sm: rem(70) }} // Responsive vertical padding
      mt="xl" // Margin top from the previous section (adjust as needed)
    >
      <Container size="md">
        {" "}
        {/* Constrain content width for readability */}
        <Stack align="center" gap="lg">
          {" "}
          {/* Center content vertically */}
          <Title
            order={2} // Appropriate heading level
            ta="center" // Text align center
            fz={{ base: "xl", sm: rem(38) }} // Responsive font size
            fw={700} // Bold font weight
            lh={1.2} // Adjust line height
          >
            In An Emergency? <br />
            {/* Use Text span for the smaller subtitle part */}
            <Text
              component="span" // Render as span inline
              fz="lg" // Smaller font size for subtitle
              fw={400} // Normal font weight
              // Use a slightly dimmed white or keep it bright white
              // c={theme.colors.gray[2]}
            >
              Need help now?
            </Text>
          </Title>
          <Text
            ta="center"
            size="lg" // Readable size for paragraph
            maw={rem(700)} // Max width to prevent lines becoming too long
            opacity={0.9} // Slightly less prominent than the title
            lh={1.6} // Good line height for readability
          >
            Please contact us directly for urgent matters or to confirm service
            availability during our ongoing facility upgrades and renovations.
            {/* Reworded slightly for clarity */}
          </Text>
          <Button
            component={Link}
            to="/appointment" // Update link if necessary (e.g., /contact)
            variant="outline"
            color="white" // Mantine handles border color correctly for outline white
            size="lg" // Make the button prominent
            radius="xl" // Modern rounded look
            mt="md" // Margin top for spacing
          >
            Make an Appointment
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
