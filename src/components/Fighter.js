export default ({ name, color, img }) => {
    return (
        <div className="fighter" style={{backgroundColor: color, backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${name.toLowerCase()}/main.png)`}}>
            <h4>{name}</h4>
        </div>
    )
}