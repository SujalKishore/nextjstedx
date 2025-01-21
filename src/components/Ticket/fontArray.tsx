import { Mona_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Playwrite_AU_SA } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Doto } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Nunito } from "next/font/google";
import { Comic_Neue } from "next/font/google";

const mona = Mona_Sans({
  subsets: ["latin"],
});

const mont = Montserrat({
  subsets: ["latin"],
});

const playwrite = Playwrite_AU_SA({});

const JB = JetBrains_Mono({
  subsets: ["latin"],
});

const doto = Doto({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const nun = Nunito({
  subsets: ["latin"],
});

const comic = Comic_Neue({
  weight: "700",
  subsets: ["latin"],
});

const fontArray = [mona, mont, playwrite, JB, doto, playfair, nun, comic];

export default fontArray;
import { Mona_Sans } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Playwrite_AU_SA } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import { Doto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Nunito } from 'next/font/google';
import { Comic_Neue } from 'next/font/google';

const mona = Mona_Sans({
    subsets:['latin']
})

const mont = Montserrat({
    subsets:['latin']
})

const playwrite = Playwrite_AU_SA({})

const JB = JetBrains_Mono({
    subsets:['latin']
})

const doto = Doto({
    subsets:['latin']
})

const playfair = Playfair_Display({
    subsets:['latin']
})

const nun = Nunito({
    subsets:['latin']
})

const comic = Comic_Neue({
    weight:"700",
    subsets:['latin'],
})

const fontArray = () => {
  const Farray = [mona, mont, playwrite, JB, doto, playfair, nun, comic]
  return (Farray)
}

export default fontArray
