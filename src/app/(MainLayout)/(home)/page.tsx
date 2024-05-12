import Link from "next/link";
import getPosts from '@/lib/_actions/postActions'


export default async function Home() {
  const res = await getPosts()
  console.log(res)
  return (
    <main>
      <Link href="/about">About page</Link>
    </main>
  );
}
