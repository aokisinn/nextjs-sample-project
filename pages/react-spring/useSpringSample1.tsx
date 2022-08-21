import { useSpring, animated } from "@react-spring/web";
import React from "react";

export default function useSpringSample1() {
  const styles = useSpring({
    from: {
      opacity: 0,
      color: "pink",
      translateY: 20,
      scale: 0.8,
    },
    to: {
      opacity: 1,
      color: "blue",
      translateY: 0,
      scale: 1,
    },
  });

  return (
    <div>
      <h1>useSpring sample</h1>
      <div style={{ textAlign: "center" }}>
        {/* animated　タグで指定 */}
        <animated.h1 style={styles}>Hey!!!!!</animated.h1>
      </div>
    </div>
  );
}
