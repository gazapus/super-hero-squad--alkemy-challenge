import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import React from "react";
import LoadingPage from './components/LoadingPage';

function App() {
  const [loadFinished, setLoadFinished] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('load', () => setLoadFinished(true));
  }, [])

  return (
    <BrowserRouter>
      <LoadingPage loaded={loadFinished} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
