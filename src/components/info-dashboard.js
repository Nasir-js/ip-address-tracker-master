/**
 * 
 * data is passed as prop (i.e property)
 */
const InfoDashBoard = ({ data }) => {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default InfoDashBoard