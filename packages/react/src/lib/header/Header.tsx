import styles from "./Header.module.css";
import classNames from "classnames";
import laravel from "./assets/laravel.svg";
import { Grid } from "../Grid/Grid";
interface HeaderProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    React.PropsWithChildren {
  heading: string;
}
export const Header: React.FC<HeaderProps> = ({
  children,
  className,
  heading,
  ...rest
}) => {
  return (
    <header>
      <Grid>
        <div className="flex flex-row gap-6 p-20">
          <section className={classNames("flex flex-col gap-3")}>
            <h3
              className={classNames(
                "font-mono font-extrabold",
                "text-5xl text-slate-400",
                styles["text-shadow"]
              )}
            >
              {heading}
            </h3>
            {children}
          </section>
        </div>
      </Grid>
    </header>
  );
};
