// components/user/Button.js
import { useNode } from "@craftjs/core";
const sizeMap = {
  small: "btn-sm",
  medium: "",
  large: "btn-lg",
};

const variantMap = {
  contained: "btn-primary",
  outlined: "btn-outline-primary",
  text: "btn-link",
};

export const Button = ({ size, variant, color, children }) => {
  const sizeClass = sizeMap[size] || "";
  const variantClass = variantMap[variant] || "btn-primary";
  const colorClass = color ? `btn-${color}` : "";
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      className={`btn ${sizeClass} ${variantClass} ${colorClass}`}
    >
      {children}
    </button>
  );
};
