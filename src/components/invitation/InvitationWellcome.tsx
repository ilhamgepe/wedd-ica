import { BackgroundImage, createStyles, Text } from "@mantine/core";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const InvitationWellcome = () => {
  useEffect(() => {}, []);
  return (
    <BackgroundImage src="./ilustrasi.png" className="relative h-screen">
      <motion.div
        initial={{ x: 900 }}
        animate={{ x: 0, transition: { duration: 1 } }}
        className="absolute left-0 right-0 m-auto"
      >
        <div>
          <Text
            className="font-Athalita text-amber-500 text-2xl mt-5"
            align="center"
          >
            Aslam Fauzan
            <br />
            ❤️
            <br />
            Marisha
          </Text>
        </div>
      </motion.div>
    </BackgroundImage>
  );
};

export default InvitationWellcome;
