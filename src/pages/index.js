import Link from "next/link";
const HomePage = () => (
  <div>
    <h1>This is HomePage</h1>
    <ul>
      <li>
        <Link href="portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="clients">Client</Link>
      </li>
      <li></li>
    </ul>
  </div>
);

export default HomePage;
