import { useNode } from "@craftjs/core";
export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="p-3 my-2"
      style={{ backgroundColor: background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};
