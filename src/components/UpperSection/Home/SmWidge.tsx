export default function SmWidge(props: {header: string, icon_class: string, data: string, btn_text: string}){
    return <>
        <div className="col-12 col-md-6 mt-2 p-1 flex-grow-1 d-flex">
            <section className="d-flex flex-column justify-content-between col-12 block-color rounded-3 p-3">
                <h5 className="d-block fs-6" >{props.header}</h5>
                <div className="d-flex justify-content-between align-items-center ">
                    <h6 className="d-inline-block display-6 fs-4 col-9 me-1 lg-base">{props.data}</h6>
                    <i className={props.icon_class}></i>
                </div>
                <button className="col-5 col-md-10 mt-2 btn btn-primary rounded-pill extra-small-btn">{props.btn_text}</button>
            </section>
        </div>
    </>
}