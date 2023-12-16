export default function Cam(){
    return <>
        <div className="d-flex flex-column justify-content-start flex-fill align-items-stretch col-11 camera block-color rounded-3">
            <div className="d-flex justify-content-between align-items-center pt-3 ps-3 px-2">
                <h6 className="text-light d-inline-block display-6">Camera</h6>
                <div className="btn-toolbar d-inline-block text-end" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary">1</button>
                        <button type="button" className="btn btn-secondary">2</button>
                        <button type="button" className="btn btn-secondary">3</button>
                        <button type="button" className="btn btn-secondary">4</button>
                    </div>
                </div>
            </div>
            {/* cam frame */}
            <img className="img-fluid py-2" src="images/cam_sample.png" alt="" />
        </div>
    </>
}