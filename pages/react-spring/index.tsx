import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/react-spring/useSpringSample">
        <a>useSpringSample1 下から文字浮き出る</a>
      </Link>
    </div>
  );
};

export default Home;
