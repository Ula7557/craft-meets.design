import './council.scss'
const Council = ({image, holder, text, clas}) => {
    return (
        <div className="council-wrapper">
            <div className="top-place">
                <img className={clas ? 'active' : ''} src={image} alt="" />
            </div>
            <div className="contents">
                <h2>
                    {holder}
                </h2>
                <div className='forward_link_partners'>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Council