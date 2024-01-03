import { Container } from "@mantine/core";
import about from "../assets/images/about.jpg";
import { IconCircleCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="my-14">
      <div className="flex justify-center flex-col">
        <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
          About Us
        </h1>
        <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        <p className="text-center text-gray-700 font-normal text-xl">
          TETFund Centre of Excellence in Urology and Nephrology(TCE-UN) <br />
          Institute of Urology and Nephrology, Danfodiyo University , Sokoto,
          Nigeria
        </p>
      </div>
      <Container size={"xl"}>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div>
            <img src={about} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-600 mb-4">
              Objectives
            </h1>
            <article className="mb-4 text-xl text-gray-600">
              <i>
                The Centre was established by the University, through a TetFund
                grant, as a Urology and Nephrology Complex of international
                standard that will provide a forum for research and invention,
                manpower development and treatment of common Urologic,
                Uro-gynaecologic and Renal diseases prevalent in the sub-region{" "}
              </i>
            </article>
            <div className="space-y-4">
              <div className="flex">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-xl text-gray-600">
                  Establishment of disease registries and population-based
                  studies to accurately define the magnitude of problems posed
                  by Urologic, Urogynaecologic and kidney diseases, requiring
                  governmental, institutional and global support
                </p>
              </div>
              <div className="flex">
                <span>
                  <IconCircleCheck className="h-8 w-8 text-cyan-500" />
                </span>
                <p className="text-xl text-gray-600">
                  Conduct basic research in the biology of prostate and bladder
                  cancer in the tropics, immunology of kidney transplantation in
                  blacks and their response to immunosuppressive transplant
                  therapy
                </p>
              </div>
            </div>
            <div className="mt-8 hover:text-cyan-600 text-xl text-gray-600">
              <Link to={""}>Read More</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
