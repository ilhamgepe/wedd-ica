import { Button } from "@mantine/core";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import prisma from "../prisma/prisma";
import FormWish from "../src/components/invitation/FormWish";
import InvitationWellcome from "../src/components/invitation/InvitationWellcome";
import Layouts from "../src/components/layouts/layouts";
import WishList from "../src/components/wishes/WishList";

interface IProps {
  name: string;
}
const invitation = ({ name }: IProps) => {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const router = useRouter();
  return (
    <Layouts myKey={router.route} title="Fauzan ❤️ Marisha">
      {!invitationOpen ? (
        <InvitationWellcome />
      ) : (
        <div>
          <div>invitation for {name}</div>
          <FormWish name={name} />
          <WishList />
        </div>
      )}
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
