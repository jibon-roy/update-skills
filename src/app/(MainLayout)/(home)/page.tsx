
import Link from "next/link";



export default async function Home() {
  const res = await fetch("http://localhost:3000/api/users")
  console.log(res.json())
  return (
    <main>
      <Link href="/about">About page</Link>
    </main>
  );
}
