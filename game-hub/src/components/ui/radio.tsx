import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";
import * as React from "react";

export interface RadioProps extends ChakraRadioGroup.ItemProps {
  rootRef?: React.Ref<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { inputProps, rootRef, ...rest } = props;
    return (
      <ChakraRadioGroup.Item {...rest}>
        <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
        <ChakraRadioGroup.ItemIndicator />
      </ChakraRadioGroup.Item>
    );
  }
);

export const RadioGroup = ChakraRadioGroup.Root;
