const cardHoverOut = (e) =>{
    e.target.classList.add("not-visible");
    e.target.previousElementSibling.classList.remove("not-visible");
  }

  export{cardHoverOut}