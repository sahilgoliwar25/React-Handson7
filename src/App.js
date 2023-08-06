import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteCompo from "./components/RouteCompo";
import LinkCompo from "./components/LinkCompo";
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <LinkCompo />
          <RouteCompo />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
