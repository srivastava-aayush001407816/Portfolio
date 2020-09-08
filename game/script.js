document.addEventListener('mousemove',parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed=layer.getAttribute('data-speed');
        const x=(window.innerWidth - e.pageX*speed)/100;
        const y=(window.innerWidth - e.pageY*speed)/100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;