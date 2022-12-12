import { useState, useEffect } from "react";
import { Divider, Text } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { Terminal, Terminal2 } from "tabler-icons-react";
import Fireworks from "../src/components/fireworks/Fireworks";
import Layouts from "../src/components/layouts/layouts";
import TerminalCode from "../src/components/terminal/TerminalCode";
import TerminalNav from "../src/components/terminal/TerminalNav";
import TerminalRun from "../src/components/terminal/TerminalRun";

interface IName {
  name: string;
}

const Home = ({ name }: IName) => {
  const [typedFinish, setTypedFinish] = useState(false);
  const [loadingFinish, setLoadingFinish] = useState(false);
  const router = useRouter();

  const handleTypedFinished = (e: boolean) => {
    setTypedFinish(e);
  };
  const handleLoadingFinished = (e: boolean) => {
    setLoadingFinish(e);
  };

  useEffect(() => {
    if (loadingFinish) {
      setTimeout(() => {
        router.push(`/invitation?to=${name}`);
      }, 1000);
    }
    router.prefetch("/invitation");
  }, [loadingFinish]);

  return (
    <Layouts myKey={router.route}>
      <div className="h-screen bg-blackEditor text-gray-300 relative">
        <div>
          <TerminalNav />
        </div>
        <div id="wrapperSection" className={`flex flex-col h-[60vh]`}>
          <div>
            <TerminalCode
              name={name}
              handleTypedFinished={(e: boolean) => handleTypedFinished(e)}
            />
          </div>
        </div>
        {typedFinish && (
          <div>
            <Divider label="terminal" labelPosition="center" />
            <div className="flex items-center px-2 justify-between">
              <Terminal />
              <div className="flex items-center ">
                <Terminal2 />
                <Text size={"xs"}>bash</Text>
              </div>
            </div>
            <TerminalRun
              handleLoadingFinished={(e: boolean) => handleLoadingFinished(e)}
            />
          </div>
        )}
      </div>
      <Fireworks fires={loadingFinish} />
    </Layouts>
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
