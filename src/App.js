import { AllRoutes } from "./routes/AllRoutes";
import { Header , Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      {/* The AllRoutes component will handle all the routing for the application */}
      <Footer />
      {/* The Footer component will be displayed at the bottom of the page */}
    </div>
  );
}

export default App;
