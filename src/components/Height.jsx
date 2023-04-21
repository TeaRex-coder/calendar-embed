import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Height = ({ maxHeight, children }) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    height: `${height}px`,
  };

  if (height <= maxHeight) {
    styles.overflow = "visible";
  }

  return <div style={styles}>{children}</div>;
};

Height.propTypes = {
  maxHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Height;
