import React from "react";
import SpeakerCard from "../SpeakerCard/SpeakerCard";

const speakers = [
  {
    name: "Aiman Khan",
    title: "Content Creator",
    image: "/currSpeaker/neo.png",
    longDescription:
      "Known as @justaiming, Aiman captivates nearly half a million followers with her vibrant personality and impactful content. From mental health advocacy to empowering fashion tips and relatable skits, she inspires women to embrace their individuality with confidence. Her humor, positivity, and authenticity make her platform a must-follow for anyone seeking connection, laughter, and empowerment!" },
  {
    name: "Tirth Parsana",
    title: "Content Creator",
    image: "/currSpeaker/ron2.png",
    longDescription:
      "With over 7 million followers and 1 billion views, Tirth has become a digital sensation, turning his platforms into hubs of creativity and inspiration. As the author, he explores deep themes of innocence, guilt, and the human condition. Today, at TEDxNIITUniversity 2025, Tirth is here to share his incredible journey, his rise to fame, and the secrets to standing out in the digital world. Let’s hear it for Tirth Parsana! ",
  },
  {
    name: "Sneha Chakraborty",
    title: "Artist & AR NFT Pioneer",
    image: "/speakers/sarah-johnson.jpg",
    longDescription:
      "Meet Sneha, the street art superhero transforming Mumbai’s slums into vibrant canvases of color and hope! Her murals tell powerful stories, turning forgotten walls into symbols of pride by involving local residents as co-creators. As India’s first artist to showcase AR NFT art in a gallery, Sneha is pushing the boundaries of creativity and technology. With every brushstroke, she proves that art isn’t just about beauty—it’s about connection, transformation, and inspiring magic! ",
  },
  {
    name: "Ashu ghai",
    title: "Educator & Science Communicator",
    image: "/images/hero.png",
    longDescription:
      "meet a game-changer in science education! Revolutionizing how young minds engage with science, he’s making learning fun, smart, and accessible. As the creator of Science and Fun, with over 7 million subscribers, he turns complex concepts into bite-sized wonders. With captivating experiments and relatable insights, he’s inspiring students to think beyond the classroom and explore the magic of science. With four TEDx Talks to his name, let’s give it up for the incredible Science and Fun mastermind! ",
  },
  {
    name: "Dr Uterus",
    title: "Doctor",
    image: "/speakers/emily-rodriguez.jpg",
    longDescription:
      "Meet Dr. Mitali, fondly known as Dr. Uterus—the powerhouse redefining women’s health conversations! As a TEDx speaker and fearless advocate, she’s breaking stigmas, busting myths, and making reproductive health a relatable topic. With a perfect mix of expertise and humor, Dr. Mitali turns complex medical jargon into empowering “aha!” moments. She’s not just a doctor—she’s a trailblazer inspiring a revolution in well-being! ",
  },
  {
    name: "Manas Chopra",
    title: "Co-Founder, Geek Room and a Tech Enthusiast",
    image: "/speakers/david-kim.jpg",
    longDescription:
      "Meet Manas, the co-founder of Geek Room—a platform revolutionizing how geeks, innovators, and creators connect to learn and build together. More than a tech enthusiast, Manas is a visionary who created a community-driven space where tech lovers, gamers, and dreamers thrive. Geek Room isn’t just a platform; it’s a powerhouse of creativity and collaboration, shaping the next generation of tech leaders! ",
  },
  {
    name: "Divas Gupta",
    title: "Public Speaker",
    image: "/speakers/linda-smith.jpg",
    longDescription:
      "Meet Divas, our extraordinary 7th TEDx speaker! One of India’s top public speaking coaches, he turns nervous speakers into confident communicators. With over 1.2 million followers and a global community across 14+ countries, Divas has trained Fortune 500 professionals and is the co-founder of Ikigai Learning. He helps people discover their purpose and align it with their career dreams! ",
  },
  {
    name: "Dr. Gajendra Purohit",
    title: "Educator",
    image: "/speakers/michael-johnson.jpg",
    longDescription:
      "Meet the legend who’s revolutionizing how we learn! Known for making even the toughest math equations understandable just hours before exams, he’s redefined how students tackle competitive exams. With a mantra of free, accessible, and empowering knowledge, he’s reaching students everywhere, helping them chase their dreams. Get ready to hear from the educator simplifying complex equations with ease! ",
  },
  {
    name: "Humaira Mushtaq",
    title: "Professional Racer",
    image: "/speakers/sophia-lee.jpg",
    longDescription:
      "Introducing Humaira Mushtaq, India’s first female racer from Jammu and Kashmir! A true trailblazer, she’s dominating the racetrack and shattering stereotypes in national championships. With her fierce determination and skill, Humaira is proving that motorsports is for everyone, regardless of gender. But she’s not just racing to win—she’s inspiring young women to take the wheel and break barriers. Humaira’s journey shows that with talent, grit, and courage, no dream is too far. Let’s give it up for the unstoppable Humaira Mushtaq! ",
  },
  {
    name: "Dr. L. Venkata Subramaniam",
    title: "Tech Author & Innovator",
    image: "/speakers/alex-brown.jpg",
    longDescription:
      "Meet Dr. L. Venkata Subramaniam, a visionary at the forefront of India’s quantum revolution! With over 150 research papers, 34 patents, and 3,000+ citations, his expertise spans AI, machine reasoning, and big data analytics. A Ph.D. from IIT Delhi and celebrated TEDx speaker, he makes quantum computing accessible and engaging. In his book Quantum Nation: India's Leap into the Future, he urges India to lead in quantum technology. Known for his humor and depth, Dr. Subramaniam inspires audiences to explore the limitless possibilities of technology with clarity and passion! "
  },
  {
    name: "Nainika Mukherjee",
    title: "Kathak Dancer & Dance Movement Therapist",
    image: "/speakers/alex-brown.jpg",
    longDescription:
      "a vibrant force who transforms movement into magic! A master’s graduate in counseling psychology and certified Dance Movement Therapy practitioner, she fuses the elegance of Kathak with the science of healing. Trained by legends like Pt. Rajendra Gangani, her journey from rhythmic beats to heartfelt connections is nothing short of inspiring. Starting her Kathak journey in 2005, Nainika didn’t just master her art—she redefined it, exploring how dance can reduce stress and uplift mental health. For all the dance lovers who find peace in movement, she proves that dance isn’t just art—it’s a language of healing."
  },
];

const CardSpeaker: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-8 md:justify-center">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );

};


export default CardSpeaker;
