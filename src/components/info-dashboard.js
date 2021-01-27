/**
 * 
 * data is passed as prop (i.e property)
 */
const InfoDashBoard = ({ data }) => {
    //to avoid 'cannot read property of undefined' error, the below method is used to access the timezone and region values from the nested object
    let locationKeys = Object.keys(data.location)
    let locationValues = Object.values(data.location)


    return (
        <div className="dashboard">
            <div className="dashboard--box">
                <p className="label">IP Address</p>
                <p className="value">{data.ip}</p>
            </div>
            <div className="dashboard--box">
                <p className="label">Location</p>
                <p className="value">{locationValues[locationKeys.indexOf('region')]}</p>
            </div>
            <div className="dashboard--box">
                <p className="label">Timezone</p>
                <p className="value">GMT {locationValues[locationKeys.indexOf('timezone')]}</p>
            </div>
            <div className="dashboard--box">
                <p className="label">ISP</p>
                <p className="value">{data.isp}</p>
            </div>
        </div>
    )
}

export default InfoDashBoard