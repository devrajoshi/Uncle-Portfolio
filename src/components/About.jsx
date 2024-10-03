import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white px-3 lg:px-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            About Me
          </h2>
        </div>

        <div>
          <p>
            I am a faculty member at Mahendra Ratna Campus Tahachal, Tribhuvan
            University, Nepal. I completed my Ph.D. in education from Banaras
            Hindu University, India, and my M.Ed. in mathematics education from
            Tribhuvan University. My research interests include educational
            technology, digital pedagogy, applied mathematics, quantitative
            research, item response theory (IRT), structural equation modeling
            (SEM), machine learning, and various issues related to digital
            pedagogy. I have been actively involved in facilitating digital
            pedagogy, mathematics teaching-related software and applications,
            and quantitative data analysis tools such as SPSS and JASP.
          </p>

          <br />

          <p>
            I also work with structural equation modeling tools like AMOS,
            referencing tools like Mendeley and Zotero, qualitative data
            analysis tools like Atlas.ti, academic/scientific writing, and other
            teaching-learning and research-related software and applications.
            Additionally, I have substantial experience in curriculum
            development, report writing, data analysis, thesis supervision,
            research project development, monitoring and evaluation of research
            projects, and test item writing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
