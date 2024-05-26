

import { Footer } from "@/components/component/footer/footer";
import AchieveGoal from "@/components/component/home/achieveGoal/achieveGoal";
import Banner from "@/components/component/home/banner/banner";
import PopularCourse from "@/components/component/home/courses/popularCourse";
import MoreAbout from "@/components/component/home/moreAbout";
import { Statistics } from "@/components/component/home/statistics/statistics";
import BecomeATeacher from "@/components/component/home/teacher/becomeATeacher";
import { Navigation } from "@/components/component/navigation";
// import aos from 'aos'
// import 'aos/dist/aos.css';

// import axios from "axios";



export default async function Home() {


  // if (typeof document === 'undefined') {
  //   aos.init({
  //     offset: 100,
  //   });
  // }

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
      <AchieveGoal />
      <Statistics />
      <BecomeATeacher />
      <Footer />
      {/* {users.map((user: { _id: string, name: string }): any => <div key={user._id}>{user.name}</div>)} */}
      {/* <Link href="/about">About page</Link> */}
    </main>
  );
}
