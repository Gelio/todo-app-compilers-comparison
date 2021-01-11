import { FunctionComponent, MouseEventHandler } from "react";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  disabled,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      type="submit"
      className={`border rounded p-1.5 ${
        disabled
          ? "bg-blue-200 text-gray-400 cursor-default"
          : "bg-blue-400 hover:bg-blue-300"
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
