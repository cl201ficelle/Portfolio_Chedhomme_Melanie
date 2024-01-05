import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {Quicksand} from '@next/font/google'
// const quicksand = Quicksand ({
//   subsets:['latin'],
//   weights: ['300','400','500','600','700']
// })
// application 
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    
  );
};

export default App;
