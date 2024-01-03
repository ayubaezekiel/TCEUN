import { Button, Container, Select, TextInput, Textarea } from "@mantine/core";

export default function ContactForm() {
  return (
    <div className="my-14 text-gray-600 bg-cyan-500/10 py-10">
      <div className="flex justify-center flex-col my-24">
        <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
          MAKE AN APPOINTMENT
        </h1>
        <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        <p className="text-center text-gray-700 font-normal text-xl">
          In an emergency? Book an appointment with us
        </p>
      </div>
      <Container size={"xl"}>
        <form action="">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <TextInput className="w-full" placeholder="Full Name" size="lg" />
              <TextInput className="w-full" placeholder="Email" size="lg" />
              <TextInput
                className="w-full"
                placeholder="Phone Number"
                size="lg"
                type="number"
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="w-full"
                placeholder="Appointment Date"
                type="date"
                size="lg"
              />
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
      </Container>
    </div>
  );
}
