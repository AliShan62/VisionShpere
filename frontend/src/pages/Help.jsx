import PageTitle from "../components/Typography/PageTitle";
import InfoCard from "../components/Cards/InfoCard";
import RoundIcon from "../components/RoundIcon";
import { ChatIcon, RocketIcon, OutlinePersonIcon, VideoIcon } from "../icons";
import Footer from "../components/Footer/Footer";
import FAQs from "../components/FAQs/FAQs";
import SocialLinks from "./SocialLinks";
function Help() {
  return (
    <>
      <PageTitle>Help Center</PageTitle>
      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Get Started" value="Check our online guide">
          <RoundIcon
            icon={RocketIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Roadmap" value="Request a feature & see our roadmap">
          <RoundIcon
            icon={OutlinePersonIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Videos" value="Check our channel on youtube">
          <RoundIcon
            icon={VideoIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Contact us" value="Keep in touch">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <iframe
        className="w-full h-64 bg-white rounded shadow"
        src="https://www.youtube.com/embed/vz1RlUyrc3w?si=anFS_DZv7VgajWF5"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <FAQs />
      <SocialLinks />
      <Footer />
    </>
  );
}

export default Help;
