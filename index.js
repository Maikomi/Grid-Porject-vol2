const gridChildren = [...document.getElementsByClassName('item')]

gridChildren.forEach((child, idx) => {child.id = `btn${++idx}`;});

const handleBackgroundChange = e =>{
}

const btn = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const red = randomBetween(0, 255);
  const green = randomBetween(0, 255);
  const blue = randomBetween(0, 255);
  const rgba = `rgba(${red},${green},${blue},1)`;
  document.body.style.backgroundColor = rgba;
  const checkChangeFont = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));
  if (checkChangeFont < 127.5 || red < 40 || green < 40 || blue < 40) {
    document.body.classList.add("whiteFont");
  }else{
    document.body.classList.remove("whiteFont");
  }
  const divs = [...document.getElementsByClassName("item")];
  divs.forEach((div) => {
    div.style.backgroundColor = rgba;
    const rm24 = red - 24;
    const gbm21 = green - 21;
    const r14 = red + 14;
    const gb23 = red + 23;
    div.style.boxShadow = `-5px 5px 10px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.2), 5px -5px 10px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.2), -5px -5px 10px rgba(${r14}, ${gb23}, ${gb23}, 0.9), 5px 5px 13px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.9), inset 1px 1px 2px rgba(${r14}, ${gb23}, ${gb23}, 0.3), inset -1px -1px 2px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.5)`;
  });
});
