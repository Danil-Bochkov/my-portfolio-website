import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { data } from "../../Data/data";
import Terminal from "./Terminal";
import myCertificateOfUniversity from "../../files/certificateFromUniversity.pdf";
import myCertificate from "../../files/certificate.pdf";
import myCv from "../../files/cv.pdf";
import cvPic from "../../images/cv.png";
import certificatePic from "../../images/certificate.png";
import certifUniverPic from "../../images/certificateOfUniversity.png";
import Style from "./About.module.scss";

export default function About() {
  const firstName = data.firstName.toLowerCase();
  const secondName = data.lastName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: data.baseColor }}>
            {firstName}
            {secondName} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: data.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {data.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: data.baseColor }}>
            {firstName}
            {secondName} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: data.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: data.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {data.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: data.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {data.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function courseExperience() {
    return (
      <>
        <p>
          <span style={{ color: data.baseColor }}>
            {firstName}
            {secondName} $
          </span>{" "}
          cd education/resume
        </p>
        <p>
          <span style={{ color: data.baseColor }}>
            education/resume <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: data.baseColor }}> Education</p>
        <p style={{ color: data.baseColor }}>
          {" "}
          Kharkiv National University Of Radioelectronics
        </p>
        <p style={{ color: data.baseColor }}> 2019-2023</p>
        <p className={Style.pictureOfFile}>
          <img src={certifUniverPic} alt="Certificate preview" />
          <a
            href={myCertificateOfUniversity}
            download="danny-bochkov-certificate"
          >
            Download my certificate of university
          </a>
        </p>
        <p style={{ color: data.baseColor }} className={Style.line}></p>
        <p style={{ color: data.baseColor }}> GOIT Full Stack Bootcamp</p>
        <p style={{ color: data.baseColor }}> 2022-2023</p>
        <p className={Style.pictureOfFile}>
          <img src={certificatePic} alt="Certificate preview" />
          <a href={myCertificate} download="danny-bochkov-certificate">
            Download my certificate
          </a>
        </p>
        <p style={{ color: data.baseColor }} className={Style.line}></p>
        <p style={{ color: data.baseColor }}> My resume</p>
        <p className={Style.pictureOfFile}>
          <img src={cvPic} alt="CV preview" />
          <a href={myCv} download="danny-bochkov-cv">
            Download my CV
          </a>
        </p>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: data.baseColor }}>
            {firstName}
            {secondName} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: data.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {data.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      component={motion.div}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={courseExperience()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
