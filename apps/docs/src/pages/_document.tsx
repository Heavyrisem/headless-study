import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* react-live에서 tailwindcss 사용시 필요 */}
        <script src="https://cdn.tailwindcss.com" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
