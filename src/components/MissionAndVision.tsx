import {
  Card,
  Container, // For consistent width and padding
  Grid, // For responsive layout
  Group, // Could use Paper instead of Card if preferred
  rem, // For responsive units
  Stack, // For vertical layout if needed
  Text, // For descriptive text
  ThemeIcon, // To give icons a nice background
  Title,
} from "@mantine/core";
import { IconDna2, IconEyeBolt } from "@tabler/icons-react";

// Optional: Import CSS module if created
import classes from "../assets/css/MissionVision.module.css";

export function MissionAndVision() {
  return (
    <Container size="lg" py="xl">
      {" "}
      {/* Control max-width and add vertical padding */}
      <Grid gutter="xl">
        {" "}
        {/* Add spacing between columns */}
        {/* Vision Card */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          {" "}
          {/* Full width on base, half on sm+ */}
          <Card
            shadow="md" // Use Mantine shadows
            padding="xl" // Use Mantine padding scale
            radius="md" // Use Mantine radius scale
            withBorder // Add a subtle border
            h="100%" // Ensure cards have the same height in the grid row
            // Optional: Add hover class if using CSS Module
            className={classes.cardHover}
          >
            <Stack gap="md">
              {" "}
              {/* Vertical layout inside the card */}
              <Group gap="lg">
                {" "}
                {/* Group icon and title */}
                <ThemeIcon
                  size={rem(60)} // Adjust size as needed
                  radius="md"
                  variant="light" // Or "filled", "gradient"
                  color="blue" // Use theme colors
                >
                  <IconEyeBolt
                    style={{ width: "60%", height: "60%" }}
                    stroke={1.5}
                  />
                </ThemeIcon>
                <Title order={2} fz="xl">
                  {" "}
                  {/* Control heading level and size */}
                  Vision
                </Title>
              </Group>
              <Text c="dimmed" size="md" lh={1.6}>
                {" "}
                {/* Dimmed color for description, adjust line-height */}
                To be an international centre of excellence for promotion of
                research, invention, manpower development and state-of-the-art
                treatment of common Urologic, Uro-gynaecologic and kidney
                disorders.
              </Text>
            </Stack>
          </Card>
        </Grid.Col>
        {/* Mission Card */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            h="100%"
            // Optional: Add hover class if using CSS Module
            className={classes.cardHover}
          >
            <Stack gap="md">
              <Group gap="lg">
                <ThemeIcon
                  size={rem(60)}
                  radius="md"
                  variant="light"
                  color="teal" // Different theme color for Mission
                >
                  <IconDna2
                    style={{ width: "60%", height: "60%" }}
                    stroke={1.5}
                  />
                </ThemeIcon>
                <Title order={2} fz="xl">
                  Mission
                </Title>
              </Group>
              <Text c="dimmed" size="md" lh={1.6}>
                To conduct research, pursue manpower development and advance the
                frontiers of knowledge via training and retraining and render
                services of international standard to the teeming population of
                Urology, Urogynaecology and kidney disorder patients and
                clientele.
              </Text>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
