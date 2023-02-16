import classNames from "classnames";
import "./Grid.css";

export const Grid: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid-bg ba-grid anim">
      <div className="inner">{children}</div>
    </div>
  );
};
