export default function ArticleHero(props) {
  const { headline } = props;

  return (
    <section className="hero">
      <h6>Article</h6>
      <h1>{headline}</h1>
    </section>
  )
};