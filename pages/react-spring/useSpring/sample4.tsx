import { useSpring, animated } from "@react-spring/web";
import { NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

const Loader = styled(animated.div)({
  width: 50,
  height: 50,
  borderRadius: "50%",
  border: "5px solid #aaa",
  // borderの一番上を透明化
  // https://developer.mozilla.org/ja/docs/Web/CSS/border-top-color
  borderTopColor: "transparent",
});

const Sample4: NextPage = () => {
  const styles1 = useSpring({
    from: {
      rotate: "0deg",
    },
    to: {
      rotate: "360deg",
    },
    // ループ 永遠と繰り返す
    loop: true,
    config: {
      duration: 1000,
    },
  });

  const styles2 = useSpring({
    from: {
      rotate: "0deg",
    },
    to: {
      rotate: "360deg",
    },
    // ループしたら 元に戻る
    loop: {
      reverse: true,
    },
    config: {
      duration: 1000,
    },
  });

  const styles3 = useSpring({
    from: {
      rotate: "0deg",
      borderColor: "red",
      borderTopColor: "transparent",
    },
    to: {
      rotate: "360deg",
      borderColor: "blue",
      borderTopColor: "transparent",
    },
    // ループ 永遠と繰り返す
    loop: true,
    config: {
      duration: 1000,
    },
  });

  return (
    <div>
      <Link href="/react-spring">
        <a>戻る</a>
      </Link>
      <h1>useSpring sample4</h1>
      <p>loop</p>
      <Loader style={styles1} />
      <br />
      <p>loop reverse</p>
      <Loader style={styles2} />
      <p>color red → blue</p>
      <Loader style={styles3} />
    </div>
  );
};

export default Sample4;
