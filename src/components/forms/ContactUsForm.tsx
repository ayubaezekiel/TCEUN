import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput, Textarea } from "@mantine/core";
import { useForm } from "react-hook-form";

const schema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  specialization: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  doctor: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  mobileNumber: z
    .string()
    .min(11, {
      message: "Username must be at least 2 characters.",
    })
    .max(11, { message: "Username must be at least 2 characters." }),
});

export const ContactUsForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      doctor: "",
      mobileNumber: "",
      specialization: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <TextInput placeholder="Full Name" />

          <TextInput placeholder="Email" />
          <TextInput placeholder="Phone Number" />

          <TextInput placeholder="Subject" />

          <Textarea placeholder="Type your message here" />
        </div>
        <div className="flex justify-end mt-8">
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </div>
  );
};
