import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput, Textarea, Stack, Group } from "@mantine/core"; // Import Stack/Group
import { useForm } from "react-hook-form";
import { notifications } from "@mantine/notifications"; // Import notifications
import { IconCheck, IconX } from "@tabler/icons-react"; // Icons for notifications

// --- Configuration ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // <-- REPLACE WITH YOUR ACTUAL FORMSPREE ENDPOINT

// --- Zod Schema (Matching the Form Fields) ---
const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address").trim(),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number seems too short")
    .max(15, "Phone number seems too long")
    .optional() // Make phone optional, remove .optional() if required
    .or(z.literal("")), // Allow empty string if optional
  subject: z.string().trim().min(5, "Subject must be at least 5 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

// Define the type based on the schema
type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading indicator

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "", // Initialize optional field too
      subject: "",
      message: "",
    },
  });

  // --- Form Submission Handler ---
  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true); // Start loading indicator

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // Formspree recommends this header
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Success Notification
        notifications.show({
          title: "Message Sent!",
          message: "Thanks for reaching out. We'll get back to you soon.",
          color: "teal",
          icon: <IconCheck size="1.1rem" />,
          autoClose: 5000,
        });
        form.reset(); // Clear the form on success
      } else {
        // Handle non-OK HTTP responses (e.g., 4xx, 5xx)
        const errorData = await response.json().catch(() => ({})); // Try to parse error, default to empty object
        console.error(
          "Formspree submission error:",
          response.status,
          errorData
        );
        notifications.show({
          title: "Submission Error",
          message: `Something went wrong (Status: ${response.status}). Please try again later or contact us directly.`,
          color: "red",
          icon: <IconX size="1.1rem" />,
          autoClose: 7000,
        });
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      console.error("Network or other error during submission:", error);
      notifications.show({
        title: "Error Sending Message",
        message:
          "A network error occurred. Please check your connection and try again.",
        color: "red",
        icon: <IconX size="1.1rem" />,
        autoClose: 7000,
      });
    } finally {
      setIsSubmitting(false); // Stop loading indicator regardless of outcome
    }
  }

  return (
    // No need for an extra div wrapper usually
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stack gap="md">
        {" "}
        {/* Use Mantine Stack for vertical spacing */}
        <TextInput
          label="Full Name"
          placeholder="John Doe"
          withAsterisk // Mark required fields
          {...form.register("fullName")} // Register field with react-hook-form
          error={form.formState.errors.fullName?.message} // Display validation errors
          disabled={isSubmitting} // Disable during submission
        />
        <TextInput
          label="Email Address"
          placeholder="you@example.com"
          type="email" // Use correct input type
          withAsterisk
          {...form.register("email")}
          error={form.formState.errors.email?.message}
          disabled={isSubmitting}
        />
        <TextInput
          label="Phone Number (Optional)"
          placeholder="+1 234 567 8900"
          type="tel" // Use telephone input type
          {...form.register("phone")}
          error={form.formState.errors.phone?.message}
          disabled={isSubmitting}
        />
        <TextInput
          label="Subject"
          placeholder="Regarding..."
          withAsterisk
          {...form.register("subject")}
          error={form.formState.errors.subject?.message}
          disabled={isSubmitting}
        />
        <Textarea
          label="Your Message"
          placeholder="Type your message here..."
          withAsterisk
          minRows={4} // Suggest minimum rows
          {...form.register("message")}
          error={form.formState.errors.message?.message}
          autosize // Allows textarea to grow
          disabled={isSubmitting}
        />
      </Stack>

      {/* Use Mantine Group for button alignment */}
      <Group justify="flex-end" mt="xl">
        <Button type="submit" loading={isSubmitting}>
          {" "}
          {/* Show loading state */}
          Send Message
        </Button>
      </Group>
    </form>
  );
};
