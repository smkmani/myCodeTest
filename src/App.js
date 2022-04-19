import { Provider } from "react-redux";
import store from "./stores";
import Home from "./Home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
