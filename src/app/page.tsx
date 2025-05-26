"use client";

import { Center, Progress } from "@chakra-ui/react";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      redirect("/privacy-policy");
    }, 1000);
  }, []);
  return (
    <Center w={"100vw"} h="100vh">
      <Progress.Root maxW="240px" w={"240px"} value={null}>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Center>
  );
}
