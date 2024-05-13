
import Link from "next/link";



export default async function Home() {
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/api/users")
    return res.json()
  }
  const users = await fetchUsers();
  console.log(users)
  return (
    <main>
      <Link href="/about">About page</Link>
    </main>
  );
}
