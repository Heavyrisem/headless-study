import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="w-[100vw] h-[100vh] p-5 bg-zinc-900">
      <Component {...pageProps} />
    </div>
  );
}
