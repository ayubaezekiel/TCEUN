import { Container } from "@mantine/core";

export default function ContactUs() {
  return (
    <div>
      <div className=" grid grid-cols-2 p-2 bg-cyan-100 ">
        <h1 className="text-lg font-bold">About Us</h1>
        <h1 className=" text-right text-lg">Home / About Us</h1>
      </div>
      <Container size={"xl"}>
        <div className="my-10">
          <h1 className="text-4xl text-gray-600 text-center uppercase font-bold">
            Contact Us
          </h1>
          <div className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></div>
        </div>
      </Container>
    </div>
  );
}
