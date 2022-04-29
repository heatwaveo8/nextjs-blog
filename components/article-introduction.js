import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function ArticleIntroduction(props) {
  const { copy } = props;

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
    <section className='introduction'>
      {
        documentToReactComponents(document)
      }
    </section>
  )
};