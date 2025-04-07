import {
  Button,
  Grid,
  Group,
  rem,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates"; // <-- Import DatePickerInput
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import dayjs from "dayjs"; // dayjs is a peer dependency for @mantine/dates
import { useState } from "react";

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // <--- PASTE YOUR FORM ID HERE

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mantine form hook
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      // Use null for Date object, or string if preferred for submission consistency
      appointmentDate: null as Date | null, // Store as Date object
      department: "",
      service: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^\+?[0-9\s-()]{10,}$/.test(value) // Slightly better phone regex
          ? null
          : "Please enter a valid phone number",
      // Validate Date object presence
      appointmentDate: (value) =>
        value ? null : "Please select an appointment date",
      department: (value) => (value ? null : "Please select a department"),
      // Service validation remains optional based on requirement
      // service: (value) => (value ? null : "Please select a service"),
      message: (value) =>
        value.trim().length > 5 ? null : "Message should be more detailed",
    },
  });

  // Handle form submission
  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true);
    const submissionId = notifications.show({
      // Get ID to update later
      id: `submitting-appointment-${Date.now()}`, // Unique ID just in case
      loading: true,
      title: "Submitting Appointment",
      message: "Please wait while we send your request...",
      autoClose: false,
      withCloseButton: false,
    });

    // Format date for submission if needed (e.g., YYYY-MM-DD)
    const submissionData = {
      ...values,
      appointmentDate: values.appointmentDate
        ? dayjs(values.appointmentDate).format("YYYY-MM-DD") // Format for backend/Formspree
        : "",
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData), // Send formatted data
      });

      if (response.ok) {
        notifications.update({
          id: submissionId, // Use the stored ID
          color: "teal",
          title: "Appointment Submitted!",
          message:
            "Thank you! We have received your request and will contact you shortly.",
          icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
          loading: false,
          autoClose: 6000,
          withCloseButton: true,
        });
        form.reset(); // Clear the form
      } else {
        // Handle Formspree error response
        let errorMessage =
          "Submission failed. Please check details and try again.";
        try {
          const errorData = await response.json();
          if (errorData?.errors?.length > 0) {
            errorMessage = errorData.errors
              .map((err: { message?: string }) => err.message || "Field error")
              .join(", ");
          } else if (errorData?.error) {
            errorMessage = errorData.error;
          }
        } catch {
          /* Ignore parsing error */
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      notifications.update({
        id: submissionId, // Use the stored ID
        color: "red",
        title: "Submission Error",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
        icon: <IconX style={{ width: rem(18), height: rem(18) }} />,
        loading: false,
        autoClose: 8000,
        withCloseButton: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Note: Wrap this form in a <Container> or <Paper p="md"> in its parent component
  // to ensure good padding on all screen sizes, especially mobile.
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg">
        {" "}
        {/* Good vertical spacing for mobile stacking */}
        <Grid gutter="md">
          {" "}
          {/* Spacing between columns when side-by-side */}
          {/* --- Row 1: Name, Email, Phone, Date --- */}
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <TextInput
              withAsterisk
              label="Full Name"
              placeholder="Your full name"
              size="md"
              radius="md"
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <TextInput
              withAsterisk
              label="Email Address"
              placeholder="your@email.com"
              size="md"
              radius="md"
              type="email"
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <TextInput
              withAsterisk
              label="Phone Number"
              placeholder="+234 ..."
              size="md"
              radius="md"
              type="tel"
              {...form.getInputProps("phone")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            {/* ** Improved Date Picker ** */}
            <DatePickerInput
              withAsterisk
              label="Preferred Date"
              placeholder="Pick date"
              size="md"
              radius="md"
              valueFormat="YYYY-MM-DD" // Display format
              minDate={new Date()} // Prevent selecting past dates
              clearable // Allow clearing the date
              {...form.getInputProps("appointmentDate")}
            />
          </Grid.Col>
        </Grid>
        {/* --- Row 2: Department, Service --- */}
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              withAsterisk
              label="Department"
              placeholder="Select department"
              data={["UROLOGY", "NEPHROLOGY", "UROGYNAECOLOGY"]} // Add more as needed
              size="md"
              radius="md"
              searchable
              nothingFoundMessage="No department found"
              maxDropdownHeight={280} // Limit height on mobile
              {...form.getInputProps("department")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label="Service (Optional)"
              placeholder="Select service"
              data={[
                "CONSULTATION",
                "FOLLOW-UP",
                "ENDOURETHRAL SURGERY",
                "INTERNAL SURGERY (LASER)",
                "KIDNEY TRANSPLANT EVALUATION", // Clarified
                "LAPAROSCOPIC SURGERY",
                "PERCUTANEOUS NEPHROLITHOTOMY (PCNL)", // Full name
                "RETROGRADE INTRARENAL SURGERY (RIRS)", // Full name example
                "REPAIR OF CONGENITAL ANOMALIES",
                "OTHER",
              ]}
              size="md"
              radius="md"
              searchable
              clearable
              nothingFoundMessage="No service found"
              maxDropdownHeight={280} // Limit height on mobile
              {...form.getInputProps("service")}
            />
          </Grid.Col>
        </Grid>
        {/* --- Message Area --- */}
        <Textarea
          label="Additional Message" // Optional: Make required if needed
          placeholder="Please provide any relevant details, reason for appointment, or specific concerns..."
          autosize
          minRows={4} // Slightly smaller minRows might be okay
          size="md"
          radius="md"
          {...form.getInputProps("message")}
        />
        {/* --- Submission Button --- */}
        <Group justify="center" mt="lg">
          {" "}
          {/* Centered button is good for mobile */}
          <Button
            variant="filled" // Default variant
            color="teal" // Theme color example
            type="submit"
            size="lg" // Good touch target size
            radius="xl" // Friendly rounded look
            loading={isSubmitting}
            loaderProps={{ type: "oval" }}
          >
            Request Appointment
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
