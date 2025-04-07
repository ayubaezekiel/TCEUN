import { Container } from "@mantine/core";
import { Facility } from "../components/Facilities";
import { Gallery } from "../components/Gallery";

export default function GalleryPage() {
  return (
    <div>
      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-24">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            GALLERY
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
          <p className="text-center text-gray-700 font-normal text-xl">
            Here is some of our Facilities
          </p>
        </div>
        <Facility />
      </Container>
      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-24">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            Here is some of our collection of our pictures
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        </div>
        <Gallery />
      </Container>
    </div>
  );
}
