import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Home;
