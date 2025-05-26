import { Center, Progress } from "@chakra-ui/react";

export const SuspenseLoading = () => {
  return (
    <Center w={"100vw"} h="100vh">
      <Progress.Root maxW="240px" w={"240px"} value={null}>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Center>
  );
};
