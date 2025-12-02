import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button-variants";

/**
 * ✅ IMPORTANT FIX:
 * We MUST use ComponentPropsWithoutRef instead of ButtonHTMLAttributes
 * to avoid `size` and `variant` being typed as `string`
 */
export interface ButtonProps
  extends Omit<
      React.ComponentPropsWithoutRef<"button">,
      "size" | "color"
    >,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
export default Button;
