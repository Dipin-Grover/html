import React from "react";
import Header from "../components/Header";
import LearnHero from "../components/deltaview_learn/LearnHero";
import DigitalCurriculum from "../components/deltaview_learn/DigitalCurriculum";
import LearningViaPenDrives from "../components/deltaview_learn/LearningViaPenDrives";
import LearningComparison from "../components/deltaview_learn/LearningComparison";
import EducationalPenDrive from "../components/deltaview_learn/EducationalPenDrive";
import LanguageSection from "../components/deltaview_learn/LanguageSection";
import VideoLesson from "../components/deltaview_learn/VideoLesson";
import EbookLibrary from "../components/deltaview_learn/EbookLibrary";
import BlogArea from '../components/home/BlogArea';
import RequestDemo from "../components/deltaview_learn/RequestDemo";
import AboutTestimonials from '../components/aboutUs/AboutTestimonials';
import EnterprisesFAQ from "../components/enterprises/EnterprisesFAQ";

const DeltaViewLearn = () => {
  return (
    <>
      <Header />

      <main>
        <LearnHero />
        <DigitalCurriculum />
        <LearningViaPenDrives />
        <LearningComparison />
        <EducationalPenDrive/>
        <LanguageSection />
        <VideoLesson />
        <EbookLibrary />
        <BlogArea />
        <AboutTestimonials />
        <RequestDemo />
        <EnterprisesFAQ />
      </main>
    </>
  );
};

export default DeltaViewLearn;