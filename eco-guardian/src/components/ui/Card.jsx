import { forwardRef } from "react";

const Card = forwardRef(
  (
    {
      children,
      elevated = true,
      className = "",
      header,
      footer,
      onClick,
      interactive = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = elevated ? "eco-card-elevated" : "eco-card";
    const interactiveClass = interactive ? "cursor-pointer hover:border-eco-400 dark:hover:border-eco-500" : "";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${interactiveClass} ${className}`}
        onClick={onClick}
        {...props}
      >
        {header && (
          <>
            <div className="mb-4">{header}</div>
            <div className="eco-divider mb-4"></div>
          </>
        )}

        <div>{children}</div>

        {footer && (
          <>
            <div className="eco-divider mt-4 mb-4"></div>
            <div className="mt-4">{footer}</div>
          </>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
