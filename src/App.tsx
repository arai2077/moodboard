import { ThemeProvider } from "./components/theme/ThemeProvider";
import Footer from "@/components/footer/Footer";
import Moodboard from "./components/moodboard/Moodboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-4xl mt-8 mb-8">Moodboard</h1>
        <Moodboard />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
