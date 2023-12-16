
export default function FooterItem(props: { header: string, icon_class: string, fun: () => Promise<void> /* , data: string */ }){
    return <>
        <div role='button' onClick={() => props.fun()} className="btn btn-primary border-0 me-4 footer-item block-color d-flex justify-content-evenly align-items-center col-5 col-md-4 col-lg-3 rounded-3 px-2 py-4" style={{minWidth: "13em"}}>
            <i className={props.icon_class + " display-6 text-light me-2 col-3"}></i>
            <div className="col-6align-items-center me-1">
                <p className="text-light m-0">{props.header}</p>
                <p className="footer-element-description m-0">June 28, 2020</p>
            </div>
            {/* <form action="/rooms/all_outlets" method="POST" role="button" className="form-check form-switch col-1 align-self-start">
                <input className="form-check-input" type="checkbox" name="state" id="flexSwitchCheckChecked" />
            </form> */}
        </div>
    </>
}