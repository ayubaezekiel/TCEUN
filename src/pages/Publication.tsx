import { Paper, Table } from "@mantine/core";

const elements = [
  {
    journal:
      "Bull of Natl Res Cent 2022; 46: 32(ISSN 2522-8307),doi.org/10.1186/s42269-022-00720-4,Impact Factor - 3.",

    authors: [
      {
        name: "Khalid A",
      },
      {
        name: " Abdulwahab-Ahmed A",
      },
      {
        name: "Mungadi IA.",
      },
      {
        name: "Kabiru A",
      },
      {
        name: "Agwu NP",
      },
      {
        name: "Muhammad AS",
      },
    ],
  },
  {
    journal:
      "Clinical Presentation of Prostatic Disease Patients in a Hospital Setting. Annals of Basic and Medical Sciences 2022; 3(1) ,208-214(ISSN 2782-7542) doi.org/10.51658/ABMS.202231.8",
    authors: [{ name: "" }],
  },
  { journal: 88.906, authors: [{ name: "" }] },
  { journal: 137.33, authors: [{ name: "" }] },
  { journal: 140.12, authors: [{ name: "" }] },
  { journal: 12.011, authors: [{ name: "" }] },
  { journal: 14.007, authors: [{ name: "" }] },
  { journal: 88.906, authors: [{ name: "" }] },
  { journal: 137.33, authors: [{ name: "" }] },
  { journal: 140.12, authors: [{ name: "" }] },
  { journal: 12.011, authors: [{ name: "" }] },
  { journal: 14.007, authors: [{ name: "" }] },
  { journal: 88.906, authors: [{ name: "" }] },
  { journal: 137.33, authors: [{ name: "" }] },
  { journal: 140.12, authors: [{ name: "" }] },
  { journal: 12.011, authors: [{ name: "" }] },
  { journal: 14.007, authors: [{ name: "" }] },
  { journal: 88.906, authors: [{ name: "" }] },
  { journal: 137.33, authors: [{ name: "" }] },
  { journal: 140.12, authors: [{ name: "" }] },
  { journal: 12.011, authors: [{ name: "" }] },
  { journal: 14.007, authors: [{ name: "" }] },
  { journal: 88.906, authors: [{ name: "" }] },
  { journal: 137.33, authors: [{ name: "" }] },
  { journal: 140.12, authors: [{ name: "" }] },
  { journal: 12.011, authors: [{ name: "" }] },
  { journal: 14.007, authors: [{ name: "" }] },
  { journal: 88.906, authors: [{ name: "" }] },
  { journal: 137.33, authors: [{ name: "" }] },
  { journal: 140.12, authors: [{ name: "" }] },
  { journal: 12.011, authors: [{ name: "" }] },
  { journal: 14.007, authors: [{ name: "" }] },
  { journal: 88.906, authors: [{ name: "" }] },
  { journal: 137.33, authors: [{ name: "" }] },
  { journal: 140.12, authors: [{ name: "" }] },
];
function PubTable() {
  const rows = elements.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>
        {element.authors.map((a) => (
          <div>{a.name}</div>
        ))}
      </Table.Td>
      <Table.Td>
        <div>{element.journal}</div>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper p={10} shadow="md">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>SN</Table.Th>
            <Table.Th>Author(s)</Table.Th>
            <Table.Th>Paper</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Paper>
  );
}

export default function PublicationPage() {
  return (
    <div>
      <div className=" grid grid-cols-2 p-2 bg-cyan-100 ">
        <h1 className="text-lg font-bold">Publications</h1>
        <h1 className=" text-right text-lg">Home / Publications</h1>
      </div>
      <div className="flex justify-center flex-col my-24">
        <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
          Recent Publications
        </h1>
        <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        <p className="text-center text-gray-700 font-normal text-xl">
          2021 TO 2023
        </p>
      </div>
      <div>
        <PubTable />
        <p></p>
        <p>
          2. Khalid Abdullahi, Mungadi I. Arzika, Agwu N. Peter,
          Abdulwahab-Ahmed Abdullah, Muhammad A. Sadiq, Kabiru Abdullahi, Adamu
          Habibullah.
        </p>
        <p>
          3. EU Oyibo, A Khalid, AS Muhammad, NP Agwu, A Abdulwahab-Ahmed, IA
          Mungadi.Comparison of Serum Microseminoprotein-Beta (MSMB) with Total
          Prostate Specific Antigen (TPSA) in the Diagnosis of Prostate Cancer
          in African Men. International Journal of Innovative Science and
          Research Technology 2022; 8: 1471-77(ISSN No:-2456-2165), SJIF Impact
          Factor - 7.176{" "}
        </p>
        <p>
          4. Onwuasoanya UE, Mungadi IA, Agwu NP, Abdulwahab-Ahmed A, Abdullahi
          K, Muhammad AS, Abdullahi K. Histological pattern of bladder cancer at
          a tertiary hospital in North Western Nigeria: an update. Int Surg J
          2022;9:1114-8.(ISSN: 2349-3305), DOI: 10.18203/2349-2902.isj20221398,
        </p>
        <p>
          5. Abubakar Sadiq Muhammad, Abubakar Ibrahim Umar, Olusegun Goerge
          Obadele, Abdullahi Umar Adoke, Abdullahi Khalid, Umar Amina Gambo.
          Acute Appendicitis Post Ureteroneocystostomy for Uretero-Vaginal
          Fistula Causing Diagnostic Dilemma. Annals of Urology & Nephrology 3
          (2), 2022, (ISSN: 2692-532X) DOI: 10.33552/AUN.2022.03.000558
          <p>
            6. O Erhabor, AM Hussaini, A Abdulwahab-Ahmed, M Retsky, T Erhabor.
            Some Oxidative Stress Biomarkers among Patients with Prostate Cancer
            in Sokoto, North Western Nigeria. Open Journal of Blood Diseases 12
            (3), 60-78 (ISSN Online: 2164-3199), DOI: 10.4236/ojbd.2022.123007,
            Impact Factor: 0.56
          </p>
          7. OU Emmanuel, AS Muhammad, NP Agwu, A Abdulwahab-Ahmed. Clinical
          value of urine nuclear matrix protein 22 (NMP22) quantitative test in
          the diagnosis of bladder cancer in a schistosoma endemic region.
          International Surgery Journal 9 (10), 1681-1688, (ISSN: 2349-3305),
          doi: 10.18203/2349-2902.isj20222591
        </p>
        <p>
          {" "}
          8. Agwu Ngwobia Peter, Umar Ahmed Mohammed, Oyibo Ugbede Emmanuel.
          Urethral catheters and catheterization techniques. Nigerian journal of
          medicine 2022; 31: 497-508, (ISSN: 2667-0526),
          DOI:10.4103/NJM.NJM_99_21,
        </p>
        <p>
          {" "}
          9. Abdullahi Khalid, Abdullah Abdulwahab-Ahmed, Abubakar Sadiq
          Muhammad, Gamdu Jesini, Ngwobia Peter Agwu, Isma'ila Arzika Mungadi,
          An enigma: case series of vesical calculi from prolonged and neglected
          indwelling catheter, Journal of Surgical Case Reports, Volume 2023,
          Issue 1, January 2023, rjad018, (ISSN 2042-8812),
          doi.org/10.1093/jscr/rjad018, Impact Factor. 0.5.{" "}
        </p>
        <p>
          10. Abdullahi Khalid, Abdullahi Alhassan, James Oche Ejembi, Abdullahi
          Abdulwahab-Ahmed. Atypical presentation of vesicouterine fistula
          (Youssef’s syndrome) post-caesarean gossypiboma: a case report.
          Urogynaecologia 2023; 35:305 (ISSSN 1121-3086),
          doi:10.4081/uij.2023.305, Impact IF - 0.107,{" "}
        </p>
        <p>
          11. EU Oyibo, MA Umar, K Abdullahi, SA Muhammad, PN Agwu.
          Clinicopathological Correlates of Patients with Prostate Cancer in a
          Tertiary Hospital in Northwestern Nigeria: Patients with Prostate
          Cancer. Orient Journal of Medicine 35 (1-2), 1-10. (ISSN: 1115-0521),
          doi.org/10.5281/zenodo.7126985,
        </p>
        <p>
          12. EU Oyibo, A Khalid, AS Muhammad, NP Agwu. Genitourinary
          Complications of Schistosomiasis. International Journal of Medical
          Science and Dental Research 2023; 6(2): 01-20. (ISSN: 2581-902X),{" "}
        </p>
        <p>
          13. Khalid A, Nasiru M, Abdulwahab-Ahmed A, Muhammad AS, Agwu NP,
          Lukong CS. Phallic rubber band application to prevent enuresis unusual
          cause of urethral stricture in a child: A case report. World J Clin
          Urol 2023; 12(2): 10-16 ISSN. (2219-2816),
          DOI:https://dx.doi.org/10.5410/wjcu.v12.i2.10{" "}
        </p>
        <p>
          14. Khalid A. Single-Staged Surgical Treatment of PUJO in A
          Resource-Limited Setting: An Opinion. J Urol Nephrol 2023, 8(3):
          000241. (ISSN: 2578-4676) DOI: 10.23880/oajun-16000241, Impact Factor-
          2.091
        </p>
        <p>
          15. Khalid Abdullahi, Yahaya Abubakar, Obadele Olusegun George, Oyibo
          Ugbede Emmanuel, Agwu Ngwobia Peter, Abdulwahab-Ahmed Abdullah.
          Primary reconstruction of bladder neck transection and vaginal
          laceration post blunt abdominal injury: a case report. J Urol Nephrol
          2023, 8(3): 000242. (ISSN: 2578-4676) DOI: 10.23880/oajun-16000242,
          Impact Factor- 2.091{" "}
        </p>
        <p>
          16. Khalid A. West Africa Sub-Regional Training and Skills Transfer:
          Experience at the Genitourinary Division of the Korle Bu Teaching
          Hospital, Accra, Ghana. Soc Int Urol J 2021; 2 (1): 7-. (ISSN
          2563-6499){" "}
        </p>
        <p>
          17. Mungadi IA, Khalid A. Spectrum of urological cases in a West
          African Tertiary Hospital. Ann Afr Med 2021;20:14-8. (ISSN 1596-3519){" "}
        </p>
        <p>
          18. Garba Haruna Yunusa, Aminu Umar Kaoje, Akintunde Taiwo Orunmuyi,
          Stuart S More, Zabah Muhammad Jawa, Khalid Abdullahi. Comparison of
          99mTc-PSMA SPECT/CT and 68Ga-PSMA PET/CT in patients with Prostate
          cancer: A protocol for systematic review and meta-analysis. Egypt J
          Radiol Nucl Med 2021, 52:179. doi.org/10.1186/s43055-021-
        </p>
        <p>
          19. Abubakar Sadiq Muhammad, Haruna Usman Kamba, Abubakar Isyaku,
          Abdullahi Khalid. Medical expulsive therapy symptomatic aggravation in
          blind right orthotopic ureterocoele and contralateral impacted
          ureteral meatus stones: A Case Report. International Journal of
          Science and Research Archive 2021; 03(02), 183–187. doi:
          10.30574/ijsra.2021.3.2.0163 (ISSN: 2582-8185){" "}
        </p>
        <p>
          20. Muhammad AS, Agwu NP, Abdullahi Abdulwahab-Ahmed, Onwuasoanya UE,
          Abdullahi Khalid, Olusegun George Obadele, Mungadi IA. Spectrum and
          Management of Urological Emergencies at Tertiary Hospital of
          Northwestern Nigeria. J Med Bas Sci Res 2021;2(1):65-70. i (ISSN: - )
          Accepted for publication{" "}
        </p>
        <p>
          21. Liman, H.M., Makusidi, M.A., Sakajiki, A.M., Ishaku, H.J., Shehu,
          Y.A., Yusuf, A.A. Challenges in the management of kidney transplant
          recipients in a centre without a kidney transplant program: A single
          centre experience. Res. J. Health Sci. Vol 9(1), January/March 2021.
          eISSN: 2467-8252, print ISSN: 2360-7793
        </p>
        <p>
          22. Fidelis Oguejiofor, Daniel S. Kiggundu, Aminu K. Bello, Charles R.
          Swanepoel, Gloria Ashuntantang, Vivekanand Jha, David C.H. Harris,
          Adeera Levin, Marcello Tonelli, Abdou Niang, Nicola Wearne, Mothusi
          Walter Moloi, Ifeoma Ulasi, Fatiu A. Arogundade, Syed Saad, Deenaz
          Zaidi, Mohamed A. Osman, Feng Ye, Meaghan Lunney, Timothy O.
          Olanrewaju, Udeme Ekrikpo, Theophilus I. Umeizudike, Aliyu Abdu, Aisha
          M. Nalado, Muhammad Aliyu Makusidi, Hamidu M. Liman, Aminu Sakajiki,
          Hassane M. Diongole, Maryam Khan, Mohammed Benghanem Gharbi, David W.
          Johnson and Ikechi G. Okpechi; on behalf of the ISN Africa Regional
          Board. International Society of Nephrology Global Kidney Health Atlas:
          structures, organization, and services for the management of kidney
          failure in Africa. Kidney Int. Supplements (2021) 11, e11–e23. ISSN
          (print)-0085-2538, ISSN (online)- 1523-1755{" "}
        </p>
        <p>
          23. Sulaiman Rabiu , Muazu Gusau Abubakar , Danladi Mahuta Sahabi ,
          Muhammad Aliyu Makusidi , Abdullahi Dandare and Jaafar Haris Bello.
          Benzoic Acid Based Beverages: Health Implications. Asian Food Science
          Journal 20(4): 93-105, 2021; Article no. AFSJ.65947 ISSN: 2581-7752{" "}
        </p>
        <p>
          {" "}
          24. Liman HM, Sakajiki AM, Makusidi MA, Isah IB, Ahmed FU, Galadima M,
          Yeldu M. Public–private partnership in hemodialysis in Nigeria: A
          comparative analysis of renal centers across three Northwestern
          states. Ann Afr Med 2021; 20:121-6. (ISSN 1596-3519)
        </p>
        <p>
          25. Desalu OO, Adeoti AO, Makusidi MA, Fadare JO, Aremu GO, Amao EA,
          et al. Family physicians/GP and Internist opinions, familiarity and
          practice behaviour regarding clinical practice guidelines(CPGs) of
          common medical conditions in Nigeria. J Family Med Prim Care 2021; 10:
          502-8. ISSN- 2766-8460
        </p>
        <p>
          26. Christopher Esezobor, Adebowale D. Ademola, Adewale E. Adetunji,
          Emmanuel A. Anigilaje,Anthony Batte, Fatima N. Jiya-Bello, Francis F.
          Furia, Uzoamaka Muoneke, Mignon McCulloch,Peter Nourse, Patience
          Obiagwu, Odutola Odetunde, Perditer Okyere, Adaobi Solarin,Elliot K.
          Tannor, Damien Noone, Rasheed Gbadegesin, Rulan S. Parekh and the
          Human Hereditary and Health in Africa Kidney Disease Research Network.
          Management of idiopathic childhood nephritic syndrome in sub-Saharan
          Africa: Ibadan consensus statement. Kidney Int. (2021) 99, 59–67. ISSN
          (print)-0085-2538, ISSN (online)- 1523-1755
        </p>
        <p>
          {" "}
          27. Uzodimma E. Onwuasoanya1*, Ismaila A. Mungadi2, Ngwobia P. Agwu2,
          Abdullahi Abdulwahab-Ahmed2, Kabiru Abdullahi3, Abubakar S. Muhammad2,
          Khalid Abdullahi2. DOI:
          https://dx.doi.org/10.18203/2349-2902.isj20221398 International
          Surgery Journal Onwuasoanya UE et al. Int Surg J. 2022
          Jun;9(6):1114-1118 http://www.ijsurgery.com{" "}
        </p>
        <p>
          28. Abubakar Sadiq Muhammad1*, Abubakar Ibrahim Umar2, Olusegun Goerge
          Obadele1, Abdullahi Umar Adoke3, Abdullahi Khalid1 and Umar Amina
          Gambo3 Acute Appendicitis Post Ureteroneocystostomy for
          Uretero-Vaginal Fistula Causing Diagnostic Dilemma: A Rare Case Report
          DOI: 10.33552/AUN.2022.03.000558 ISSN: 2692-532X
        </p>
        <p>
          29. Khalid Abdullahi¹, Mungadi I. Arzika¹, Agwu N. Peter¹,
          Abdulwahab-Ahmed Abdullah¹,Muhammad A. Sadiq¹, Kabiru Abdullahi²,
          Adamu Habibullah³ Clinical Presentation of Prostatic Disease Patients
          in a Hospital Setting https://www.abms.udusok.org
          doi.org/10.51658/ABMS.202231.8 ISSN: 2782-7550 (Print) ISSN: 2782-7542
          (Online){" "}
        </p>
        <p>
          {" "}
          30. Abdullahi Khalid, Ahmed Mohammed Umar, Abdullah Abdulwahab-Ahmed,
          Abubakar Sadiq Muhammad, Ngwobia Peter Agwu, Ismaila A. Mungadi,
          Post-operative Vesicoenterocutaneous Fistula with Multiple Intestinal
          Knotting: A Case Report www.jwacs-jcoac.org DOI:
          10.4103/jwas.jwas_78_22{" "}
        </p>
        <p>
          {" "}
          31. AS Muhammad,* NP Agwu, A Abdulwahab-Ahmed, A Khalid, UE
          Onwuasoanya, I A Mungadi. Pattern of Presentation and Management of
          Varicocele in a Tertiary Hospital in Northwestern Nigeria
          https://doi.org/10.46912/jmbsr.xx http://www.jmbsr.com.ng{" "}
        </p>
        <p>
          32. Abdullahi Khalid1* , Abdullah Abdulwahab‑Ahmed1, Ismaila Arzika
          Mungadi1, Kabiru Abdullahi2, Ngwobia Peter Agwu1 and Abubakar Sadiq
          Muhammad1 Schistosomiasis of the Prostate in Sokoto, Nigeria: a case
          series Bulletin of the National Research Centre (2022)
          46:32https://doi.org/10.1186/s42269-022-00720-4{" "}
        </p>
      </div>
    </div>
  );
}
