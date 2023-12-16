import axios from "axios";
import { useEffect, useState } from "react";



export default function RoomElement(props: { room: { name: string, counter: number, socket_link: string} }){
    const [pin_controllers, set_pin_controllers] = useState([<></>])
    const [pin_consump, set_pin_consump] = useState([<></>])

    async function toggle_pin(url: string, state: boolean): Promise<void> {
        await axios.patch(url, { state });
        fetch_all_sockets()
    }

    // useEffect(() => {
    //     setInterval(fetch_all_sockets, 1000)
    // },[])

    async function fetch_all_sockets(): Promise<void> {
        let req = await axios.get(props.room.socket_link);
        
        const temp_pin_controllers: JSX.Element[] = [];
        const temp_pin_consump: JSX.Element[] = [];

        for (let socket of req.data._embedded.sockets) {
            let control_pin = (await axios.get(socket._links.control_pin.href)).data

            if (control_pin.state){
                temp_pin_controllers.push(
                <div onClick={() => toggle_pin(control_pin._links.pin.href, !control_pin.state)} className="bi bi-lightbulb display-5 d-inline-block col-3" role="button">
                    <div className="d-none"> </div>
                    <p className="fs-5">Turn off lights</p>
                </div>)
            }
            else{
                temp_pin_controllers.push(
                    <div onClick={() => toggle_pin(control_pin._links.pin.href, !control_pin.state)} className="bi bi-lightbulb-off display-5 d-inline-block col-3"
                    role="button">
                    <div className="d-none"> </div>
                    <p className="fs-5">Turn on lights</p>
                </div>)
            }

            try{
                let consumption_pin = (await axios.get(socket._links.consumption_pin.href)).data
                temp_pin_consump.push(<span className="btn btn-primary rounded-pill extra-small-btn mt-2">Consumption: {consumption_pin.consumption} W</span>)
            }
            catch(e: unknown){
                console.log("Catched")
            }
        }

        set_pin_controllers(() => [...temp_pin_controllers])
        set_pin_consump(() => [...temp_pin_consump])
    }

    useEffect(() =>{
        setInterval(fetch_all_sockets, 1000)
    }, [])
    
    return <>
        {/* <% for(let room of rooms){ %>  */}
        <section className="d-inline-flex justify-content-center col-11 col-md-5 mx-2 mt-3">
            <section className="col-12 block-color p-3 me-2 rounded-3">
                <h5 className="d-inline-block mb-3"> {props.room.name} </h5>
                <div className="d-flex justify-content-around align-items-center text-center">
                    {/* <h6 className="d-inline-block display-6 col-9 me-1 lg-base">18&deg;C</h6> */}


                    {...pin_controllers}


                    {/* <% if(room.outlets){ %>  */}
                    {/* <form action="/rooms/<%= room._id %>/all_outlets" method="post" className="bi bi-plug display-5 d-inline-block col-3" role="button">
                        <p className="fs-5">Disable outlets</p>
                        <input className="d-none" value="off" name="state" type="text" />
                    </form> */}
                    {/* <% }else{ %>  */}
                    {/* <form action="/rooms/<%= room._id %>/all_outlets" method="post" className="bi bi-outlet display-5 d-inline-block col-3" role="button">
                                    <p className="footer-ele-stat">Enable outlets</p>
                                    <input className="d-none" value="on" name="state" type="text" />
                                </form> */}
                    {/* <% } %>  */}


                    <i className="bi bi-people display-5 d-inline-block col-3" role="button">
                        <p className="fs-5 room-counter">People counter {props.room.counter} </p>
                    </i>
                </div>

                {...pin_consump}
            </section>
        </section>
        {/* <% } %> */}

    </>
}