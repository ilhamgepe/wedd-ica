import React from "react";
import { BrandReact, X } from "tabler-icons-react";
import { Text } from "@mantine/core";

const TerminalNav = () => {
  return (
    <nav className="p-2 w-full h-full ">
      <div className="flex gap-2 items-center">
        <div className="bg-red-500 w-4 h-4 rounded-full"></div>
        <div className="bg-yellow-500 w-4 h-4 rounded-full"></div>
        <div className="bg-green-500 w-4 h-4 rounded-full"></div>
      </div>
      <div className="flex mt-2 bg-gray-900">
        <div className=" p-2 flex items-center">
          <BrandReact height={16} className="text-blue-400" />
          <Text>wedding.ts</Text>
          <X height={18} />
        </div>
        <div className="bg-slate-800/60 p-2 flex items-center">
          <BrandReact height={16} className="text-blue-400" />
          <Text size={"lg"}>invitations.ts</Text>
        </div>
      </div>
    </nav>
  );
};

export default TerminalNav;
