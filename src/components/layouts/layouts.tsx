import React from "react";
import { motion } from "framer-motion";

interface IProps {
  children: any;
  myKey: string;
}

const Layouts = ({ children, myKey }: IProps) => {
  console.log({ myKey });

  return (
    <motion.div
      key={myKey}
      initial={{ y: 900, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
};
export default Layouts;
