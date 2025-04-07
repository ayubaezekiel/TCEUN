import {
  Box,
  Container,
  Divider,
  Stack, // Use Stack for vertical layout
  Text,
  Title, // Show loading state
  rem,
  useMantineTheme,
} from "@mantine/core";
import { AppointmentForm } from "./forms/AppointmentForm";

export default function ContactForm() {
  const theme = useMantineTheme();

  return (
    // Section background and padding
    <Box
      py={{ base: "lg", sm: "xl" }}
      mt="xl"
      bg={theme.colors.cyan[7]}
      c={"dark"}
    >
      <Container size="lg">
        {/* Title Section */}
        <Stack align="center" gap="sm" mb={{ base: "lg", sm: "xl" }}>
          <Title
            order={1}
            tt="uppercase"
            ta="center"
            fz={{ base: rem(28), sm: rem(38) }}
          >
            Make An Appointment
          </Title>
          <Divider size="sm" w={rem(60)} color={theme.primaryColor} />
          <Text ta="center" c="dark" fz="lg" maw={rem(600)}>
            Need assistance or have an urgent query? Schedule your appointment
            with us today.
            {/* Updated subtitle */}
          </Text>
        </Stack>

        {/* Form */}
        {/* Use Mantine form's onSubmit handler */}
        <AppointmentForm />
      </Container>
    </Box>
  );
}
