import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
// import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';

import { visit } from 'unist-util-visit';

const rehypeMdxCodeMeta = () => {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName !== 'code' || !node.data) return;
      node.properties = node.properties || {};
      node.data.meta.split(' ').forEach((t: string) => {
        const [key, value] = t.split('=');
        node.properties[key] = value;
      });
    });
  };
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: { rehypePlugins: [rehypeSlug, rehypeMdxCodeMeta], remarkPlugins: [remarkGfm] },
});
