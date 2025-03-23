import { useState } from "react"
import { Link } from "react-router-dom"

const routes = [
    { url: "/", name: "Início" },
    { url: "/about", name: "Sobre" },
    { url: "/projects", name: "Projetos" }
]
function Navbar() {
    const [url_location, setUrl] = useState(location.pathname)
    return (
        <div className="h-10 bg-black-primary text-white flex justify-center items-center">
            <ul className="flex gap-4">
                {routes.map((route, index) => (
                    <li key={index} className={route.url === url_location ? "bg-blue-primary px-2 rounded-sm" : "bg-none"}>
                        <Link to={route.url} onClick={() => setUrl(route.url)}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar