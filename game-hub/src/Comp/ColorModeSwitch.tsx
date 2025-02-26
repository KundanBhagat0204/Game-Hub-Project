import { LuMoon, LuSun } from "react-icons/lu";
import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      colorScheme="green"
      onClick={toggleColorMode}
      variant="solid"
      size="sm"
    >
      {colorMode === "light" ? <LuSun /> : <LuMoon />}
    </IconButton>
  );
};

export default ColorModeSwitch;
