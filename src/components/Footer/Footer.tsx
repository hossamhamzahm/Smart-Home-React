import { AxiosInstance } from "axios";
import "./Footer.css"
import FooterItem from "./FooterItem"

export default function Footer(props: { axios_instance: AxiosInstance }){

    async function terminate_all_control(): Promise<void> {
        const req = await props.axios_instance.get(`pins?size=40`);

        for (const pin of req.data._embedded.pins) {
            if (pin.type !== "control") continue;
            await props.axios_instance.patch(`pins/pi${pin.pin_number-1}`, { state: false });
        }
    }



    return <>
        <footer className="d-flex align-items-center px-4">
            {/* <form action="/rooms/all_lights" method="POST" role="button"
                className="item block-color d-flex justify-content-between align-items-center col-5 col-lg-2  rounded-3 p-2 me-4">
                <i className=" display-6 text-light me-2 col-3"></i>
                <div className="col-6 justify-content-between align-items-center me-1">
                    <p className="text-light m-0"></p>
                    <p className="footer-element-description m-0">Turn off <br /> all lights</p>
                </div>
                <button className="btn btn-primary align-self-start"></button>

            </form> */}

            <FooterItem fun={terminate_all_control} header="Lights" icon_class="bi bi-lightbulb-off" />
            <FooterItem fun={terminate_all_control} header="Outlets" icon_class="bi bi-plug" />
            <FooterItem fun={terminate_all_control} header="Lock doors" icon_class="bi bi-door-open" />


            {/* <div className="bg-primary p-4 m-2">
                asldfk
            </div> */}
        </footer>
    </>
}