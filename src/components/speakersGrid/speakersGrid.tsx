import React from "react";
import SpeakerCard from "../SpeakerCard/SpeakerCard";

const speakers = [
  {
    name: "Dr. Jane Smith",
    title: "AI Ethics Researcher",
    image: "/currSpeaker/neo.png",
    longDescription:
      "Dr. Jane Smith is a renowned AI ethics researcher who has dedicated her career to exploring the complex ethical challenges posed by artificial intelligence. Her groundbreaking work focuses on ensuring that AI systems are developed and deployed in ways that respect human rights, promote fairness, and enhance societal well-being. Dr. Smith's research has influenced policy-making at both national and international levels, shaping the future of AI governance.",
  },
  {
    name: "John Doe",
    title: "Climate Change Activist",
    image: "/currSpeaker/ron2.png",
    longDescription:
      "John Doe is a tireless climate change activist whose work has inspired millions to take action against global warming. Through his grassroots campaigns and collaborations with leading environmental organizations, John has been instrumental in promoting sustainable living practices and pushing for policy changes to address the climate crisis. His innovative approaches to community engagement have created a ripple effect of positive environmental action across the globe.",
  },
  {
    name: "Kim Jon Un",
    title: "Quantum Computing Pioneer",
    image: "/speakers/sarah-johnson.jpg",
    longDescription:
      "Sarah Johnson is at the forefront of quantum computing research, working to harness the power of quantum mechanics to solve complex computational problems. Her work in quantum algorithms and error correction has paved the way for more stable and powerful quantum systems. Sarah's vision for the future of computing extends beyond theoretical research, as she actively collaborates with industry partners to bring quantum computing applications to life in fields such as cryptography, drug discovery, and financial modeling.",
  },
  {
    name: "Pratham Chaudhary",
    title: "Neuroscience Innovator",
    image: "/images/hero.png",
    longDescription:
      "Pratham Chaudhary will be coming along with one of the speakers.",
  },
  {
    name: "Emily Rodriguez",
    title: "Space Exploration Visionary",
    image: "/speakers/emily-rodriguez.jpg",
    longDescription:
      "Emily Rodriguez is a visionary leader in the field of space exploration, spearheading efforts to make interplanetary travel and colonization a reality. Her work combines cutting-edge aerospace engineering with a deep understanding of the biological and psychological challenges of long-term space habitation. Emily's projects range from developing sustainable life support systems for Mars missions to designing innovative propulsion technologies that could dramatically reduce travel times between planets. Her passion for space exploration is matched only by her commitment to making the benefits of space technology accessible to all of humanity.",
  },
  {
    name: "David Kim",
    title: "Blockchain Entrepreneur",
    image: "/speakers/david-kim.jpg",
    longDescription:
      "David Kim is a pioneering blockchain entrepreneur whose work is reshaping the landscape of finance and digital identity. His innovative blockchain solutions are addressing some of the most pressing challenges in areas such as financial inclusion, secure digital voting systems, and transparent supply chain management. David's projects have not only demonstrated the transformative potential of blockchain technology but have also played a crucial role in making these complex systems more accessible and user-friendly for the general public. His vision of a more decentralized and equitable digital future continues to inspire and drive innovation in the blockchain space.",
  },
];

const CardSpeaker: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 item">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
};

export default CardSpeaker;
