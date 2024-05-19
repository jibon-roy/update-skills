
import { VideoContainer } from "@/components/component/VideoContainer";
import Banner from "@/components/component/home/banner/banner";
import FeaturedCourse from "@/components/component/home/courses/featuredCourse";
import { Navigation } from "@/components/component/navigation";
// import axios from "axios";




export default async function Home() {

  // const fetchUsers = async () => {
  //   const res = await axios.get(`${process.env.HOST_URI}/api/users`)
  //   return res.data
  // }
  // const users = await fetchUsers();
  // console.log(users)
  return (
    <main>
      <Navigation />
      <Banner />
      <FeaturedCourse />
      {/* {users.map((user: { _id: string, name: string }): any => <div key={user._id}>{user.name}</div>)} */}
      {/* <Link href="/about">About page</Link> */}
    </main>
  );
}
