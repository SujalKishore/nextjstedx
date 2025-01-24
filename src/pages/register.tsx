import React from "react";
import {Mona_Sans} from 'next/font/google';
import Ticket from "@/components/Ticket/Ticket";
const mona = Mona_Sans({
  subsets:['latin'],
});
const Register: React.FC = () => {
  return (
    <div className={mona.className}>
      <Ticket />
    </div>
  );
};
export default Register;