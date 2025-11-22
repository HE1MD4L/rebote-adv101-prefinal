import '../styles/globals.css';
import '../styles/home.css';  // <-- add your home styles here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
