import {Home} from "./Home"

const searchGame = () => {
    let search = document.getElementById("gameSearch").value;
    return Home(search);
  };

  export{searchGame}