import { Button } from "@mantine/core";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layouts from "../src/components/layouts/layouts";

interface IProps {
  name: string;
}
const invitation = ({ name }: IProps) => {
  const router = useRouter();

  return (
    <Layouts myKey={router.route}>
      <div>invitation for {name}</div>
      <Button onClick={() => router.back()}>back</Button>
    </Layouts>
  );
};

export default invitation;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      name: ctx.query.to ?? "",
    },
  };
}
