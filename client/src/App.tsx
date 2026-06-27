import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage.tsx";
import SignUpPage from "./pages/sign-up-page.tsx";
import SignInPage from "./pages/sign-in-page.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  </Routes>
</BrowserRouter>; */
}
