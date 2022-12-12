import React from "react";
import { Center, Text } from "@mantine/core";
import { BrandReact, X } from "tabler-icons-react";
import TerminalCode from "../src/components/terminal/TerminalCode";

const test = () => {
  return (
    <div className="h-screen w-full bg-red-500">
      <TerminalCode name="ilham" />
    </div>
  );
};

export default test;
