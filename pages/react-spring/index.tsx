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
    </div>
  );
};

export default Home;
