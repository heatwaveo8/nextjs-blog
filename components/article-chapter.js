import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function ArticleChapter(props) {
  const { chapterIndex, headline, copy } = props;

  const document = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: copy.content[0].content[0].value,
            marks: [],
            data: {}
          },
        ],
      },
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: copy.content[1].content[0].value,
            marks: [],
            data: {}
          },
        ],
      },
    ],
  };

  return (
    <section className='chapter'>
      <h6>Chapter {chapterIndex}</h6>
      <h2>{headline}</h2>
      {
        documentToReactComponents(document)
      }
    </section>
  )
};