"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { YearSelector } from "@/components/YearSelector/YearSelector";
import { ThemeImage } from "@/components/ThemeImage/ThemeImage";
import { Description } from "@/components/desc/desc";
import { SpeakersList } from "@/components/SpeakersList/SpeakersList";
import TopBanner from "@/components/XHero/XHero";
import Carousel from "@/components/Carousel/Carousel";

const yearContent: {
  [key: number]: {
    theme: string;
    description: string;
    themeImage: string;
    speakers: Array<{
      name: string;
      topic: string;
      image: string;
      socialLinks: {
        linkedin?: string;
        twitter?: string;
      };
      tedTalkUrl: string;
    }>;
    gallery: Array<string>;
  };
} = {
  2018: {
    theme: "The Precipice",
    description: "On the brink of change",
    themeImage: "/rewind/18.jpg",
    speakers: [
      {
        name: "Prasanth Nori",
        topic: "Flaws in Education",
        image: "/rewind/Precipice/Prasanth_Nori.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=zxusiA7UsHI&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=1",
      },
      {
        name: "Nimisha Verma",
        topic: "Isolation",
        image: "/rewind/Precipice/Nimisha_Verma.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=RsqOdZepzVs&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=2",
      },
      {
        name: "Anuv Jain",
        topic: "How Sadness Can Be Turned into One of Your Biggest Assets",
        image: "/rewind/Precipice/anuv_jain.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=fAYaSIMsxQs&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=3",
      },
      {
        name: "Dr Ananta Singh Raghuvanshi",
        topic: "Lead at the Edge of The Precipice",
        image: "/rewind/Precipice/Ananta_Singhi.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=BjRjuQnmJLY&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=4",
      },
      {
        name: "Sushant Kalra",
        topic:
          "Aao baat karein- Beginning of Eradication of Child Sexual Abuse",
        image: "/rewind/Precipice/sushant_kalra.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=tZoxCmda56I&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=5",
      },
      {
        name: "Maj Gen. Umang Sethi",
        topic: "We Before I ",
        image: "/rewind/Precipice/Umang_Sethi.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=nZkhF12fO8c&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=6",
      },
      {
        name: "Narayani Gupta",
        topic: "Conversations with the Past",
        image: "/rewind/Precipice/narayanai-gupta.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=yc8-XT-awzY&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=7",
      },
      {
        name: "Pankhuri Gidwani",
        topic: "Break the Stereotypes",
        image: "/rewind/Precipice/pankhuri_gidwani.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=XmE4mk8x00s&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=8",
      },
      {
        name: "Dr Prem Atreja",
        topic: "To be healthy or not to be",
        image: "/rewind/Precipice/Prem_Atreja.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=531nxrBke88&list=PLsRNoUx8w3rNdvD1tNTtHmyWfqTofEDB4&index=9",
      },
    ],
    gallery: [
      "/gallery/2018-1.jpg",
      "/gallery/2018-2.jpg",
      "/gallery/2018-3.jpg",
    ],
  },
  2019: {
    theme: "Sparking Metanoia",
    description: "",
    themeImage: "/rewind/19.jpg",
    speakers: [
      {
        name: "Atif Khan",
        topic: "How Drones Impact the Society",
        image: "/rewind/Sparking/atif_khan.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=VaegXWjUhN0&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=8",
      },
      {
        name: "Digital Gandhi",
        topic: "Love Has All the Answers",
        image: "/rewind/Sparking/digital-gandhi.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=umH9yka1siY&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=6",
      },
      {
        name: "Salman Khurshid",
        topic: "The Mind of a Judge",
        image: "/rewind/Sparking/Salman_Khurshid.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=ZljJEjJ7n_g&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=1",
      },
      {
        name: "Richard Rekhy",
        topic: "Leading from the Heart",
        image: "/rewind/Sparking/Richard_Rekhy.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=PjrM3G8PCb8&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=2",
      },
      {
        name: "Sangeeta Sindhi Bahl",
        topic: "Transforming Setbacks into Opportunities",
        image: "/rewind/Sparking/sangeeta-bahl.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=ysYik6Ptfy4&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=3",
      },
      {
        name: "Nidhi Lauria",
        topic: "A Case for Generosity",
        image: "/rewind/Sparking/Nidhi_Lauria.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=umH9yka1siY&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=6",
      },
      {
        name: "Sanchit Batra",
        topic: "An Illusion Act",
        image: "/rewind/Sparking/Sanchit_Batra.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=0qsQpUJv-Ck&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=6",
      },
      {
        name: "Kamal Morya",
        topic: "Dance Performance",
        image: "/rewind/Sparking/Kamal_Morya.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=B8QRhZi_PVk&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=8",
      },
      {
        name: "Siya Jain",
        topic: "Kathak Performance",
        image: "/rewind/Sparking/siya-jain.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=1i2Fruw4Vf4&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=9",
      },
      {
        name: "Lt Gen Vinod Bhatia (Retd.)",
        topic: "Who Dares, Wins",
        image: "/rewind/Sparking/Vinod_Bhatia.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=4wa3XDh72lE&list=PLsRNoUx8w3rO01rum8RfjQn5LVl5Vq7Ka&index=10",
      },
    ],
    gallery: [
      "/gallery/2019-1.jpg",
      "/gallery/2019-2.jpg",
      "/gallery/2019-3.jpg",
    ],
  },
  2020: {
    theme: "Quo Vadis",
    description: "where are we headed?",
    themeImage: "/rewind/20.jpg",
    speakers: [
      {
        name: "Aditya Bhandari",
        topic: "Young India: Art, Community & Coding",
        image: "/rewind/QuoVadis/Aditya_Bhandari.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=N2Xnkg4OP2w&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=6",
      },
      {
        name: "As We Keep Searching",
        topic: "Musical Performance",
        image: "/rewind/QuoVadis/aswekeepsearching.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=3YOpdfr-agQ&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=8",
      },
      {
        name: "Chameli Debnath",
        topic: "Kathak Dance Performance",
        image: "/rewind/QuoVadis/Chameli_Debnath.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=aCQv_A2wxrw&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=4",
      },
      {
        name: "Manoj Keshwar",
        topic: "Life Lessons from an Epic Road Trip",
        image: "/rewind/QuoVadis/manoj_keshwar.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=3YOpdfr-agQ&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=8",
      },
      {
        name: "Manraj Singh & Arpit Vyas",
        topic: "What Goes Around, Comes Around",
        image: "/rewind/QuoVadis/msingh_avyas.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=JeH9v7ohjWc&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=10",
      },
      {
        name: "Shalin IPS",
        topic: "Connected by Consumption, Consumed by Con",
        image: "/rewind/QuoVadis/shalin_IPS.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=sSqYNOIvoI8&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=7",
      },
      {
        name: "Sugata Mitra",
        topic: "The Future of Work",
        image: "/rewind/QuoVadis/Sugata_mitra.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=jrH3_NANVJA&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=2",
      },
      {
        name: "Sushruthi Krishna",
        topic: "The success story of a girl from Bangalore",
        image: "/rewind/QuoVadis/Sushruthi-Krishna.jpeg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=3YOpdfr-agQ&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=8",
      },
      {
        name: "Tirthak Saha",
        topic: "The Myth of the 3 RS - Sustainabilitys Road Ahead",
        image: "/rewind/QuoVadis/Tirthak_Saha.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=GBplgW4c3gY&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=4",
      },
      {
        name: "Zoe Modgill",
        topic: "Strength is an Inside Job",
        image: "/rewind/QuoVadis/Zoe_Modgill.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=_JAWKCanBTA&list=PLsRNoUx8w3rMVM5oshCcRJou8f8S4S7Zx&index=10",
      },
    ],
    gallery: [
      "/gallery/2020-1.jpg",
      "/gallery/2020-2.jpg",
      "/gallery/2020-3.jpg",
    ],
  },
  2021: {
    theme: "Swadhyaya",
    description: "An interview with oneself",
    themeImage: "/rewind/21.png",
    speakers: [
      {
        name: "Aabir Vyas",
        topic: "Hard Work,Consistency and Patience",
        image: "/rewind/Swadhyaya/aabir_vyas.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=ftMj6E4wX60&list=PLsRNoUx8w3rOE8ZdaLiqWRvt8QDozjwEo&index=7",
      },
      {
        name: "Abhash Jha",
        topic: "When No One Helped Me, I Helped Myself",
        image: "/rewind/Swadhyaya/Abhash_Jha.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=k_FdxLP2qIk&list=PLsRNoUx8w3rOE8ZdaLiqWRvt8QDozjwEo&index=5",
      },
      {
        name: "Anirban Bhattacharyya",
        topic: "Morning Raaga",
        image: "/rewind/Swadhyaya/anirban_bhattacharyya.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=jsX0MMr35lk&list=PLsRNoUx8w3rOE8ZdaLiqWRvt8QDozjwEo&index=2",
      },
      {
        name: "Avinash Singh",
        topic: "Prosper. Or Perish",
        image: "/rewind/Swadhyaya/Avinash_Singh.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=IiVl2UgszFc&list=PLsRNoUx8w3rOE8ZdaLiqWRvt8QDozjwEo&index=4",
      },
      {
        name: " EPR Iyer",
        topic: "Hip Hop Empowers",
        image: "/rewind/Swadhyaya/EPR_Iyer.jpeg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=IaHkabRhBq4&list=PLsRNoUx8w3rOE8ZdaLiqWRvt8QDozjwEo&index=6",
      },
      {
        name: "Richie Mehta",
        topic: "The Meaning of .....",
        image: "/rewind/Swadhyaya/Richie_Mehta.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=N_8CsLScgKg&list=PLsRNoUx8w3rOE8ZdaLiqWRvt8QDozjwEo&index=3",
      },
      {
        name: "Vanndana Vaadera",
        topic: "Mental Workouts, the Pathway to Abundance",
        image: "/rewind/Swadhyaya/vanndana_vaadera.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=bB97hvh-7sI&list=PLsRNoUx8w3rOE8ZdaLiqWRvt8QDozjwEo&index=8",
      },
    ],
    gallery: [
      "/gallery/2021-1.jpg",
      "/gallery/2021-2.jpg",
      "/gallery/2021-3.jpg",
    ],
  },
  2022: {
    theme: "Parvaaz",
    description: "Azaad. Aagaaz. Aseem",
    themeImage: "/rewind/22.png",
    speakers: [
      {
        name: "Kevin Missal",
        topic: "Space Exploration and Humanity",
        image: "/rewind/Parvaaz/kevin_missal.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/emily_watson_space_exploration_and_humanity",
      },
      {
        name: "Harish Mehta",
        topic: "Joy of Failing",
        image: "/rewind/Parvaaz/Harish_Mehta.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=u4KNmBXKe-4&list=PL2LgFpGtqcj4UP5WSECTitMitbzvf0UMU&index=1",
      },
      {
        name: "Supreet Singh Arora",
        topic: "Psychology of Personal Identity",
        image: "/rewind/Parvaaz/Author_sherry.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=cxGsANXP3OQ&list=PL2LgFpGtqcj4UP5WSECTitMitbzvf0UMU&index=8",
      },
      {
        name: "Lakshay Jangid",
        topic: "Patience on one wheel",
        image: "/rewind/Parvaaz/lakshay.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=7sXgpj_Co9I&list=PL2LgFpGtqcj4UP5WSECTitMitbzvf0UMU&index=3",
      },
      {
        name: "Major General D.Bipin Bakshi",
        topic: "Seeking new horizons,Breaking mindsets",
        image: "/rewind/Parvaaz/maj.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/alex_tran_blockchain_and_social_good",
      },
      {
        name: "Rakshit Tandon",
        topic: "Blockchain and Social Good",
        image: "/rewind/Parvaaz/Rakshit_Tandon.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/alex_tran_blockchain_and_social_good",
      },
      {
        name: "Ridhi Khakhar",
        topic: "On carving your own path through perseverance",
        image: "/rewind/Parvaaz/ridhi.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=fA6ady8Xrq8&list=PL2LgFpGtqcj4UP5WSECTitMitbzvf0UMU&index=4",
      },
      {
        name: "Sagar Lalwani",
        topic: "Take the risk or lose the chance",
        image: "/rewind/Parvaaz/Sagar_Lalwani.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=Fg9ixhDzPEo&list=PL2LgFpGtqcj4UP5WSECTitMitbzvf0UMU&index=5",
      },
      {
        name: "Sangeeta Sindhi Bahl",
        topic: "Become who you aspire to be",
        image: "/rewind/Parvaaz/sangeeta.jpeg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=7-8v_IM7OKs&list=PL2LgFpGtqcj4UP5WSECTitMitbzvf0UMU&index=6",
      },
      {
        name: "Srikanth Velamakanni",
        topic: "Unveiling the magic behind great AI",
        image: "/rewind/Parvaaz/srikant.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=PuyKr-jnguA&list=PL2LgFpGtqcj4UP5WSECTitMitbzvf0UMU&index=7",
      },
      {
        name: "Yoga Bhabagna Jonala",
        topic: "Will Classical Dancing help in life",
        image: "/rewind/Parvaaz/yoga.jpg",
        socialLinks: {},
        tedTalkUrl: "",
      },
    ],
    gallery: [
      "/gallery/2022-1.jpg",
      "/gallery/2022-2.jpg",
      "/gallery/2022-3.jpg",
    ],
  },
  2023: {
    theme: "T.H.I.N.C",
    description: "Transform, Hustle, Introspect, Nurture and Create",
    themeImage: "/themes/thinc.png",
    speakers: [
      {
        name: "Aastha Tiwari",
        topic: "The Heart Way or the Hard Way",
        image: "/rewind/THINC/11.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=xZzVeKW_3yU&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=1",
      },
      {
        name: "Dr. Aqsa Shaikh",
        topic: "The White Coat Has A Rainbow",
        image: "/rewind/THINC/12.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=1ckPQR64wwM&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=2",
      },
      {
        name: "Anuranjita Kumar",
        topic: "Can I Have It All: Trials and Tribulations of Working Women",
        image: "/rewind/THINC/8.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=frWC8qmCuOQ&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=3",
      },
      {
        name: "Deepak Pareek",
        topic: "No Guts, No Glory! ",
        image: "/rewind/THINC/9.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=kdIOiNHyDyM&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=4",
      },
      {
        name: "Ganesh Sahai",
        topic: "P-3 Way To Innovation: Play, Pilot, Production",
        image: "/rewind/THINC/3.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=FZS-RSRl73w&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=5",
      },
      {
        name: "Harsh Goela",
        topic: "Stories in Stock Markets",
        image: "/rewind/THINC/10.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=6DItV7xFDSQ&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=6",
      },
      {
        name: "Nishtha Khushu",
        topic: "The Dancing Dream",
        image: "/rewind/THINC/6.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=M2fb3S9DTj8&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=7",
      },
      {
        name: "Pravishi Das",
        topic: "Be the Sun. Where you are. As who you are.",
        image: "/rewind/THINC/1.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=cuoNArh218Y&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=8",
      },
      {
        name: "Sanghamitra Bose",
        topic: "The Invisible Children - My Ikigai",
        image: "/rewind/THINC/2.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=nd6vtdczD04&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=9",
      },
      {
        name: "Sushma Gaikwad",
        topic: "Awaken The Warrior Within",
        image: "/rewind/THINC/7.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=_pXgXRKmpXE&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=10",
      },
      {
        name: "Tapesh Kumar",
        topic: "Stories of Failure",
        image: "/rewind/THINC/4.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=4hafBaWCifU&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=11",
      },
      {
        name: "Vijay Prakash Sharma",
        topic: "Music is my passion",
        image: "/rewind/THINC/5.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=TGNYCxoUQWU&list=PL2LgFpGtqcj6XxtHVl43VNYAKVwhqI6uz&index=12",
      },
    ],
    gallery: [
      "/gallery/2023-1.jpg",
      "/gallery/2023-2.jpg",
      "/gallery/2023-3.jpg",
    ],
  },
  2024: {
    theme: "Saptaranga",
    description: " Where Spectrums Unite",
    themeImage: "/themes/saptaranga.png",
    speakers: [
      {
        name: "Nikita Sharma",
        topic: "You Are It",
        image: "/prev-speakers/nikita24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=goCrg3YuQmA&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=11",
      },
      {
        name: "Dr Vijender Chauhan",
        topic: "No Success is Monocolor",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=LdK_eQExh1M&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=5",
      },
      {
        name: "Gaurav Juyal",
        topic: "Drapery and How It is Awesome",
        image: "/prev-speakers/gaurav24.png",
        socialLinks: {},
        tedTalkUrl: "",
      },
      {
        name: "Siddharth Jain",
        topic: "Finding Your Superpower",
        image: "/prev-speakers/siddharth24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=l7w3bUkyFb0&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=6",
      },
      {
        name: "Devyani Sharma",
        topic: "Life Driven by Dance",
        image: "/rewind/24/devyani.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=WHZBHGE7b-g&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=7",
      },
      {
        name: "Akshay Chopra",
        topic: "From Nothing to Something & Beyond - Lessons from the trenches",
        image: "/rewind/24/akshay.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=vkTNMjEYoh0&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=12",
      },
      {
        name: "Navin Reddy",
        topic: "The New Way of Learning Tech",
        image: "/rewind/24/navin.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=YBe4EE8QIAU&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=8",
      },
      {
        name: "Vipin Mishra",
        topic: "In The Zone: Finding Fulfillment & Joy",
        image: "/rewind/24/vipin.jpg",
        socialLinks: {},
        tedTalkUrl:
          'https://www.youtube.com/watch?v=YIO37VZ8Zvg&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=3          "https://www.youtube.com/watch?v=YIO37VZ8Zvg&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=3',
      },
      {
        name: "Padamjeet Sehrawat",
        topic: "You Are Your Best Answer",
        image: "/rewind/24/pad.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=pQF-tUolRGc&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=2",
      },
      {
        name: "Nirbhik Datta",
        topic:
          "Unveiling the Subconscious: Exploring the Depths with Mentalism",
        image: "/rewind/24/nirbhik.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=zAKyzgdkOA4&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=1",
      },
      {
        name: "Aditya Goela CFA",
        topic: "How CFA Course Changed my Life",
        image: "/rewind/24/aditya.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=thR82rUg8VI&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=10",
      },
      {
        name: "Dr Kausar Shah",
        topic: "Dark Sides of Confident Leadership",
        image: "/rewind/24/kausar.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=Y7MdhKjFCOk&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=9",
      },
      {
        name: "Shivani Kalra",
        topic: "Because I Said No",
        image: "/rewind/24/shi.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.youtube.com/watch?v=mKexuy238zA&list=PLvllwQSEky3NIo-Xfj-uJWiCoeh8XlNb5&index=5",
      },
    ],
    gallery: ["/bulletin/symp1.png", "/gallery/bulletin/symp2.png", ""],
  },
};
export default function RewindPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  const content = yearContent[selectedYear];
  if (!content) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-2xl">No content available for the selected year.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <TopBanner />
      <section className="bg-[#1A0000] py-4 top-0 z-20">
        <div className="container mx-auto">
          <YearSelector
            onSelectYear={setSelectedYear}
            selectedYear={selectedYear}
          />
        </div>
      </section>
      <AnimatePresence mode="wait">
        <motion.section
          key={selectedYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="py-20 bg-gradient-to-b from-black to-[#1A0000]"
        >
          <div className="container mx-auto px-4">
            <ThemeImage theme={content.theme} imageSrc={content.themeImage} />
            <Description description={content.description} />
            <SpeakersList speakers={content.speakers} />
            {selectedYear === 2024 && <Carousel />}
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
