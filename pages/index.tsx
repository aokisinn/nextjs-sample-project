import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      {/* TODO Style */}
      <Link href="/react-spring">
        <a>react-spring</a>
      </Link>
    </div>
  );
};

export default Home;
