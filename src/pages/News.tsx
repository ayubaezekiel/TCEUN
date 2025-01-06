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
      
         <h1 className="font-bold text-xl text-center mt-4 text-slate-600"> INSTITUTE OF UROLOGY AND NEPHROLOGY
TETFUND CENTRE OF EXCELLENCE IN UROLOGY
AND NEPHROLOGY </h1><h1 className="font-bold text-xl mt-4text-center text-slate-600">
USMANU DANFODIYO UNIVERSITY, SOKOTO</h1>
<h3 className="font-bold text-md mt-4 text-red-600">POST GRADUATE DIPLOMA IN UROLOGY NURSING 2024/2025 ADMISSION</h3>
<p>Applications are invited from suitable qualified candidate for
admission into post Graduate Diploma in Urology Nursing:</p>
<h4 className="font-bold text-xl mt-4 text-red-600">Africa’s First Professional Urology Nursing
Programme</h4>
<h3>Admission Requirement: Registered Nurse with Bachelor of Nursing Sciences Qualification (BNSc or BSc)</h3>
<h4>To apply Visit: www.pg.udusok.edu.ng</h4>
<h5>For Further Inquiries contact +234 8035304008<br/>
Email: tce-un@udusok.edu.ng</h5>

       
          <span className="font-bold text-xl text-red-500">
          Registration Deadline: 31st January, 2025
          </span>
        </div>
      </Container>
    </div>
  );
}
