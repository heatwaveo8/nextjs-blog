import { createClient } from "contentful";

import ArticlePage from "../components/article-page";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default function Home(props) {
  const { hero, introduction, chapters } = props;

  return (
    <div className="container">
      <ArticlePage hero={hero} introduction={introduction} chapters={chapters} />
      <style jsx global>{`
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          src: url("https://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff") format("woff");
        }

        :root {
          font-family: "Inter", sans-serif;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          height: 100vh;
        }

        * {
          box-sizing: border-box;
        }

        h1, h2, h6, p {
          margin-top: 0px;
          margin-bottom: 25px;
        }

        h6 {
          font-size: 14px;
        }

        h2 {
          font-size: 34px;
        }

        h1 {
          font-size: 44px;
          width: 50%;
        }

        .container {
          background-color: #f4f5f6;
        }

        .hero, .introduction, .chapter {
          padding-bottom: 50px;
          padding-left: 100px;
          padding-right: 100px;
        }

        .hero {
          color: #ffffff;
          height: 540px;
          background-position: center top;
          background-color: #000000;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .introduction p:first-of-type {
          padding-top: 100px;
        }

        .introduction p {
          color: #333333
        }

        .article {
          background-color: #f4f5f6;
        }

        @media all and (max-width:424px) {
          .hero {
            background-image: none;
          }
        }

        @media all and (min-width: 425px) {
          .hero {
            background-image: url("${hero.media}");
          }
        }
      `}</style>
    </div>
  )
};

export async function getStaticProps() {
  const entry = await client.getEntry('2Aufe1EkoN7OiT9VFGfW1G').catch(err => err);
  
  return {
    props: {
      hero: {
        headline: entry.fields.hero.fields.headline,
        media: entry.fields.hero.fields.backgroundImage.fields.file.url
      },
      introduction: {
        copy: entry.fields.introduction.fields.copy
      },
      chapters: [
        {
          chapterIndex: 1,
          headline: entry.fields.chapters[0].fields.headline,
          copy: entry.fields.chapters[0].fields.copy
        },
        {
          chapterIndex: 2,
          headline: entry.fields.chapters[1].fields.headline,
          copy: entry.fields.chapters[1].fields.copy
        }
      ]
    }
  }
}