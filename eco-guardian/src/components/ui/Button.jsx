import { forwardRef } from "react";

const variantClasses = {
  primary: "eco-btn-primary",
  secondary: "eco-btn-secondary",
  outline: "eco-btn-outline",
  danger: "eco-btn-danger",
};

const sizeClasses = {
  sm: "eco-btn-sm",
  md: "eco-btn",
  lg: "eco-btn-lg",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      loading = false,
      icon: Icon,
      ...props
    },
    ref
  ) => {
    const baseClasses = `${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={baseClasses}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          {loading && (
            <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
          )}
          {Icon && !loading && <Icon className="w-5 h-5" />}
          {children}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
