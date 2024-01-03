import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {Quicksand} from '@next/font/google'
const quicksand = Quicksand ({
  subsets:['latin'],
  weight: ['300','400','500','600','700']
})
// application 
const App = ({ Component, pageProps }) => {
  return (
    <main className={quicksand.className}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </main>
  );
};

export default App;
