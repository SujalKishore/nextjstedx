import React, { useState } from "react";
const demoData = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    image: "/images/user.png",
    description:
      "John is an expert in software development, specializing in full-stack technologies.",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    image: "/core/IMG_7900.png",
    description:
      "Jane has a passion for creating customer-centric products and has led numerous successful launches.",
  },
  {
    name: "Alex Johnson",
    designation: "Data Scientist",
    image: "/images/user.png",
    description:
      "Alex leverages data to extract insights and drive decision-making in businesses.",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/images/user.png",
    description:
      "Emily focuses on designing intuitive and engaging user experiences.",
  },
  {
    name: "Michael Brown",
    designation: "Business Analyst",
    image: "/images/user.png",
    description:
      "Michael helps companies streamline their operations through data analysis and process improvements.",
  },
  {
    name: "Sophia Wilson",
    designation: "AI Researcher",
    image: "/images/user.png",
    description:
      "Sophia is working on cutting-edge AI technologies to improve machine learning systems.",
  },
  {
    name: "Daniel Martinez",
    designation: "Marketing Specialist",
    image: "/images/user.png",
    description:
      "Daniel is passionate about digital marketing and has expertise in growth hacking strategies.",
  },
  {
    name: "Olivia Garcia",
    designation: "Financial Consultant",
    image: "/images/user.png",
    description:
      "Olivia helps businesses optimize their financial strategies and improve profitability.",
  },
  {
    name: "Liam Anderson",
    designation: "Cloud Architect",
    image: "/images/user.png",
    description:
      "Liam is an expert in designing scalable cloud infrastructure for enterprise-level applications.",
  },
  {
    name: "Emma Thomas",
    designation: "Cybersecurity Expert",
    image: "/images/user.png",
    description:
      "Emma ensures the security and integrity of digital systems by implementing robust security measures.",
  },
  {
    name: "James Moore",
    designation: "Content Strategist",
    image: "/images/user.png",
    description:
      "James specializes in crafting compelling content strategies to increase brand awareness.",
  },
  {
    name: "Charlotte Taylor",
    designation: "Creative Director",
    image: "/images/user.png",
    description:
      "Charlotte leads creative teams to deliver innovative and visually stunning designs.",
  },
  {
    name: "Benjamin White",
    designation: "Operations Manager",
    image: "/images/user.png",
    description:
      "Benjamin is skilled in optimizing business processes and improving operational efficiency.",
  },
];
const CardGrid: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const handleCardClick = (item: any) => {
    setSelectedCard(item);
  };
  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div style={{ marginTop: "100px" }} className="px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {demoData.slice(0, -1).map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-2 transition duration-300 w-72 h-96 flex flex-col justify-between group cursor-pointer"
            onClick={() => handleCardClick(item)}
          >
            <div className="h-4/5 overflow-hidden flex items-center justify-center mb-0">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
                style={{ marginTop: "-2rem" }}
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-base text-gray-400 mt-1">{item.designation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {demoData.slice(-1).map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-2 transition duration-300 w-72 h-96 flex flex-col justify-between group cursor-pointer"
            onClick={() => handleCardClick(item)}
          >
            <div className="h-4/5 overflow-hidden flex items-center justify-center mb-0">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
                style={{ marginTop: "-2rem" }}
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-base text-gray-400 mt-1">{item.designation}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-lg p-8 w-full max-w-xl text-center relative shadow-lg mx-4 sm:mx-6 md:mx-10"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingTop: "1.5rem" }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img
              src={selectedCard.image}
              alt={selectedCard.name}
              className="w-full max-h-80 object-contain mx-auto mb-4"
              style={{ marginTop: "-2rem" }}
            />
            <h3 className="text-2xl font-bold text-white mt-4">
              {selectedCard.name}
            </h3>
            <p className="text-gray-400 mb-6">{selectedCard.designation}</p>
            <p className="text-gray-300 text-sm">{selectedCard.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardGrid;