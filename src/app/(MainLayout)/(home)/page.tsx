import Link from "next/link";
import GetPosts from '@/lib/_actions/postActions'


export default async function Home() {
  const res = await GetPosts()
  console.log(res)
  return (
    <main>
      <Link href="/about">About page</Link>
    </main>
  );
}
