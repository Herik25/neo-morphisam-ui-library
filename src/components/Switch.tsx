import * as React from "react";
import { Switch } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const switchRoot = cva(
  "relative inline-flex items-center h-6 w-12 rounded-full cursor-pointer select-none overflow-hidden box-border bg-background shadow-inset border-highlight data-[checked]:bg-primary data-[checked]:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
);

const switchThumb = cva(
  "absolute top-1/2 -translate-y-1/2 left-0.5 h-5 w-5 rounded-full box-border bg-background border border-highlight shadow-inset transition-[left] duration-300 ease-out data-[checked]:left-[calc(100%-1.01rem-0.25rem)] after:absolute after:top-1/2 after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-muted-foreground data-[checked]:after:bg-primary"
);

export interface NeuSwitchProps
  extends React.ComponentPropsWithoutRef<typeof Switch.Root>,
    VariantProps<typeof switchRoot> {}

export function NeuSwitch({ className, ...props }: NeuSwitchProps) {
  return (
    <Switch.Root {...props} className={clsx(switchRoot(), className)}>
      <Switch.Thumb className={switchThumb()} />
    </Switch.Root>
  );
}
