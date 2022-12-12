import React, { useState, useEffect } from "react";
import { Terminal, Terminal2 } from "tabler-icons-react";
import { Text, ScrollArea } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { useCounter } from "@mantine/hooks";

interface Iprops {
  handleLoadingFinished: (e: boolean) => void;
}

const TerminalRun = ({ handleLoadingFinished }: Iprops) => {
  const [loading, loadingHandlers] = useCounter(0, { min: 0, max: 100 });
  const [text, setText] = useState("");

  const textTerminal = `$ node wedding
  > generating invitation.....
  > wait - ${loading}%`;

  useEffect(() => {
    if (loading == 100) {
      handleLoadingFinished(true);
    }
    const textTimeout = setTimeout(() => {
      setText(textTerminal.slice(0, text.length + 1));
    }, 50);

    if (text.length >= 56) {
      const loadingTimeout = setTimeout(() => {
        loadingHandlers.increment();
      }, Math.floor(Math.random() * 50));
      return () => clearTimeout(loadingTimeout);
    }

    return () => {
      clearTimeout(textTimeout);
    };
  }, [text, loading]);

  return (
    <>
      <div className="p-3 font-thin terminalFont">
        <ScrollArea>
          <Prism language="bash" colorScheme="dark" noCopy trim fz={12}>
            {text}
          </Prism>
        </ScrollArea>
      </div>
    </>
  );
};

export default TerminalRun;
