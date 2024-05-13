
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
      {
        users.map((user: { _id: string, name: string }): any => <div key={user._id}>{user.name}</div>)
      }
      <Link href="/about">About page</Link>
    </main>
  );
}
