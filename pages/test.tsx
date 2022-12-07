import React from "react";
import { Center, Text } from "@mantine/core";
import { BrandReact, X } from "tabler-icons-react";

const test = () => {
  return (
    <div className="bg-blackEditor text-gray-300 h-screen grid place-items-center">
      {/* navbar */}
      <div className="">
        <Text>hello world</Text>
      </div>
      {/* code */}
      <div className="bg-green-500 h-full w-full">
        <Text>hello world</Text>
      </div>
      {/* terminal */}
      <div className="bg-yellow-500 h-full w-full">
        <Text>hello world</Text>
      </div>
    </div>
  );
};

export default test;
