

import { Footer } from "@/components/component/footer/footer";
import AchieveGoal from "@/components/component/home/achieveGoal/achieveGoal";
import Banner from "@/components/component/home/banner/banner";
import PopularCourse from "@/components/component/home/courses/popularCourse";
import MoreAbout from "@/components/component/home/moreAbout";
import { Statistics } from "@/components/component/home/statistics/statistics";
import BecomeATeacher from "@/components/component/home/teacher/becomeATeacher";


export default async function Home() {


  return (
    <main>
      <Banner />
      <PopularCourse />
      <MoreAbout />
      <AchieveGoal />
      <Statistics />
      <BecomeATeacher />
    </main>
  );
}
