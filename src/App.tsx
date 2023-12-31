// components
import { ThemeRoot } from '@app/components/layout/ThemeRoot';
import { Header } from '@app/components/features/Header';

// routes
import Router from '@app/routes/routes';

function App() {
  return (
    <ThemeRoot>
      <Header />
      <Router />
    </ThemeRoot>
  );
}

export default App;
