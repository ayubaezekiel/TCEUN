import { Paper, Table } from "@mantine/core";

import {
  Container, // Added
  Divider, // Added
  Stack, // Added
  Text, // Added
  Title, // Added
  useMantineTheme,
} from "@mantine/core";
const elements = [
  {
    journal:
      "Bull of Natl Res Cent 2022; 46: 32(ISSN 2522-8307),doi.org/10.1186/s42269-022-00720-4,Impact Factor - 3.",

    authors: [
      {
        name: "Khalid A, Abdulwahab-Ahmed A, Mungadi IA., Kabiru A, Agwu NP, Muhammad AS",
      },
    ],
  },
  {
    journal:
      "Clinical Presentation of Prostatic Disease Patients in a Hospital Setting. Annals of Basic and Medical Sciences 2022; 3(1) ,208-214(ISSN 2782-7542) doi.org/10.51658/ABMS.202231.8",
    authors: [
      {
        name: "Khalid Abdullahi, Mungadi I. Arzika, Agwu N. Peter, Abdulwahab-Ahmed Abdullah, Muhammad A. Sadiq, Kabiru Abdullahi, Adamu Habibullah.",
      },
    ],
  },
  {
    journal:
      "Comparison of Serum Microseminoprotein-Beta (MSMB) with Total Prostate Specific Antigen (TPSA) in the Diagnosis of Prostate Cancer in African Men. International Journal of Innovative Science and Research Technology 2022; 8: 1471-77(ISSN No:-2456-2165), SJIF Impact Factor - 7.176",
    authors: [
      {
        name: "EU Oyibo, A Khalid, AS Muhammad, NP Agwu, A Abdulwahab-Ahmed, IA Mungadi.",
      },
    ],
  },
  {
    journal:
      "Histological pattern of bladder cancer at a tertiary hospital in North Western Nigeria: an update. Int Surg J 2022;9:1114-8.(ISSN: 2349-3305), DOI: 10.18203/2349-2902.isj20221398,",
    authors: [
      {
        name: "Onwuasoanya UE, Mungadi IA, Agwu NP, Abdulwahab-Ahmed A, Abdullahi K, Muhammad AS, Abdullahi K.",
      },
    ],
  },
  {
    journal:
      "Acute Appendicitis Post Ureteroneocystostomy for Uretero-Vaginal Fistula Causing Diagnostic Dilemma. Annals of Urology & Nephrology 3 (2), 2022, (ISSN: 2692-532X) DOI: 10.33552/AUN.2022.03.000558",
    authors: [
      {
        name: "Abubakar Sadiq Muhammad, Abubakar Ibrahim Umar, Olusegun Goerge Obadele, Abdullahi Umar Adoke, Abdullahi Khalid, Umar Amina Gambo.",
      },
    ],
  },
  {
    journal:
      "Some Oxidative Stress Biomarkers among Patients with Prostate Cancer in Sokoto, North Western Nigeria. Open Journal of Blood Diseases 12(3), 60-78 (ISSN Online: 2164-3199), DOI: 10.4236/ojbd.2022.123007, Impact Factor: 0.56",
    authors: [
      {
        name: "O Erhabor, AM Hussaini, A Abdulwahab-Ahmed, M Retsky, T Erhabor.",
      },
    ],
  },
  {
    journal:
      "Clinical value of urine nuclear matrix protein 22 (NMP22) quantitative test in the diagnosis of bladder cancer in a schistosoma endemic region. International Surgery Journal 9 (10), 1681-1688, (ISSN: 2349-3305), doi: 10.18203/2349-2902.isj20222591",
    authors: [
      { name: "OU Emmanuel, AS Muhammad, NP Agwu, A Abdulwahab-Ahmed." },
    ],
  },
  {
    journal:
      "Urethral catheters and catheterization techniques. Nigerian journal of medicine 2022; 31: 497-508, (ISSN: 2667-0526), DOI:10.4103/NJM.NJM_99_21",
    authors: [
      {
        name: "Agwu Ngwobia Peter, Umar Ahmed Mohammed, Oyibo Ugbede Emmanuel.",
      },
    ],
  },
  {
    journal:
      "An enigma: case series of vesical calculi from prolonged and neglected indwelling catheter, Journal of Surgical Case Reports, Volume 2023, Issue 1, January 2023, rjad018, (ISSN 2042-8812), doi.org/10.1093/jscr/rjad018, Impact Factor. 0.5.",
    authors: [
      {
        name: "Abdullahi Khalid, Abdullah Abdulwahab-Ahmed, Abubakar Sadiq Muhammad, Gamdu Jesini, Ngwobia Peter Agwu, Isma'ila Arzika Mungadi",
      },
    ],
  },
  {
    journal:
      "Atypical presentation of vesicouterine fistula (Youssef’s syndrome) post-caesarean gossypiboma: a case report. Urogynaecologia 2023; 35:305 (ISSSN 1121-3086), doi:10.4081/uij.2023.305, Impact IF - 0.107",
    authors: [
      {
        name: "Abdullahi Khalid, Abdullahi Alhassan, James Oche Ejembi, Abdullahi Abdulwahab-Ahmed",
      },
    ],
  },
  {
    journal:
      "Clinicopathological Correlates of Patients with Prostate Cancer in a Tertiary Hospital in Northwestern Nigeria: Patients with Prostate Cancer. Orient Journal of Medicine 35 (1-2), 1-10. (ISSN: 1115-0521), doi.org/10.5281/zenodo.7126985",
    authors: [
      { name: "EU Oyibo, MA Umar, K Abdullahi, SA Muhammad, PN Agwu." },
    ],
  },
  {
    journal:
      "Genitourinary Complications of Schistosomiasis. International Journal of Medical Science and Dental Research 2023; 6(2): 01-20. (ISSN: 2581-902X)",
    authors: [{ name: "EU Oyibo, A Khalid, AS Muhammad, NP Agwu. " }],
  },
  {
    journal:
      "Phallic rubber band application to prevent enuresis unusual cause of urethral stricture in a child: A case report. World J Clin Urol 2023; 12(2): 10-16 ISSN. (2219-2816), DOI:https://dx.doi.org/10.5410/wjcu.v12.i2.10",
    authors: [
      {
        name: "Khalid A, Nasiru M, Abdulwahab-Ahmed A, Muhammad AS, Agwu NP, Lukong CS.",
      },
    ],
  },
  {
    journal:
      "Single-Staged Surgical Treatment of PUJO in A Resource-Limited Setting: An Opinion. J Urol Nephrol 2023, 8(3):  000241. (ISSN: 2578-4676) DOI: 10.23880/oajun-16000241, Impact Factor- 2.091",
    authors: [{ name: "Khalid A. " }],
  },
  {
    journal:
      "Primary reconstruction of bladder neck transection and vaginallaceration post blunt abdominal injury: a case report. J Urol Nephrol 2023, 8(3): 000242. (ISSN: 2578-4676) DOI: 10.23880/oajun-16000242, Impact Factor- 2.091",
    authors: [
      {
        name: "Khalid Abdullahi, Yahaya Abubakar, Obadele Olusegun George, Oyibo Ugbede Emmanuel, Agwu Ngwobia Peter, Abdulwahab-Ahmed Abdullah.",
      },
    ],
  },
  {
    journal:
      "West Africa Sub-Regional Training and Skills Transfer:  Experience at the Genitourinary Division of the Korle Bu Teaching Hospital, Accra, Ghana. Soc Int Urol J 2021; 2 (1): 7-. (ISSN 2563-6499)",
    authors: [{ name: "Khalid A. " }],
  },
  {
    journal:
      "Spectrum of urological cases in a West African Tertiary Hospital. Ann Afr Med 2021;20:14-8. (ISSN 1596-3519)",
    authors: [{ name: "Mungadi IA, Khalid A. " }],
  },
  {
    journal:
      "Comparison of 99mTc-PSMA SPECT/CT and 68Ga-PSMA PET/CT in patients with Prostate cancer: A protocol for systematic review and meta-analysis. Egypt J sRadiol Nucl Med 2021, 52:179. doi.org/10.1186/s43055-021-",
    authors: [
      {
        name: "Garba Haruna Yunusa, Aminu Umar Kaoje, Akintunde Taiwo Orunmuyi, Stuart S More, Zabah Muhammad Jawa, Khalid Abdullahi. ",
      },
    ],
  },
  {
    journal:
      "Medical expulsive therapy symptomatic aggravation in blind right orthotopic ureterocoele and contralateral impacted ureteral meatus stones: A Case Report. International Journal of Science and Research Archive 2021; 03(02), 183–187. doi: 10.30574/ijsra.2021.3.2.0163 (ISSN: 2582-8185)",
    authors: [
      {
        name: "Abubakar Sadiq Muhammad, Haruna Usman Kamba, Abubakar Isyaku, Abdullahi Khalid.",
      },
    ],
  },
  {
    journal:
      "Spectrum and Management of Urological Emergencies at Tertiary Hospital of Northwestern Nigeria. J Med Bas Sci Res 2021;2(1):65-70. i (ISSN: - ) Accepted for publication",
    authors: [
      {
        name: "Muhammad AS, Agwu NP, Abdullahi Abdulwahab-Ahmed, Onwuasoanya UE Abdullahi Khalid, Olusegun George Obadele, Mungadi IA.",
      },
    ],
  },
  {
    journal:
      "Challenges in the management of kidney transplant recipients in a centre without a kidney transplant program: A single centre experience. Res. J. Health Sci. Vol 9(1), January/March 2021. eISSN: 2467-8252, print ISSN: 2360-7793",
    authors: [
      {
        name: "Liman, H.M., Makusidi, M.A., Sakajiki, A.M., Ishaku, H.J., Shehu, Y.A., Yusuf, A.A. ",
      },
    ],
  },
  {
    journal:
      "International Society of Nephrology Global Kidney Health Atlas: structures, organization, and services for the management of kidney failure in Africa. Kidney Int. Supplements (2021) 11, e11–e23. ISSN (print)-0085-2538, ISSN (online)- 1523-1755",
    authors: [
      {
        name: "Fidelis Oguejiofor, Daniel S. Kiggundu, Aminu K. Bello, Charles R. Swanepoel, Gloria Ashuntantang, Vivekanand Jha, David C.H. Harris, Adeera Levin, Marcello Tonelli, Abdou Niang, Nicola Wearne, Mothusi Walter Moloi, Ifeoma Ulasi, Fatiu A. Arogundade, Syed Saad, Deenaz Zaidi, Mohamed A. Osman, Feng Ye, Meaghan Lunney, Timothy O.Olanrewaju, Udeme Ekrikpo, Theophilus I. Umeizudike, Aliyu Abdu, Aisha M. Nalado, Muhammad Aliyu Makusidi, Hamidu M. Liman, Aminu Sakajiki, Hassane M. Diongole, Maryam Khan, Mohammed Benghanem Gharbi, David W.  Johnson and Ikechi G. Okpechi; on behalf of the ISN Africa Regional Board. ",
      },
    ],
  },
  {
    journal:
      "Benzoic Acid Based Beverages: Health Implications. Asian Food Science Journal 20(4): 93-105, 2021; Article no. AFSJ.65947 ISSN: 2581-7752",
    authors: [
      {
        name: "Sulaiman Rabiu , Muazu Gusau Abubakar , Danladi Mahuta Sahabi , Muhammad Aliyu Makusidi , Abdullahi Dandare and Jaafar Haris Bello.",
      },
    ],
  },
  {
    journal:
      "Public–private partnership in hemodialysis in Nigeria: A comparative analysis of renal centers across three Northwestern states. Ann Afr Med 2021; 20:121-6. (ISSN 1596-3519)",
    authors: [
      {
        name: "Liman HM, Sakajiki AM, Makusidi MA, Isah IB, Ahmed FU, Galadima M, Yeldu M.",
      },
    ],
  },
  {
    journal:
      "Family physicians/GP and Internist opinions, familiarity and practice behaviour regarding clinical practice guidelines(CPGs) of  common medical conditions in Nigeria. J Family Med Prim Care 2021; 10: 502-8. ISSN- 2766-8460",
    authors: [
      {
        name: "Desalu OO, Adeoti AO, Makusidi MA, Fadare JO, Aremu GO, Amao EA, et al.",
      },
    ],
  },
  {
    journal:
      "Management of idiopathic childhood nephritic syndrome in sub-SaharanAfrica: Ibadan consensus statement. Kidney Int. (2021) 99, 59–67. ISSN (print)-0085-2538, ISSN (online)- 1523-1755",
    authors: [
      {
        name: "Christopher Esezobor, Adebowale D. Ademola, Adewale E. Adetunji, Emmanuel A. Anigilaje,Anthony Batte, Fatima N. Jiya-Bello, Francis F. Furia, Uzoamaka Muoneke, Mignon McCulloch,Peter Nourse, Patience Obiagwu, Odutola Odetunde, Perditer Okyere, Adaobi Solarin,Elliot K.Tannor, Damien Noone, Rasheed Gbadegesin, Rulan S. Parekh and the Human Hereditary and Health in Africa Kidney Disease Research Network.",
      },
    ],
  },
  {
    journal:
      "DOI: https://dx.doi.org/10.18203/2349-2902.isj20221398 International Surgery Journal Onwuasoanya UE et al. Int Surg J. 2022 Jun;9(6):1114-1118 http://www.ijsurgery.com",
    authors: [
      {
        name: "Uzodimma E. Onwuasoanya1*, Ismaila A. Mungadi2, Ngwobia P. Agwu2, Abdullahi Abdulwahab-Ahmed2, Kabiru Abdullahi3, Abubakar S. Muhammad2, Khalid Abdullahi2. ",
      },
    ],
  },
  {
    journal:
      "Acute Appendicitis Post Ureteroneocystostomy for Uretero-Vaginal Fistula Causing Diagnostic Dilemma: A Rare Case Report DOI: 10.33552/AUN.2022.03.000558 ISSN: 2692-532X",
    authors: [
      {
        name: "Abubakar Sadiq Muhammad1*, Abubakar Ibrahim Umar2, Olusegun Goerge Obadele1, Abdullahi Umar Adoke3, Abdullahi Khalid1 and Umar Amina Gambo3 ",
      },
    ],
  },
  {
    journal:
      "Clinical Presentation of Prostatic Disease Patients in a Hospital Setting https://www.abms.udusok.org doi.org/10.51658/ABMS.202231.8 ISSN: 2782-7550 (Print) ISSN: 2782-7542 (Online)",
    authors: [
      {
        name: "Khalid Abdullahi¹, Mungadi I. Arzika¹, Agwu N. Peter¹, Abdulwahab-Ahmed Abdullah¹,Muhammad A. Sadiq¹, Kabiru Abdullahi², Adamu Habibullah³",
      },
    ],
  },
  {
    journal:
      "Post-operative Vesicoenterocutaneous Fistula with Multiple Intestinal Knotting: A Case Report www.jwacs-jcoac.org DOI: 10.4103/jwas.jwas_78_22",
    authors: [
      {
        name: "Abdullahi Khalid, Ahmed Mohammed Umar, Abdullah Abdulwahab-Ahmed Abubakar Sadiq Muhammad, Ngwobia Peter Agwu, Ismaila A. Mungadi,",
      },
    ],
  },
  {
    journal:
      "Pattern of Presentation and Management of Varicocele in a Tertiary Hospital in Northwestern Nigeria https://doi.org/10.46912/jmbsr.xx http://www.jmbsr.com.ng",
    authors: [
      {
        name: "AS Muhammad,* NP Agwu, A Abdulwahab-Ahmed, A Khalid, UE Onwuasoanya, I A Mungadi.",
      },
    ],
  },
  {
    journal:
      "Schistosomiasis of the Prostate in Sokoto, Nigeria: a case series Bulletin of the National Research Centre (2022) 46:32https://doi.org/10.1186/s42269-022-00720-4",
    authors: [
      {
        name: "Abdullahi Khalid , Abdullah Abdulwahab‑Ahmed1, Ismaila Arzika  Mungadi, Kabiru Abdullahi, Ngwobia Peter Agwu and Abubakar Sadiq Muhammad",
      },
    ],
  },
  {
    journal:
      "Complications profile following regional anesthesia: Comparative analysis between ankle and unilateral spinal blocks for foot surgery DOI 10.25259/JHSR_42_2023",
    authors: [
      {
        name: "Bashir Garba Aljannare1 , Abdullahi Khalid2 , Aliyu Abdulrahaman1, Ibrahim Galadima Bello1 1Department of Anesthesia and Intensive Care, Usmanu Danfodiyo University Teaching Hospital, 2Department of Surgery, Tetfund Center of Excellence in Urology and Nephrology, Institute of Urology and Nephrology, Usmanu Danfodiyo University and Teaching Hospital, Sokoto, Nigeria",
      },
    ],
  },
  {
    journal:
      "Shattered Kidney: A Fallout of Armed Banditry. doi D 10.30491/hpr.2023.402567.1395 ",
    authors: [
      {
        name: "Abdullahi Khalid 1* , Ibrahim Umar Abubakar 2 , Ahmed Mohammed Umar 1 , Abubakar Sadiq Muhammad 1 , Ngwobia Peter Agwu 1 , Abdullah Abdulwahab-Ahmed 1 1 Tetfund Centre of Excellence in Urology and Nephrology, Institute of Urology and Nephrology, Usmanu Danfodiyo University and Teaching Hospital Sokoto, Nigeria 2 General Surgery Unit, Usmanu Danfodiyo University Teaching Hospital, Sokoto, Nigeria",
      },
    ],
  },
  {
    journal:
      "Scrotal calcinosis cutis an unrelated finding in benign prostatic hyperplasia patient, is treatment sine qua non? A case report. DOI 10.25259/JHSR_29_2023 ",
    authors: [
      {
        name: "Abdullahi Khalid1, Olusegun George Obadele1, Usman Bello2 , Usman Kamba Haruna 1, Abdullah Abdulwahab-Ahmed1 1Department of Surgery, Tetfund Centre of Excellence in Urology and Nephrology, Institute of Urology and Nephrology, 2Morbid Anatomy and Forensic Medicine, College of Health Sciences, Usmanu Danfodio University, Sokoto, Nigeria ",
      },
    ],
  },
  {
    journal:
      "Postoperative pain following ankle block and unilateral subarachnoid block for foot surgeries: A randomised controlled trial. doi: 10.25259/SAJHS_6_2023 ",
    authors: [
      {
        name: "Bashir Garba Aljannare1, Mohammed Bashir Rabi’u2, Alhassan Datti Mohammed3, Abdullahi Khalid4 1Department of Anesthesia and Intensive Care, Usmanu Danfodiyo University Teaching Hospital Sokoto, 2Department of Anesthesia and Intensive Care, Abubakar Tafawa Balewa University Teaching Hospital, Bauchi, 3Anaesthesia and Critical Care, Aminu Kano University Teaching Hospital, Kano, 4Institute of Urology and Nephrology, Usmanu Danfodiyo University and Teaching Hospital, Sokoto.",
      },
    ],
  },
  {
    journal:
      "Hemodynamic Changes Following Regional Anesthesia for Foot Surgeries: A Comparative Study between Ankle Block and Unilateral Subarachnoid Block.www.mkscienceset.com ",
    authors: [
      {
        name: "Bashir Garba Aljannare1* and Khalid Abdullahi2 1Department of Anesthesiology and Intensive Care, Usmanu Danfodiyo University Teaching Hospital Sokoto, Nigeria 2Tetfund Centre of Excellence in Urology and Nephrology, Institute of Urology and Nephrology, Usmanu Danfodiyo University and Teaching Hospital Sokoto, Nigeria",
      },
    ],
  },
  {
    journal:
      "Comparison of serum prostate specific antigen (PSA), soluble E-cadherin (sE-cad), and inosine monophosphate dehydrogenase-2 (IMPDH-2) as aggressive prostate cancer predictors. African Journal of Urology https://doi.org/10.1186/s12301-024-00441-2",
    authors: [
      {
        name: "Ahmed Mohammed Umar1,2* , Ismaila Arzika Mungadi1, Ngwobia Peter Agwu1, Abdullah Abdulwahab Ahmed1, Abubakar Sadiq Muhammad1 and Abdullahi Khalid1  Umar et al",
      },
    ],
  },
  {
    journal:
      "Traumatic penile amputation managed at Usmanu Danfodiyo University Teaching Hospital Sokoto, Nigeria: a case series. https://doi.org/10.1007/s44337-024-00046-2",
    authors: [
      {
        name: "Ahmed Mohammed Umar1,2 · Abubakar Sadiq Muhammad1 · Abdullahi Khalid1 · Augustine Michael1 · Olusegun George Obadele1",
      },
    ],
  },
  {
    journal:
      "Iatrogenic Tube Ileostomy Complicating Blind Percutaneous Cystostomy Managed in Prostate Cancer Patient: A Case Report Downloaded from http://journals.lww.com/jnam. DOI: 10.4103/jnam.jnam_13_23 ",
    authors: [
      {
        name: "Abdullahi Khalid, Ahmed Mohammed Umar, Gamdu Jesini, Abubakar Sadiq Muhammad, Ngwobia Peter Agwu, Abdulwahab-Ahmed Abdullahi Tetfund Centre of Excellence in Urology and Nephrology, Institute of Urology and Nephrology, Usmanu Danfodiyo University and Teaching Hospital, Sokoto, Nigeria ",
      },
    ],
  },
  {
    journal:
      "Assessment of accuracy of clinical blood loss estimation compared to actual blood loss during major surgeries . DOI: 10.25259/IJMS_57_2024",
    authors: [
      {
        name: "Bashir Garba Aljannare1, Abdullahi Khalid2 1Department of Anesthesiology and Intensive Care, Usmanu Danfodiyo University Teaching Hospital Sokoto, 2Department of Surgery, Institute of Urology and Nephrology, Usmanu Danfodiyo University and Teaching Hospital, Sokoto, Nigeria",
      },
    ],
  },
  {
    journal:
      "Intravenous paracetamol-related loss of consciousness at induction of anesthesia: A case report. DOI 10.25259/GJHSR_77_2023 ",
    authors: [
      {
        name: "Abdullahi Khalid1, Bashir Garba Aljannare2 Departments of 1Surgery, Institute of Urology and Nephrology, 2Anesthesia and Intensive Care, Usmanu Danfodiyo University Teaching Hospital, Sokoto, ",
      },
    ],
  },
  {
    journal:
      "Postoperative extraperitoneal bladder injury after metal pelvic osteosynthesis for pelvic injury.https://doi.org/10.20935/AcadMed7389",
    authors: [
      {
        name: "Khalid Abdullahi1,*, Obadele Olusegun George1, Ajiboye Lukman Olalekan2, Abubakar Isiyaku1, Muhammad Abubakar Sadiq1, Aljannare Bashir Garba3, Okezie Chukwuebuka Kingsley2, Agwu Ngwobia Peter1 Academic Editors: Luca Ansaloni",
      },
    ],
  },
  {
    journal:
      "DOI:10.47837/CMJ.2023111.3] SERUM INOSINE MONOPHOSPHATE DEHYDROGENASE-2 AS A PREDICTOR OF AGGRESSIVE PROSTATE CANCER 1 2 2 2 2 ",
    authors: [
      {
        name: "Umar AM, Mungadi IA, Agwu NP, Abdulwahab-Ahmed A, Muhammad AS, Khalid A, Oyibo EU 2 3 1 Division of Urology, Federal Teaching Hospital Gombe, Ashaka Road, Gombe State, Nigeria. 2 Institute of Urology and Nephrology, Usmanu Danfodiyo University and Teaching Hospital, Sokoto State, Nigeria. 3 Federal Medical Centre, Keffi, Nasarawa State, Nigeria",
      },
    ],
  },
  {
    journal:
      "Transurethral band a rare aetiology of bladder outlet obstruction.2Dept. of Surgery, Federal Medical Centre, Gusau, Nigeria https://doi.org/10.18231/j.yjom.2024.033 ",
    authors: [
      {
        name: "Abdullahi Khalid 1*, Abubakar Isiyaku1, John Solomon Marcus2, Abubakar Sadiq Muhammad1, Abdullah Abdulwahab Ahmed1 1Dept. of Surgery, Tetfund Centre of Excellence in Urology and Nephrology, Institute of Urology, Sokoto, Nigeria ",
      },
    ],
  },
];

// --- Improved PubTable Component ---
function PubTable() {
  const rows = elements.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>
        {/* Use Text component for consistency */}
        {element.authors.map((a, authorIndex) => (
          <Text size="sm" key={authorIndex}>
            {a.name}
          </Text>
        ))}
      </Table.Td>
      <Table.Td>
        {/* Use Text component, potentially smaller size if needed */}
        <Text size="sm">{element.journal}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    // Add padding and shadow directly to Paper if desired
    <Paper p="md" shadow="sm" withBorder radius="md">
      {/* ScrollContainer for responsiveness on small screens */}
      <Table.ScrollContainer minWidth={600}>
        <Table
          striped // Adds zebra striping
          highlightOnHover // Highlights row on hover
          withTableBorder // Adds border around the table
          withColumnBorders // Adds border between columns
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: "50px" }}>SN</Table.Th>{" "}
              {/* Optional: fixed width for SN */}
              <Table.Th>Author(s)</Table.Th>
              <Table.Th>Journal / Publication Details</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}

// --- Improved PublicationPage Component ---
export default function PublicationPage() {
  const theme = useMantineTheme();

  return (
    <Container size="xl" my="xl">
      {" "}
      {/* Added Container and vertical margin */}
      {/* --- Page Title Section (Using Mantine components) --- */}
      <Stack align="center" mb="xl">
        {" "}
        {/* Center title block */}
        <Title
          order={1}
          ta="center"
          className="uppercase text-3xl md:text-4xl font-bold text-gray-700" // Keep some Tailwind for specific styles if needed
        >
          Recent Publications
        </Title>
        <Divider
          size="md"
          color={theme.colors.cyan[6]} // Use theme color
          className="w-16" // Keep width style
        />
        <Text ta="center" c="dimmed" fz="lg">
          {" "}
          {/* Use Text component */}
          2021 - 2023
        </Text>
      </Stack>
      {/* --- Table Section --- */}
      <div>
        {" "}
        {/* Keep this div or remove if Container provides enough structure */}
        <PubTable />
      </div>
    </Container>
  );
}
