import * as React from "react";
import { Tabs } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const tabsRootVariant = cva("w-full");
interface TabsRootProps
  extends React.ComponentProps<typeof Tabs.Root>,
    VariantProps<typeof tabsRootVariant> {}

export function TabsRoot({ className, ...props }: TabsRootProps) {
  return <Tabs.Root {...props} className={tabsRootVariant({ className })} />;
}

const tabsListVariants = cva(
  "relative inline-flex h-12 items-center justify-center rounded-2xl bg-linear-to-tl from-background to-highlight/75 p-1 text-muted-foreground shadow-raised border-2 border-border gap-4"
);

interface TabsListProps
  extends React.ComponentProps<typeof Tabs.List>,
    VariantProps<typeof tabsListVariants> {}

export function TabsList({ className, ...props }: TabsListProps) {
  return <Tabs.List {...props} className={tabsListVariants({ className })} />;
}

const tabsTabVariant = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all duration-200 cursor-pointer relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-foreground aria-selected:bg-background aria-selected:text-foreground aria-selected:shadow-inset active:scale-[0.97] active:shadow-inner"
);

interface TabsTabProps
  extends React.ComponentProps<typeof Tabs.Tab>,
    VariantProps<typeof tabsTabVariant> {}

export function TabsTab({ className, ...props }: TabsTabProps) {
  return <Tabs.Tab {...props} className={tabsTabVariant({ className })} />;
}

const tabsIndicatorVariants = cva(
  "absolute rounded-sm bg-background shadow-raised transition-all duration-200 border border-background"
);

interface TabsIndicatorProps
  extends React.ComponentProps<typeof Tabs.Indicator>,
    VariantProps<typeof tabsIndicatorVariants> {}

export function TabsIndicator({ className, ...props }: TabsIndicatorProps) {
  return (
    <Tabs.Indicator
      {...props}
      className={tabsIndicatorVariants({ className })}
    />
  );
}

const tabsPanelVariants = cva(
  "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
);

interface TabsPanelProps
  extends React.ComponentProps<typeof Tabs.Panel>,
    VariantProps<typeof tabsPanelVariants> {}

export function TabsPanel({ className, ...props }: TabsPanelProps) {
  return <Tabs.Panel {...props} className={tabsPanelVariants({ className })} />;
}
