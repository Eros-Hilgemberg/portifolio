import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import BasePage from "../pages/BasePage"
import Projects from "../pages/Projects"
import About from "../pages/About"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BasePage />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes