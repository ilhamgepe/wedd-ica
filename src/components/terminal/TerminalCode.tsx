import { Prism } from "@mantine/prism";
import { ScrollArea } from "@mantine/core";
import React, { useEffect, useState } from "react";

interface Iprops {
  name: string;
  handleTypedFinished: (e: boolean) => void;
}
const TerminalCode = ({ name, handleTypedFinished }: Iprops) => {
  const [typed, setTyped] = useState("");
  const text = `import {🌏} from "./happiness"
const {🧑,👧}=🌏
🧑.name = 'Aslam Fauzan'
👧.name = 'Marisha Mufqi'

const wedding = new Wedding(🧑,👧)
wedding.setDate('March 26, 2023 08:00:00')
wedding.setLocation('tanggerang')
wedding.generateInvitation('${name}')`;

  useEffect(() => {
    if (typed.length === text.length) {
      handleTypedFinished(true);
    }
    const timeout = setTimeout(() => {
      setTyped(text.slice(0, typed.length + 1));
    }, 40);
    return () => {
      clearTimeout(timeout);
    };
  }, [typed]);
  return (
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
  );
};

export default TerminalCode;
