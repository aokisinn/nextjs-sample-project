import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      {/* TODO Styles */}
      <Link href="/react-spring/useSpring/sample1">
        <a>useSpringSample1 下から文字浮き出る</a>
      </Link>
      <br />
      <Link href="/react-spring/useSpring/sample2">
        <a>useSpringSample2 ボタン押してアニメーション</a>
      </Link>
      <br />
      <Link href="/react-spring/useSpring/sample3">
        <a>useSpringSample3 card押して反転</a>
      </Link>
      <br />
      <Link href="/react-spring/useSpring/sample4">
        <a>useSpringSample4 loader</a>
      </Link>
      <br />
      <Link href="/react-spring/useSpring/sample5">
        <a>useSpringSample5 スタイルメーカ</a>
      </Link>
      <br />
      <Link href="/react-spring/useSpring/sample6">
        <a>useSpringSample6 ランダム 参考コード</a>
      </Link>
      <br />
      <Link href="/react-spring/useSpring/sample7">
        <a>useSpringSample7 オリジナル</a>
      </Link>
    </div>
  );
};

export default Home;
