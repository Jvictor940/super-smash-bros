const LoadingScreen = ({ selectedCharacter, loadingScreenVisible }) => {
    return(
      <div style={{ display: loadingScreenVisible ? "block" : "none", backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/ss_1.jpg)` }} className="loading-screen">
  
      </div>
    )
  }
  
  export default LoadingScreen;