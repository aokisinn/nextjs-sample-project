import { useSpring, animated } from "@react-spring/web";
import { NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";

const Sample2: NextPage = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = useCallback(() => {
    setToggle(!toggle);
  }, [setToggle, toggle]);

  const toggleStyle = useMemo(() => {
    return toggle
      ? {
          opacity: 0,
          color: "red",
          translateY: 100,
          scale: 0.1,
        }
      : {
          opacity: 1,
          color: "blue",
          translateY: 0,
          scale: 2,
        };
  }, [toggle]);

  // from toは必須ではない
  const styles = useSpring({ ...toggleStyle });

  return (
    <div>
      <Link href="/react-spring">
        <a>戻る</a>
      </Link>
      <h1>useSpring sample2</h1>
      <button onClick={handleClick}>切り替え</button>
      <div style={{ textAlign: "center" }}>
        <animated.h1 style={styles}>Hey!!!!!</animated.h1>
      </div>
    </div>
  );
};

export default Sample2;
