const selectPlatform = (e) =>{
    let platformSelected = document.getElementById("select").value
    let games = document.querySelectorAll("div.bigCard")
    games.forEach(game => {
        let result = 0
        game.querySelectorAll('.platform').forEach(platform=>{
           if(platform.id == platformSelected || platformSelected==0)result++
        })
        if(result<1)game.classList.add("not-visible");
        if(result>0)game.classList.remove("not-visible")
    });
  }

  export{selectPlatform}