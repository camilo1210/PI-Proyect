import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Quiz from "./pages/quiz/Quiz.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
