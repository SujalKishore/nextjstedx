import { Mona_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Playwrite_AU_SA } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Doto } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Nunito } from "next/font/google";
import { Comic_Neue } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { Lexend_Giga } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Cormorant } from "next/font/google";
import { BioRhyme } from "next/font/google";
import { Oswald } from "next/font/google";
import { Roboto } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Jersey_10 } from "next/font/google";
import { Macondo_Swash_Caps } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Caveat } from "next/font/google";
import { Lilita_One } from "next/font/google";
import { Barlow } from "next/font/google";
import { Anton } from "next/font/google";
import { Comfortaa } from "next/font/google";

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

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight:"700"
});

const lex = Lexend_Giga({
  subsets: ["latin"],
});

const space = Space_Mono({
  subsets: ["latin"],
  weight:"700",
});

const cormo = Cormorant({
  subsets: ["latin"],
  weight:"700",
});

const bio = BioRhyme({
  subsets: ["latin"],
  weight:"700",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight:"700",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight:"700",
});

const jose = Josefin_Sans({
  subsets: ["latin"],
  weight:"700",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight:"400",
});

const maca = Macondo_Swash_Caps({
  subsets: ["latin"],
  weight:"400",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight:"400",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight:"700",
});

const lili = Lilita_One({
  subsets: ["latin"],
  weight:"400",
});

const bar = Barlow({
  subsets: ["latin"],
  weight:"400",
});

const ant = Anton({
  subsets: ["latin"],
  weight:"400",
});

const com = Comfortaa({
  subsets: ["latin"],
  weight:"400",
});

const fontArray = [com, ant, bar, lili, caveat, bebas, maca, jersey, jose, roboto, oswald, bio, cormo, space, lex, ubuntu, mont, playwrite, JB, doto, playfair, nun, comic, mona];

export default fontArray;
