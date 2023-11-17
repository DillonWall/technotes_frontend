import { Outlet } from 'react-router-dom'
import DashHeader from "./DashHeader"

const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <div classname="dash-container">
                <Outlet />
            </div>
        </>
    )
}
export default DashLayout