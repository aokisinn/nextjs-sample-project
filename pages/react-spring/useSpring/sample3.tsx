import { useSpring, animated } from "@react-spring/web";
import { NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

const Card = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  borderRadius: 20,
  backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
});

const BlueCard = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  borderRadius: 20,
  backgroundImage: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
});

// グラデショーンはここのページを参考
// https://webgradients.com/
const Sample3: NextPage = () => {
  const [flipped, setFlipped] = React.useState(false);

  const cardAnimatedStyle = useMemo(() => {
    return flipped
      ? { opacity: 1, rotateY: "180deg" }
      : { opacity: 0, rotateY: "0deg" };
  }, [flipped]);

  const styles = useSpring({
    ...cardAnimatedStyle,
  });

  return (
    <div>
      <Link href="/react-spring">
        <a>戻る</a>
      </Link>
      <h1>useSpring sample3</h1>
      <div
        className="App"
        style={{
          perspective: "500px",
        }}
        onClick={() => {
          setFlipped(!flipped);
        }}
      >
        <Card style={styles} />
        <BlueCard
          style={{
            // toでstylesの値が取れる
            opacity: styles.opacity.to((o) => 1 - o),
            rotateY: styles.rotateY,
          }}
        />
      </div>
    </div>
  );
};

export default Sample3;
