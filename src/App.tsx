import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Weather from "./components/bai1/bai1";
import StudentPage from "./components/bai2/bai2";
import News from "./components/bai3/bai3";

const App = () => {
  const navStyle: React.CSSProperties = { marginRight: 15, textDecoration: "none", color: "#0366d6" };

  return (
    <BrowserRouter>
      <main style={{ padding: 24 }}>
        <nav style={{ marginBottom: 16 }}>
          <NavLink to="/weather" style={navStyle}> Bài 1</NavLink>
          <NavLink to="/students" style={navStyle}>Bài 2</NavLink>
          <NavLink to="/news" style={navStyle}>Bài 3</NavLink>
        </nav>

        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/students/*" element={<StudentPage />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
