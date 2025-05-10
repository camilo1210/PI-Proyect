import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home.jsx";
import Quiz from "./pages/quiz/Quiz.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import AorticStenosis from "./pages/aortic-stenosis/AorticStenosis.jsx";
import CardiacHypertension from "./pages/cardiac-hypertension/CardiacHypertension.jsx";
import BrokenHeartSyndrome from "./pages/broken-heart-syndrome/BrokenHeartSyndrome.jsx";
import DilatedCardiomyopathy from "./pages/dilated-cardiomyopathy/DilatedCardiomyopathy.jsx";
import './App.css';
import "./pages/about-us/About.jsx";
import About from "./pages/about-us/About.jsx";
import HeartFailure from "./pages/heart-failure/HeartFailure.jsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/About_us" element={<About/>} />
        <Route path="/Aortic_stenosis" element={<AorticStenosis/>} />
        <Route path="/Cardiac_hypertension" element={<CardiacHypertension/>} />
        <Route path="/Dilated-cardiomyopathy" element={<DilatedCardiomyopathy />} />
        <Route path="/Broken_heart_syndrome" element={<BrokenHeartSyndrome />} />
        <Route path="/Heart_failure" element={<HeartFailure />} />
      </Routes>
    </Layout>
  );
};

export default App
