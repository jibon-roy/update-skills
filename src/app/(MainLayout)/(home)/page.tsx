
import { Footer } from "@/components/component/footer";
import Banner from "@/components/component/home/banner/banner";
import PopularCourse from "@/components/component/home/courses/popularCourse";
import MoreAbout from "@/components/component/home/moreAbout";
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
      <PopularCourse />
      <MoreAbout />
      <Footer />
      {/* {users.map((user: { _id: string, name: string }): any => <div key={user._id}>{user.name}</div>)} */}
      {/* <Link href="/about">About page</Link> */}
    </main>
  );
}
