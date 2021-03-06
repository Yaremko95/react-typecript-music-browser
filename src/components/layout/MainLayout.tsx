import React from "react";
import { createUseStyles } from "react-jss";
import { RouteComponentProps } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
function MainLayout(props: { children: any } & RouteComponentProps) {
  const useStyles = createUseStyles({
    wrapper: {
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
    },
    container: {
      backgroundImage:
        " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://wallpapercave.com/wp/wp4132672.jpg)",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  });
  const classes = useStyles();
  const spring = useSpring({
    from: { opacity: 0, transform: "scale(1.3)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  return (
    <div className={classes.wrapper}>
      <animated.div className={classes.container} style={spring}>
        {props.children}
      </animated.div>
    </div>
  );
}

export default MainLayout;
