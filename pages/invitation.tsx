import { Button } from "@mantine/core";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import prisma from "../prisma/prisma";
import FormWish from "../src/components/invitation/FormWish";
import Layouts from "../src/components/layouts/layouts";

interface IProps {
  name: string;
}
const invitation = ({ name }: IProps) => {
  const router = useRouter();

  return (
    <Layouts myKey={router.route} title="Fauzan ❤️ Marisha">
      <div>invitation for {name}</div>
      <FormWish name={name} />
    </Layouts>
  );
};

export default invitation;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log({ env: process.env.NODE_ENV });

  return {
    props: {
      name: ctx.query.to ?? "",
    },
  };
}
