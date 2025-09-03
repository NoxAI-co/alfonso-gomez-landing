import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pacto-azul focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:-translate-y-0.5 shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-pacto-azul text-white hover:bg-[#2a2d7a] font-heading",
        outline: "border-2 border-pacto-amarillo bg-pacto-amarillo text-black hover:bg-[#e09a2a] font-heading",
        secondary: "bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-100 font-heading",
        destructive: "bg-pacto-rojo text-white hover:bg-[#d1220a] font-heading",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button"; 