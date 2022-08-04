const gridChildren = [...document.getElementsByClassName('item')]

gridChildren.forEach((child, idx) => {child.id = `btn${++idx}`;});

const randomBackgroundRGBA = () => {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const red = randomBetween(0, 255);
  const green = randomBetween(0, 255);
  const blue = randomBetween(0, 255);
  return {red, green, blue};
}

const checkChangeFont = (red, green, blue) =>{
  const constant = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));
  if (constant < 127.5 || red < 40 || green < 40 || blue < 40) {
    document.body.classList.add("whiteFont");
  }else{
    document.body.classList.remove("whiteFont");
  }
}

const handleBackgroundChange = e => {
  const rgba = randomBackgroundRGBA();
  const red = rgba.red;
  const green = rgba.green;
  const blue = rgba.blue;
  const rgbaString = `rgba(${red},${green},${blue},1)`
  document.body.style.backgroundColor = rgbaString;
  checkChangeFont(red, green, blue);
  const styleItems = [...document.getElementsByClassName("style")];
  styleItems.forEach((item) => {
    item.style.backgroundColor = rgbaString;
    const rm24 = red - 24;
    const gbm21 = green - 21;
    const r14 = red + 14;
    const gb23 = red + 23;
    item.style.boxShadow = `-5px 5px 10px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.2), 5px -5px 10px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.2), -5px -5px 10px rgba(${r14}, ${gb23}, ${gb23}, 0.9), 5px 5px 13px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.9), inset 1px 1px 2px rgba(${r14}, ${gb23}, ${gb23}, 0.3), inset -1px -1px 2px rgba(${rm24}, ${gbm21}, ${gbm21}, 0.5)`;
  });
}

const handleAlert = e => {
  alert("Hej, to łaskocze. Hi hi hi");
}

const handleCounters = e => {
  const dataset = e.currentTarget.dataset;
  e.currentTarget.querySelector('h3').textContent = `${dataset.eventType} counter: ${++dataset.counter}`;
}

const handleChangeColourOf2n3 = e => {
  const rgb = randomBackgroundRGBA();
  const red = rgb.red;
  const green = rgb.green;
  const blue = rgb.blue;
  const rgbString = `rgba(${red},${green},${blue})`
  document.getElementById('btn2').style.backgroundColor = rgbString;
  document.getElementById('btn3').style.backgroundColor = rgbString;
}

const handleInvertBackground = e => {
  const button = e.currentTarget;
  button.classList.toggle("invert");
}

const handleSizeChange = e => {
  const button = e.currentTarget;
  button.classList.toggle("changeSize");
}

const handleTextVisibility = e => {
  const thing = document.getElementById('text'); //Fix it, find through child
  thing.classList.toggle("visibility");
}

const handleModal = e => {
  const modal = document.getElementById('myModal');
  modal.style.display = "block";
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

const handleFontFamily = e => {
  document.body.classList.toggle('font');
}

const addListinersToBackgroundChnage = (child) => {
  child.addEventListener(child.dataset.eventType, handleBackgroundChange);
}

const addListinersToAlert = (child) => {
  child.addEventListener(child.dataset.eventType, handleAlert);
}

const addListinersToCounters = (child) => {
  child.addEventListener(child.dataset.eventType, handleCounters);
}

const addListinersToChange2n3 = (child) => {
  child.addEventListener(child.dataset.eventType, handleChangeColourOf2n3);
}

const addListinersToInvertBackground = (child) => {
  child.addEventListener(child.dataset.eventType, handleInvertBackground);
}

const addListinersToChangeSize = (child) => {
  child.addEventListener(child.dataset.eventType, handleSizeChange);
}

const addListinersVisibility = (child) => {
  const thing = document.getElementById('button'); //Fix it, find through child
  thing.addEventListener(child.dataset.eventType, handleTextVisibility);
}

const addListinersToModal = (child) => {
  child.addEventListener(child.dataset.eventType, handleModal);
}

const addListinersToFontFamily = (child) => {
  child.addEventListener(child.dataset.eventType, handleFontFamily);
}

const addListiners = (child) => {
  switch (child.dataset.type){
    case 'background-change':
      addListinersToBackgroundChnage(child);
      break;
    case 'alert':
      addListinersToAlert(child);
      break;
    case 'counter':
      addListinersToCounters(child);
      break;
    case 'change-2n3':
      addListinersToChange2n3(child);
      break;
    case 'invert':
      addListinersToInvertBackground(child);
      break;
    case 'size':
      addListinersToChangeSize(child);
      break;
    case 'visibility':
      addListinersVisibility(child);
      break;
    case 'modal':
      addListinersToModal(child);
      break;
    case 'font':
      addListinersToFontFamily(child);
      break;
  }
}

const addExtraArticle = () => {
  if (!document.getElementById("container").innerHTML.includes("https")) {
    if (window.innerWidth > 1000) {
      const new11 = document.createElement("article");
      new11.setAttribute('id', 'btn11');
      new11.setAttribute('class', 'item');
      new11.classList.add('style');
      new11.setAttribute('onclick', "window.open('https://theuselessweb.com/','mywindow')")
      new11.innerHTML =
        "<h3>:)</h3>";
      document.getElementById("container").appendChild(new11);
    }
  } else {
    if (window.innerWidth <= 1000) {
      const die = document.getElementById("btn11");
      die.remove();
    }
  }
};

gridChildren.forEach(addListiners);

window.addEventListener('load', addExtraArticle);
window.addEventListener('resize', addExtraArticle);
