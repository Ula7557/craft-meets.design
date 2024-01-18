import './team.scss'
const Team = ({images, holder, text})=>{
    return (
        <div className="team-wrapper"
        >
            <div className="top-place">
                <img src={images} alt="" />
            </div>
            <div className="contents">
                <h3>{holder}</h3>
                <div>{text}</div>
            </div>
        </div>
    )
}

export default Team