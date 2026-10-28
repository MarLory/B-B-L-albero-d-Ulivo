import IconDiamond from "./IconDiamond";

export default function Title({ children, className = "" }) {
  return (
    <h2 className={`text-about font-medium mb-2 ${className}`}>
      {children}
      <IconDiamond />
    </h2>
  );
}

