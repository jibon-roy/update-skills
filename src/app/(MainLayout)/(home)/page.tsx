
import Banner from "@/components/component/home/banner/banner";
import axios from "axios";
import Link from "next/link";



export default async function Home() {

  const fetchUsers = async () => {
    const res = await axios.get(`${process.env.HOST_URI}/api/users`)
    return res.data
  }
  const users = await fetchUsers();
  console.log(users)
  return (
    <main>
      <Banner />
      {
        users.map((user: { _id: string, name: string }): any => <div key={user._id}>{user.name}</div>)
      }
      <Link href="/about">About page</Link>
    </main>
  );
}
