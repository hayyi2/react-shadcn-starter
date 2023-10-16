import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function Applayout() {
    return (
        <>
            <AppHeader />
            <div className="flex-grow">
                <div className="container px-4 md:px-8">
                    <Outlet />
                </div>
            </div>
            <AppFooter />
        </>
    )
}
