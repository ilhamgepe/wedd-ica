import { Center, Divider, ScrollArea, Text } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import { Prism } from "@mantine/prism";
import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import { BrandReact, Terminal, Terminal2, X } from "tabler-icons-react";

interface IName {
  name: string;
}

const Home = ({ name }: IName) => {
  const [typed, setTyped] = useState("");
  const [terminal1, setTerminal1] = useState("");
  const [loading, loadingHandlers] = useCounter(0, { min: 0, max: 10 });
  const textTerminal1 = `$ node wedding`;
  const text1 = `import {🌏} from "./happiness"
const {🧑,👧}=🌏
🧑.name = 'Aslam Fauzan'
👧.name = 'Marisha Mufqi'

const wedding = new Wedding(🧑,👧)
wedding.setDate('March 26, 2023 08:00:00')
wedding.setLocation('tanggerang')
wedding.generateInvitation('${name}')`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTyped(text1.slice(0, typed.length + 1));
    }, 50);
    console.log(text1.length);

    return () => {
      clearTimeout(timeout);
    };
  }, [typed]);

  return (
    <div className="min-h-screen bg-blackEditor text-gray-300 relative">
      <div className=" ">
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
      </div>
      <div id="wrapperSection" className="flex flex-col h-[60vh]">
        <ScrollArea className="flex-1">
          <Prism
            language="typescript"
            colorScheme="dark"
            withLineNumbers
            noCopy
            trim
            fz={12}
          >
            {typed}
          </Prism>
        </ScrollArea>
        <div className="">
          <Divider label="terminal" labelPosition="center" />
          <div className="flex items-center px-2 justify-between">
            <Terminal />
            <div className="flex items-center ">
              <Terminal2 />
              <Text>bash</Text>
            </div>
          </div>
          <div className="p-3 font-thin terminalFont">
            <Text>{terminal1}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      name: ctx.query.to ?? "",
    },
  };
}
