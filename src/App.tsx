import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";

const MeetDrKilgour = lazy(() => import("./pages/MeetDrKilgour"));

const BaselineCognitivePage = lazy(
  () => import("./pages/BaselineCognitivePage"),
);
const NeuropsychEvalPage = lazy(() => import("./pages/NeuropsychEvalPage"));
const PsychAssessmentPage = lazy(() => import("./pages/PsychAssessmentPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Box pt="72px">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/baseline-cognitive-testing"
            element={
              <Suspense fallback={<Box minH="60vh" />}>
                <BaselineCognitivePage />
              </Suspense>
            }
          />
          <Route
            path="/meet-dr-kilgour"
            element={
              <Suspense fallback={<Box minH="60vh" />}>
                <MeetDrKilgour />
              </Suspense>
            }
          />
          <Route
            path="/neuropsychological-evaluation"
            element={
              <Suspense fallback={<Box minH="60vh" />}>
                <NeuropsychEvalPage />
              </Suspense>
            }
          />
          <Route
            path="/psychological-assessments"
            element={
              <Suspense fallback={<Box minH="60vh" />}>
                <PsychAssessmentPage />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<Box minH="60vh" />}>
                <FAQPage />
              </Suspense>
            }
          />
          <Route
            path="/resources"
            element={
              <Suspense fallback={<Box minH="60vh" />}>
                <ResourcesPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Box minH="60vh" />}>
                <ContactPage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
