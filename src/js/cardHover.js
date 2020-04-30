const cardHover = (e) =>{
    e.target.classList.add("not-visible");
    e.target.nextElementSibling.classList.remove("not-visible"); 
  }

  export{cardHover}