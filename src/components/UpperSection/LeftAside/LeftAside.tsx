// left aside

import { NavLink } from "react-router-dom"




export default function LeftAside(props: { status: string }) {
    return <>
        <aside id="left-aside" className={"d-flex flex-column position-relative col-4 col-md-3 pt-4 " + props.status}>

            <section className="mx-auto text-center">
                <div className="position-relative rounded-circle w-50 mx-auto">
                    <img className="ms-auto rounded-circle img-fluid" src="./images/house_profile_pic.png" alt="" />
                    <span
                        className="position-absolute top-50 start-100 translate-middle p-2 bg-success border border-light rounded-circle"
                        role="button" title="Connected">
                        <span className="visually-hidden">New alerts</span>
                    </span>
                </div>
                <h6 className="pt-3">My Home</h6>
                <p className="pt-0 m-0 fs-6">1st District, 6th of October</p>
            </section>
            <ul className="my-3 list-group fw-bold">

                <NavLink to="/home" className={"list-group-item bg-transparent btn-left-aside border-0"}>
                    <i className="me-3 fs-5 bi bi-house"></i> Overview
                </NavLink>
                <NavLink className="list-group-item bg-transparent  btn-left-aside border-0" to="/gallery"><i className="me-3 fs-5 bi bi-image-fill"></i> Gallery</NavLink>

                {/* <li className="list-group-item bg-transparent btn-left-aside  <%= (active==='history') ? 'active' : '' %>  border-0"><i
                    className="me-3 fs-5 bi bi-clock-history"></i> History</li> */}

                <NavLink to="/rooms" className="list-group-item bg-transparent btn-left-aside border-0"><i
                    className="me-3 fs-5 bi bi-door-closed fw-bold"></i> Rooms</NavLink>
                <NavLink to="/garage" className="list-group-item bg-transparent btn-left-aside border-0"><i
                    className="me-3 fs-5 bi-stop-circle fw-bold"></i> Garage</NavLink>
                <NavLink to="/irrigation" className="text-decoration-none list-group-item bg-transparent btn-left-aside border-0"><i
                    className='me-3 fs-5 bi bi-droplet-half fw-bold'></i> Irrigation</NavLink>

                <NavLink className="list-group-item bg-transparent btn-left-aside border-0" to="/settings"><i
                    className="me-3 fs-5 bi bi-gear"></i> Setting
                </NavLink>
            </ul>
        </aside>
    </>
}
