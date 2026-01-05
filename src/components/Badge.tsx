import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const BadgeVariants = cva(
  "inline-flex justify-center rounded-full items-center border-2 border-background px-3 py-1 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground shadow-raised hover:shadow-inset",
        primary:
          "bg-linear-to-tl from-primary/5 to-primary/25 text-primary shadow-raised hover:shadow-inset",
        desctructive:
          "bg-linear-to-tl from-destructive/5 to-destructive/25 text-destructive shadow-raised hover:shadow-inset",
        warning:
          "bg-linear-to-tl from-warning/5 to-warning/25 text-warning shadow-raised hover:shadow-inset",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof BadgeVariants> {}

function Badge(props: BadgeProps) {
  const mergedProps = mergeProps(props, {
    className: BadgeVariants({
      variant: props.variant,
      className: props.className,
    }),
  });

  const el = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return el;
}

export default Badge;
