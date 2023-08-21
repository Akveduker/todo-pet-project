import Router from "pages/Router/Router";
import { BrowserRouter } from "react-router-dom";
import WithStore from "@components/Providers/WithStore/WithStore";
import './styles/style.scss'
function App() {
  return (
    <>
      <WithStore>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </WithStore>
    </>
  );
}

export default App;
