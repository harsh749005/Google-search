document.querySelector(".Search").addEventListener("keydown", (e) => {
  if (e.key ==="Enter") {
    
      let value = document.querySelector(".Search").value;
    console.log(value);
    document.querySelector(".Search").value = "";
  
    window.open(`https://www.google.com/search?q=${value}`, '_blank', 'noopener, noreferrer');
  }
});
