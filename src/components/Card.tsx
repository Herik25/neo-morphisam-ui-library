import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("rounded-2xl border-2 border-border", {
  variants: {
    variant: {
      default: "shadow-raised",
      inset: "shadow-inset",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CardProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

export function Card(props: CardProps) {
  const mergedProps = mergeProps(props, {
    className: cardVariants({ variant: props.variant }),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
}

// card Header

const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");

interface CardHeaderProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

export function CardHeader(props: CardHeaderProps) {
  const mergedProps = mergeProps(props, {
    className: cardHeaderVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
}

// Card Title

const cardTitleVariants = cva("font-semibold leading-none tracking-tight");

interface CardTitleProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

export function CardTitle(props: CardTitleProps) {
  const mergedProps = mergeProps(props, {
    className: cardTitleVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
}

// Card Desc

const cardDescriptionVariants = cva(
  "font-semibold leading-none tracking-tight"
);

interface CardDescriptionProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardDescriptionVariants> {}

export function CardDescription(props: CardDescriptionProps) {
  const mergedProps = mergeProps(props, {
    className: cardDescriptionVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
}

// Card Content

const cardContentVariants = cva("p-6 pt-0");

interface CardContentProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardContentVariants> {}

export function CardContent(props: CardContentProps) {
  const mergedProps = mergeProps(props, {
    className: cardContentVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
}

// Card Footer

const cardFooterVariants = cva("p-6 pt-0");

interface CardFooterProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardFooterVariants> {}

export function CardFooter(props: CardFooterProps) {
  const mergedProps = mergeProps(props, {
    className: cardFooterVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
  return element;
}
