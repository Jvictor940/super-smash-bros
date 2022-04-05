export default ({ name, color }) => {
    return (
        <div className="fighter" style={{backgroundColor: color}}>
            <h4>{name}</h4>
        </div>
    )
}