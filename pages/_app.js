// pages/_app.js
import { ThemeProvider } from "next-themes";
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <style jsx global>{`
        html {
          font-family: 'Quicksand', sans-serif; 
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;