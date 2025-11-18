import * as React from "react";

export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type ToastActionElement = React.ReactNode;

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ title, description, open = true, onOpenChange }, ref) => {
    React.useEffect(() => {
      if (!open && onOpenChange) {
        onOpenChange(false);
      }
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
      <div ref={ref} role="alert" aria-live="assertive" aria-atomic="true" className="toast">
        {title && <div className="toast-title">{title}</div>}
        {description && <div className="toast-description">{description}</div>}
      </div>
    );
  }
);

Toast.displayName = "Toast";
