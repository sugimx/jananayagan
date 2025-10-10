import Banner from "@/components/layouts/user/Banner";
import FaQuestions from "@/components/layouts/user/Faquestions";
import Information from "@/components/layouts/user/Information";
import LimitedEdition from "@/components/layouts/user/LimitedEdition";
import LuckyDraw from "@/components/layouts/user/LuckyDraw";
import Section2 from "@/components/layouts/user/Section_2";

export default function Home() {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mywebsite.com/" />
      <meta property="og:title" content="My Website" />
      <meta property="og:description" content="Welcome to My Website!" />
      <meta property="og:image" content="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mywebsite.com/" />
      <meta name="twitter:title" content="My Website" />
      <meta name="twitter:description" content="Welcome to My Website!" />
      <meta name="twitter:image" content="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
      <Banner />
      <Section2 />
      <LuckyDraw />
      <LimitedEdition />
      <Information />
      <FaQuestions />
    </>
  )
}
