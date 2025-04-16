import { BrowserRouter, Routes, Route } from "react-router";
import Quiz from "./pages/quiz";
import NotFound from "./pages/notfound";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "sonner";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
