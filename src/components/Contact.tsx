import { Button, Select, TextInput, Textarea } from "@mantine/core";

export default function ContactForm() {
  return (
    <div className="text-gray-600 bg-cyan-500/10 p-4">
      <div className="flex justify-center flex-col">
        <h1 className="uppercase mt-10 text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
          MAKE AN APPOINTMENT
        </h1>
        <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4" />
        <p className="text-center text-gray-700 font-normal text-xl mb-6">
          In an emergency? Book an appointment with us
        </p>
      </div>

      <form className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <TextInput className="w-full" placeholder="Full Name" size="lg" />
            <TextInput className="w-full" placeholder="Email" size="lg" />
            <TextInput
              className="w-full"
              placeholder="Phone Number"
              size="lg"
              type="number"
            />
            <TextInput
              className="w-full"
              placeholder="Appointment Date"
              type="date"
              size="lg"
            />
          </div>
          <div className="flex gap-4">
            <Select
              className="w-full"
              data={["UROLOGY", "NEPHROLOGY", "UROGYNAECOLOGY"]}
              placeholder="Department"
              size="lg"
            />
            <Select
              className="w-full"
              data={[
                "ENDOURETHRAL SURGERY",
                "INTERNAL SURGERY (LASER)",
                "KIDNEY TRANSPLANT",
                "LAPAROSCOPIC SURGERY",
                "PERCUTANEOUS NEPHROLITHOTOMY",
                "RETROGRADE URETERIC",
                "REPAIR OF CONGENITAL ANOMALIES",
              ]}
              placeholder="Service"
              size="lg"
            />
          </div>
          <Textarea
            autosize
            minRows={10}
            size="lg"
            placeholder="Additional Message"
          />
        </div>
        <div className="flex justify-center">
          <Button mt={20} radius={"xl"}>
            Make an Appointment
          </Button>
        </div>
      </form>
    </div>
  );
}
