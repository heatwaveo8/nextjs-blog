import ArticleChapter from "./article-chapter";
import ArticleHero from "./article-hero";
import ArticleIntroduction from "./article-introduction";

export default function ArticlePage(props) {
  const { hero, introduction, chapters } = props;

  return (
    <div className="article">
      <ArticleHero headline={hero.headline} />
      <ArticleIntroduction copy={introduction.copy} />
      {
        chapters ? chapters.map(chapter => (
          <ArticleChapter key={chapter.chapterIndex} chapterIndex={chapter.chapterIndex} headline={chapter.headline} copy={chapter.copy} />
        )) : 'No Chapters'
      }
    </div>
  )
};