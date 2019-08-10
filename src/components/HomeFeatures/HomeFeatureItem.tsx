import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  heading?: string;
  subheading?: string;
}

const HomeFeatureItem: React.FC<IProps> = ({
  children,
  heading,
  subheading
}) => {
  return (
    <div className={`column ${styles.column}`}>
      <ScrollAnimation animateIn="fadeIn" duration={1} delay={400}>
        <div className={styles.icon}>{children}</div>

        <div className={styles.heading}>{heading}</div>

        <div className={styles.subheading}>{subheading}</div>
      </ScrollAnimation>
    </div>
  );
};
export default HomeFeatureItem;
