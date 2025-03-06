import React from "react";
import SpeakerCard from "../SpeakerCard/SpeakerCard";

const speakers = [
  {
    name: "Aiman Khan",
    title: "Content Creator",
    image: "/speakers/aiman.png",
    longDescription:
      "Known as @justaiming, Aiman captivates nearly half a million followers with her vibrant personality and impactful content. From mental health advocacy to empowering fashion tips and relatable skits, she inspires women to embrace their individuality with confidence. Her humor, positivity, and authenticity make her platform a must-follow for anyone seeking connection, laughter, and empowerment!",
  },
  {
    name: "Tirth Parsana",
    title: "Content Creator",
    image: "/speakers/tirth.png",
    longDescription:
      "With over 7 million followers and 1 billion views, Tirth has become a digital sensation, turning his platforms into hubs of creativity and inspiration. As the author, he explores deep themes of innocence, guilt, and the human condition. Today, at TEDxNIITUniversity 2025, Tirth is here to share his incredible journey, his rise to fame, and the secrets to standing out in the digital world. Let’s hear it for Tirth Parsana! ",
  },
  {
    name: "Sneha Chakraborty",
    title: "Artist & AR NFT Pioneer",
    image: "/speakers/sneha.png",
    longDescription:
      "Meet Sneha, the street art superhero transforming Mumbai’s slums into vibrant canvases of color and hope! Her murals tell powerful stories, turning forgotten walls into symbols of pride by involving local residents as co-creators. As India’s first artist to showcase AR NFT art in a gallery, Sneha is pushing the boundaries of creativity and technology. With every brushstroke, she proves that art isn’t just about beauty—it’s about connection, transformation, and inspiring magic! ",
  },
  {
    name: "Palakh Khanna",
    title: "Mentor and Environmentalist",
    image: "/speakers/palakh.png",
    longDescription:
      "Meet Palakh, a dynamic youth changemaker, 2x TEDx speaker, and content creator with 85K+ followers, inspiring action and impact. As the founder of Break The Ice, she’s breaking barriers and driving change. Recognized as one of Asia’s 100 Women Power Leaders (2023) and Businessworld Wellbeing’s 30 Under 30, she’s also featured in UN Women’s Coffee Table Book among 75 inspiring women leaders. A Global Youth Ambassador for A World At School, Palakh is proving that leadership is about action, connection, and transformation!",
  },
  {
    name: "Dr Uterus",
    title: "Doctor",
    image: "/speakers/uterus.png",
    longDescription:
      "Meet Dr. Mitali, fondly known as Dr. Uterus—the powerhouse redefining women’s health conversations! As a TEDx speaker and fearless advocate, she’s breaking stigmas, busting myths, and making reproductive health a relatable topic. With a perfect mix of expertise and humor, Dr. Mitali turns complex medical jargon into empowering “aha!” moments. She’s not just a doctor—she’s a trailblazer inspiring a revolution in well-being! ",
  },
  {
    name: "Manas Chopra",
    title: "Co-Founder, Geek Room and a Tech Enthusiast",
    image: "/speakers/manas.png",
    longDescription:
      "Meet Manas, the co-founder of Geek Room—a platform revolutionizing how geeks, innovators, and creators connect to learn and build together. More than a tech enthusiast, Manas is a visionary who created a community-driven space where tech lovers, gamers, and dreamers thrive. Geek Room isn’t just a platform; it’s a powerhouse of creativity and collaboration, shaping the next generation of tech leaders! ",
  },
  {
    name: "Dr. Gajendra Purohit",
    title: "Educator",
    image: "/speakers/gajendra.png",
    longDescription:
      "Meet the legend who’s revolutionizing how we learn! Known for making even the toughest math equations understandable just hours before exams, he’s redefined how students tackle competitive exams. With a mantra of free, accessible, and empowering knowledge, he’s reaching students everywhere, helping them chase their dreams. Get ready to hear from the educator simplifying complex equations with ease! ",
  },
  {
    name: "Humaira Mushtaq",
    title: "Professional Racer",
    image: "/speakers/humaira.png",
    longDescription:
      "Introducing Humaira Mushtaq, India’s first female racer from Jammu and Kashmir! A true trailblazer, she’s dominating the racetrack and shattering stereotypes in national championships. With her fierce determination and skill, Humaira is proving that motorsports is for everyone, regardless of gender. But she’s not just racing to win—she’s inspiring young women to take the wheel and break barriers. Humaira’s journey shows that with talent, grit, and courage, no dream is too far. Let’s give it up for the unstoppable Humaira Mushtaq! ",
  },
  {
    name: "Dr. L. Venkata Subramaniam",
    title: "Tech Author & Innovator",
    image: "/speakers/venkata.png",
    longDescription:
      "Meet Dr. L. Venkata Subramaniam, a visionary at the forefront of India’s quantum revolution! With over 150 research papers, 34 patents, and 3,000+ citations, his expertise spans AI, machine reasoning, and big data analytics. A Ph.D. from IIT Delhi and celebrated TEDx speaker, he makes quantum computing accessible and engaging. In his book Quantum Nation: India's Leap into the Future, he urges India to lead in quantum technology. Known for his humor and depth, Dr. Subramaniam inspires audiences to explore the limitless possibilities of technology with clarity and passion! ",
  },
  {
    name: "Nainika Mukherjee",
    title: "Kathak Dancer & Dance Movement Therapist",
    image: "/speakers/nainika1.png",
    longDescription:
      "a vibrant force who transforms movement into magic! A master’s graduate in counseling psychology and certified Dance Movement Therapy practitioner, she fuses the elegance of Kathak with the science of healing. Trained by legends like Pt. Rajendra Gangani, her journey from rhythmic beats to heartfelt connections is nothing short of inspiring. Starting her Kathak journey in 2005, Nainika didn’t just master her art—she redefined it, exploring how dance can reduce stress and uplift mental health. For all the dance lovers who find peace in movement, she proves that dance isn’t just art—it’s a language of healing.",
  },
  {
    name: "Capt. Dharamveer Singh",
    title: "Ex-Army Officer & Adventurer",
    image: "/speakers/capt.png",
    longDescription:
      "After five impactful years in the Army, excelling in tough operations, he transitioned to leadership roles in business, founding the successful venture Apache. A certified mountaineer, marathon runner, and national cricketer, he’s conquered challenges, even finishing as runner-up on Fear Factor: Khatron Ke Khiladi. As a 14-time TEDx speaker, Capt. Dharamveer captivates audiences with tales of resilience and daring, inspiring them to embrace opportunities with his motto, “Be Ready Always.",
  },
  {
    name: "Amit Dubey",
    title: "Cybersecurity Expert",
    image: "/speakers/amit.png",
    longDescription:
      "Introducing Amit Dubey, our distinguished speaker! A leading Cyber Security Expert with an M.Tech from IIT Kharagpur, Amit has advised the Indian Parliament and law enforcement agencies on cyber security. He's also an accomplished entrepreneur and author, promoting cyber security awareness through his work and radio show, 'RedFM Hidden Files.'",
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
