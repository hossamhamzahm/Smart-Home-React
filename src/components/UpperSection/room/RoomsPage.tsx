
// <link rel="stylesheet" href="/styles/rooms/main.css">
//     <title>Rooms</title>

import { AxiosInstance } from "axios";
import RoomElement from "./RoomsElement";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";



                // <section className="d-inline-flex justify-content-center col-12 col-md-6 col-lg-3 mt-3">
                //     <section className="col-11 block-color p-3 me-2 rounded-3 d-inline-flex flex-column justify-content-center align-items-center">
                //         <h5 className="d-inline-block mb-3">Add Room</h5>

                //         <a href="/rooms/new" role="button" className="text-decoration-none text-light pointer">
                //             <i className="bi bi-plus-square-dotted display-1"></i>
                //         </a>
                //         <!-- <i className="bi bi-thermometer-sun"></i>
                //         <i className="bi bi-thermometer-snow"></i> -->
                //     </section>
                // </section>


    // <script src="/js/rooms/index.js"></script>


export default function RoomsPage() {
    const axios_instance = useOutletContext() as AxiosInstance;
    
    const [rooms, set_rooms] = useState([<br />]);
    
    async function fetch_all_rooms(): Promise<void> {
        const req = await axios_instance.get(`rooms?size=40`);
        const temp_rooms: JSX.Element[] = [];
        
        for(let room of req.data._embedded.rooms){
            const temp_room = {
                name: 'str',
                counter: 0,
                socket_link: room._links.sockets.href
            }
            temp_room.name = room.name;
            temp_room.counter = room.counter;
            temp_rooms.push(<RoomElement room={temp_room} />);
        }
        set_rooms(() => [...temp_rooms])
        
    }

    useEffect(() => {
        setInterval(fetch_all_rooms, 1000)
    }, [])


    return <>
        {/* <h3 className="text-white text-center display-6 mt-3">Rooms</h3> */}
        <div className="d-flex col-12 justify-content-center flex-wrap mt-3 text-light">
            
            {...rooms}
            {/* <Room /> */}
        </div>
    </>
}