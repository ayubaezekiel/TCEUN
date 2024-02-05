import { Container } from "@mantine/core";
import { PageBreadcrumbs } from "../components/Breadcrumbs";

export default function news() {
  return (
    <div>
      <PageBreadcrumbs
        currentUrl={[
          { href: "/", title: "Home" },
          { href: "/news/", title: "News/Events" },
        ]}
        title="News/Events"
      />
      <Container size={"xl"}>
        <div className="flex justify-center flex-col my-24">
          <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
            Up Coming Events
          </h1>
          <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
          <p className="font-bold text-xl text-slate-600">
            Workshop On Genito-urinary Reconstructions
          </p>
          <span className="font-bold text-xl text-red-500">
            Date: June 2024
          </span>
        </div>
      </Container>
    </div>
  );
}
