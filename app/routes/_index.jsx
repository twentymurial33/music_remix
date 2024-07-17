import { Link } from "@remix-run/react";
import Header from "../components/Header";

export default function Index() {
  return (
    <main>
    <h1>Welcome to Remix!</h1>
    <Header/>
    <Link to="/music">Music</Link>
    </main>
  );
}