import { cx } from "@/utils/cx";

export interface ButtonProps extends JSX.HtmlButtonTag {
  intent?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link";
  size?: "xs" | "sm" | "lg" | "icon" | "icon-sm";
  children?: any;
}
export const Button = ({ intent, size, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      class={buttonStyles({ intent, size, class: props.class })}
    >
      {children}
    </button>
  );
};

export const buttonStyles = (props: ButtonProps) => {
  return cx(
    "text-md focus-visible:outline-border group inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 font-medium transition-colors first-letter:capitalize focus-visible:outline focus-visible:outline-offset-1 disabled:pointer-events-none disabled:opacity-50",
    props.intent === "primary" &&
      "to-primary-dark from-primary text-primary-foreground hover:to-primary hover:from-accent-2 bg-gradient-to-br font-semibold shadow focus-visible:ring-offset-1",
    props.intent === "secondary" &&
      "bg-muted text-muted-foreground hover:bg-muted font-medium",
    props.intent === "outline" &&
      "text-accent-foreground ring-border hover:bg-muted hover:ring-ring bg-transparent ring-1",
    props.intent === "ghost" &&
      "text-accent-foreground hover:bg-accent bg-transparent",
    props.intent === "destructive" &&
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    props.intent === "link" &&
      "text-accent-foreground hover:text-foreground hover:decoration-primary p-0 font-light underline-offset-4 hover:underline hover:drop-shadow-sm",
    props.size === "lg" && "h-11 rounded-md px-6",
    props.size === "sm" && "h-8 rounded-md px-3.5 text-sm",
    props.size === "xs" && "h-6 rounded-md px-2.5 text-xs",
    props.size === "icon" && "h-10 w-10 p-0",
    props.size === "icon-sm" && "h-6 w-6 p-0",
    props.class,
  );
};
