import LgWidge from "./LgWidge"
import SmWidge from "./SmWidge"
import { AxiosInstance } from "axios";
import Cam from "./Cam"
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";






export default function Home(){
    const axios_instance = useOutletContext() as AxiosInstance
    const [tot_consumption, set_tot_consumption] = useState(0.0);
    const [temp, set_temp] = useState(0.0);
    
    async function fetch_all_consumption(): Promise<void> {
        let tot_consumption = 0.0;
        const req = await axios_instance.get(`pins?size=40`);

        for (const pin of req.data._embedded.pins) {
            if (pin.type == "consumption") tot_consumption += pin.consumption;
        }

        set_tot_consumption(tot_consumption)
    }


    async function fetch_temp(): Promise<void> {
        const pin = (await axios_instance.get(`pins/pi17`)).data;
        set_temp(pin.consumption)
    }


    useEffect(() => {
        setInterval(fetch_all_consumption, 1000)
        setInterval(fetch_temp, 1000)
    }, [])

    return <>
        <section className="d-flex flex-wrap mt-2 justify-content-center align-items-stretch m-auto">
        {/* cam section */}
        <section className="col-lg-7 p-0 mt-2 d-flex flex-column align-items-center">
            <Cam />
        </section>

        {/* after cam section */}
        <section className="d-flex flex-column col-11 col-lg-5 text-light">
            {/* city Weather */}
            <LgWidge />

            <section className="d-flex justify-content-between mt-2 align-items-stretch flex-wrap mb-2 mb-lg-0">
                    <SmWidge header="Home Temp" icon_class="bi bi-thermometer-half display-6 d-inline-block col-3" data={temp + String.fromCharCode(176)} btn_text="see more info" />

                    <SmWidge header="Total Consumption" icon_class="d-block display-6 fs-4" data={tot_consumption + " kw/h"} btn_text="see more info" />
                
            </section>
        </section>
    </section>
    </>
}