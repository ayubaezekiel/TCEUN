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
<h3 className="font-bold text-md mt-4 text-red-600">In Collaboration with Zenith Medical and Kidney Centre, Abuja</h3>
<p>PROGRAMME OF EVENT</p>
<li>Arrival of Guest 09:30am</li>
<li>Arrival of Dignitaries 09:45am</li>
<li>Opening Prayer 10:00 – 10:05am</li>
<li>Introduction of Dignitaries 10:05 – 10:10am</li>
<li>Opening Remarks by the Chairman 10:10 – 10:15am Prof. Riskuwa A. Shehu OON</li>
<li>Welcome Address and Brief about the Centre by Director
Prof. I.A. Mungadi 10:15 – 10:35am</li>
<li>Virtual Tour of Theatre and ICU by 10:35 – 10:55am
Prof. Abdulwahab Ahmed</li>
<li>Remarks by Chief Medical Director, UDUTH
Prof. Anas Sabir 10:55 – 11:00am</li>
<li>Remarks by Vice Chancellor, UDUS
Prof. Bashiru Garba, OFR 11:00 – 11:10am</li>
<li>Good will message by MD Zenith Medical and Kidney Centre, Abuja
Dr. Olatise O. Olalekan 11:10 – 11:15am</li>
<li>Remarks by E.S TETFund
Arc. Sonny S.T Echono 11:15 – 11:20am</li>
<li>Remarks by the Sultan of Sokoto
Alhaji Muhammad Sa’ad Abubakar III, CFR, mni 11:20 – 11:25am</li>
<li>Remarks by the Executive Governor of Kebbi State
Comrade (Dr.) Mohammed Nasiru Idris
(Kauran Gwandu) 11:25 – 11:35am</li>
<li>Remarks by the Executive Governor of Zamfara State
Dr. Dauda Lawal Dare 11:35 – 11:45am</li>
<li>Remarks by the Executive Governor of Sokoto State 11:45 – 11:55am
Dr. Ahmad Aliyu Sokoto FCNA</li>
<li>Vote of Thanks by
Transplant Ethics Committee Chairman and Chairman-MAC UDUTH
Prof. Usman Muhammad Sani 11:55 – 12:00pm</li>
<li>Closing Prayer 12:00pm</li>
<h4 className="font-bold text-xl mt-4 text-red-600"> DATE: 4th Fabruary, 2025</h4>
{/* <h3>Admission Requirement: Registered Nurse with Bachelor of Nursing Sciences Qualification (BNSc or BSc)</h3>
<h4>To apply Visit: www.pg.udusok.edu.ng</h4> */}
<h5>Time: 10:00 am</h5>

       
          <span className="font-bold text-xl text-red-500">
          VENUE: TETFund Centre of Ecellence Conference Hall, UDUTH
          </span>
        </div>
      </Container>
    </div>
  );
}
