export default function LgWidge(){
    return <>
        <section className="block-color p-4 rounded-3 mt-2">
                {/* Weather header */}
                <h6 className="d-inline-block display-6">Weather</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="d-inline-block display-6 col-9">18 &deg;C</h6>
                    <i className="bi bi-wind display-4 d-inline-block col-3"></i>
                </div>
            <a href="https://weather.com/weather/today/" target="_blank" className="col-5 col-md-6 mt-2 btn btn-primary rounded-pill extra-small-btn">see more info</a>
            </section>
    </>
}