import { AppRoutes } from './pages/routes';
import './App.css';
import { ThemeProvider } from './contexts/theme-context';


function App() {
 return (
  <>
   <ThemeProvider>
   <AppRoutes/>
   </ThemeProvider>
  </>
 )
}

export default App;
