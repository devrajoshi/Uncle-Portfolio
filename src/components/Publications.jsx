import React from "react";

const Publications = () => {
  const articles = [
    {
      id: 1,
      publishedYear: 2024,
      publishedBy:
        "International Journal of Technology Enhanced Learning (IJTEL)",
      type: "Journal Article",
      title:
        "The Impact of Digital Pedagogy on Mathematics Learning in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students...",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
    },
    {
      id: 2,
      publishedYear: 2024,
      publishedBy:
        "International Journal of Technology Enhanced Learning (IJTEL)",
      type: "Journal Article",
      title:
        "The Impact of Digital Pedagogy on Mathematics Learning in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students...",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
    },
    {
      id: 3,
      publishedYear: 2024,
      publishedBy:
        "International Journal of Technology Enhanced Learning (IJTEL)",
      type: "Journal Article",
      title:
        "The Impact of Digital Pedagogy on Mathematics Learning in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students...",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
    },
    {
      id: 4,
      publishedYear: 2024,
      publishedBy:
        "International Journal of Technology Enhanced Learning (IJTEL)",
      type: "Journal Article",
      title:
        "The Impact of Digital Pedagogy on Mathematics Learning in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students...",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
    },
    {
      id: 5,
      publishedYear: 2024,
      publishedBy:
        "International Journal of Technology Enhanced Learning (IJTEL)",
      type: "Journal Article",
      title:
        "The Impact of Digital Pedagogy on Mathematics Learning in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students...",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
    },
    {
      id: 6,
      publishedYear: 2024,
      publishedBy:
        "International Journal of Technology Enhanced Learning (IJTEL)",
      type: "Journal Article",
      title:
        "The Impact of Digital Pedagogy on Mathematics Learning in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students...",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
    },
  ];
  return (
    <div
      name="publications"
      className="bg-black h-fit w-full text-white items-start px-3 lg:px-20 py-20 sm:mx-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Publications
          </p>
          <p className="py-6 font-bold text-yellow-300">
            A collection of published articles and research papers that showcase
            expertise in data science and analytics.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-1">
          {articles.map(
            ({
              id,
              publishedYear,
              citations,
              publishedBy,
              href,
              title,
              abstract,
              keywords,
              type,
              doi,
            }) => (
              <div
                key={id}
                className="bg-gray-900 m-0 md:mx-12 p-2 md:p-4 border border-indigo-600 rounded-md hover:scale-100 lg:hover:scale-105 transition-transform duration-300"
              >
                {/* First Line: Published Year and Citations */}
                <div className="flex justify-between text-sm font-semibold">
                  <span>Published Year: {publishedYear}</span>
                  <span>Citations: {citations}</span>
                </div>

                {/* Second Line: Title */}
                <div className="mt-2">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-400 hover:text-blue-600"
                  >
                    {title}
                  </a>
                </div>

                {/* Third Line: Published By and Type */}
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">
                    Published By: {publishedBy}
                  </span>
                  <span className="text-gray-400">{type}</span>
                </div>

                {/* Fourth Line: Abstract */}
                <div className="mt-4">
                  <p className="text-gray-200 text-sm">{abstract}</p>
                </div>

                {/* Fifth Line: Keywords */}
                <div className="mt-4">
                  <p className="text-sm text-yellow-200">
                    Keywords: {keywords.join(", ")}
                  </p>
                </div>

                {/* Sixth Line: DOI */}
                <div className="mt-4">
                  <p className="text-sm">
                    DOI:{" "}
                    <a
                      href={`https://doi.org/${doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {doi}
                    </a>
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
