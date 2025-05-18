import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../src/styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] ml-auto mr-auto w-full ease-in duration-75">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1.25)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary p-5 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 mb-12 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          AI and Machine Learning Engineer specializing in advanced Natural Language Processing (NLP) and AI-driven
          automation solutions. Proven expertise in developing scalable, cloud-native AI platforms using cutting-edge
          frameworks like LangChain, LangGraph, and Retrieval-Augmented Generation (RAG) architectures. Skilled in deploying
          robust AI services on Google Cloud Platform and <b>AWS</b>, integrating <b>OCR</b>, computer vision (<b>YOLO</b>), and <b>NLP</b> for complex
          document processing and real-time defect detection. Experienced in architecting generative AI chatbots, automated
          workflow orchestration, and secure data redaction systems that boost operational efficiency by over 30% and reduce
          manual workloads by up to <b>90%</b>. Passionate about leveraging multi-agent AI systems and deep learning models to
          transform business processes in construction management and beyond, while optimizing resource use and ensuring
          compliance with data privacy standards.
        </motion.p>
      </div>

      {/* Removed Canvas/blob/image section entirely */}

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
