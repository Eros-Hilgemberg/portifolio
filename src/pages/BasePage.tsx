import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function BasePage() {
    return (
        <>
            <div className="w-full flex flex-col bg-black-primary">
                <Navbar />
                <Outlet>
                </Outlet>
            </div>

        </>
    )
}

export default BasePage