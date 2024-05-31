import Image from "next/image";
import Hero from "./HomeComponents/Hero";
import FeaturedPostsSection from "./HomeComponents/FeaturedPostsSection";
const featuredPostsSections = {
    commonProblems: {
      title: 'Solutions to common problems',
      featuredPosts: [
        {
          title: "Shrinkage",
          description: "The timber in our homes shrinks and grows depending on the moisure level, here's what you can do about it",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
        {
          title: "Peeling Paint",
          description: "When paint starts peeling theres a few things we can do",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
        {
          title: "something else",
          description: "something else ",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
      ]
    },
    proTips: {
      title: 'Pro tips',
      featuredPosts: [
        {
          title: "How to cut in",
          description: "Get dead straight lines every time",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
        {
          title: "How to hang wallpaper",
          description: "If you want to sprouse up your house with a feature wall, here's what you'll need to know",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
        {
          title: "How to plaster a crack",
          description: "You probably don't need to hire a gib stopper",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
      ]
    },
    reccomendedEquptment: {
      title: 'tools the experts recommend',
      featuredPosts: [
        {
          title: "Brushes",
          description: "Choosing the right brush can make a huge difference, let us guide you in picking the right choice",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
        {
          title: "Rollers",
          description: "Pick the right roller for the right job",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
        {
          title: "Rolling pole",
          description: "When you might be best to use a quick release pole",
          image: "/paint-problems.png",
          slug: "common-problems",
        },
      ]
    },

  }
  const { commonProblems, proTips } = featuredPostsSections

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="bg-white">
        <FeaturedPostsSection section={commonProblems}/>
      </div>
      <div className="bg-gray-50">
         <FeaturedPostsSection section={proTips}/>
      </div>
      <div className="bg-white">
         <FeaturedPostsSection section={proTips}/>
      </div>
    </main>
  );
}
