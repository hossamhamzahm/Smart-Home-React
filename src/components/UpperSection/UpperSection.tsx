import { Outlet } from "react-router-dom";
import LeftAside from "./LeftAside/LeftAside";
import "./UpperSection.css"
import { useState } from "react";
import { AxiosInstance } from "axios";


export default function UpperSection(props: { axios_instance: AxiosInstance}){
    const [hide_aside, set_hide_aside] = useState("d-flex")

    function toggle_aside() {
        set_hide_aside((prev) => (prev == "d-hide" ? "d-flex" : "d-hide"))
    }
    return <>
        <main className="d-flex m-0 m-auto upper-main">
            <LeftAside status={hide_aside} />
            
            <section className="right-aside d-flex flex-column py-3 pe-3 w-100">
                <div className={(hide_aside == "d-flex" ? "" : "hided-arrow ") +"arrow display-4"} onClick={toggle_aside}>
                    <i className="bi bi-caret-right-fill"></i>
                </div>

                <Outlet context={props.axios_instance} />
            </section>
        </main>
    </>
}