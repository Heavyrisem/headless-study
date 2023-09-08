import Codeblock from '@/components/Codeblock';
import { Sandpack } from '@codesandbox/sandpack-react';
import { Post, allPosts } from 'contentlayer/generated';
import { readFileSync } from 'fs';
import { MDXComponents } from 'mdx/types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

// mdx에서 사용될 컴포넌트를 실제 react 컴포넌트와 매핑
const mdxComponents: MDXComponents = {
  Test: (props) => <button {...props} />,
  pre: (props: any) => {
    if (!props) return null;
    if (typeof props.children === 'string') return <pre {...props} />;

    const code = props.children.props.children;
    const type = props.children.props.className.replace('language-', '') ?? '';
    const something = Boolean(props.children.props.something);
    // console.log('children', props.children, { type, something });
    return <Codeblock filename="App.tsx" code={code} type={type} />;
  },
};

export default ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return null;

  // mdx 데이터를 렌더할 수 있는 컴포넌트 불러오기
  const MDXContent = useMDXComponent(post.body.code);

  // console.log(post);

  return (
    <div>
      <h1>{post.title}</h1>
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.flatMap((post) => [`/posts/${post._raw.flattenedPath}`]);
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ post?: Post }> = async (ctx) => {
  return {
    props: {
      post: allPosts.find((post) => post._raw.flattenedPath === ctx?.params?.slug),
    },
  };
};
