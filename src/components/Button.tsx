import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex justify-center items-center cursor-pointer hover:opacity-90 focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-2 border-border shadow-raised bg-gradient-to-tl disabled:opacity-50 disabled:pointer-events-none active:shadow-inset transition-all duration-250 ease-out active:scale-97",
  {
    variants: {
      variant: {
        default: "from-muted/5 to-muted/25",
        primary: "text-primary from-primary/5 to-primary/25",
        desctructive: "text-destructive from-destructive/5 to-destructive/25",
        warning: "text-warning from-warning/5 to-warning/25",
      },
      size: {
        default: "h-12 px-4",
        icon: "h-12 w-12",
      },
      shape: {
        default: "rounded-xl",
        circle: "rounded-full",
      },
    },

    defaultVariants: {
      shape: "default",
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

function Button(props: ButtonProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(
      buttonVariants({
        variant: props.variant,
        size: props.size,
        shape: props.shape,
      }),
      props.className
    ),
    tabIndex: 0,
  });

  const el = useRender({
    defaultTagName: "button",
    render: props.render,
    props: mergedProps,
  });

  return el;
}

export default Button;
