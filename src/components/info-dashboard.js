/**
 * 
 * data is passed as prop (i.e property)
 */
const InfoDashBoard = ({ data }) => {
    return (
        <div className="dashboard">
            <div className="dashboard--box">
                <p className="label">IP Address</p>
                <p className="value">{data.ip}</p>
            </div>
            <div className="dashboard--box">
                <p className="label">Location</p>
                <p className="value">{data['location'].region}</p>
            </div>
            <div className="dashboard--box">
                <p className="label">Timezone</p>
                <p className="value">GMT {data['location'].timezone}</p>
            </div>
            <div className="dashboard--box">
                <p className="label">ISP</p>
                <p className="value">{data.isp}</p>
            </div>
        </div>
    )
}

export default InfoDashBoard