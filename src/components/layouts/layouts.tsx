import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

interface IProps {
  children: any;
  myKey: string;
  title: string;
  className?: string;
}

const Layouts = ({ children, myKey, title, className }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.div
        key={myKey}
        initial={{ y: 900, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        // className="w-full min-h-screen"
        className={`w-full min-h-screen ${className ?? className}`}
      >
        {children}
      </motion.div>
    </>
  );
};
export default Layouts;
