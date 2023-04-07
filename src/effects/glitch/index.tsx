import { Stack } from "./style";

type GlitchProps = {
    index: number;
    stacks: number;
    children: any;
  }
  
 export function Glitch({ index, stacks, children, ...props }: GlitchProps) {
    return (
      <Stack index={index} stacks={stacks} {...props}>
        {children}
      </Stack>
    );
  };