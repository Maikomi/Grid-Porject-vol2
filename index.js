const gridChildren = [...document.getElementsByClassName('item')];

gridChildren.forEach((child, idx) => (child.id = `btn${++idx}`));

const getRandomHsl = () => {
  const color = Math.random() * 361;
  const saturation = Math.floor(Math.random() * 101);
  const brightness = Math.floor(Math.random() * 101);
  return {color, saturation, brightness}
};

const changeFontColor = (brightness) => {
  if(brightness < 50){
    document.body.classList.add('white-font');
    document.getElementById('button-text').classList.add('white-font')
  } else {
    document.body.classList.remove('white-font');
    document.getElementById('button-text').classList.remove('white-font');
  }
};

const convertRandomHslToString = (hsl) => {
  const color = hsl.color; 
  const saturation = hsl.saturation;
  const brightness = hsl.brightness;
  const hslString =  `hsl(${color}, ${saturation}%, ${brightness}%)`;
  return hslString;
}

const setBodyBackgroundColor = hsl => {
  const newBackgroundColor = convertRandomHslToString(hsl);
  document.body.style.backgroundColor = newBackgroundColor;
};

const handleBackgroundChange = () => {
  const hsl = getRandomHsl();
  setBodyBackgroundColor(hsl);
  const brightness = hsl.brightness;
  const hslString = convertRandomHslToString(hsl);
  document.body.style.backgroundColor = hslString;
  changeFontColor(brightness);
  const styledElements = [...document.getElementsByClassName('style')];
  styledElements.forEach(element => {
    element.style.backgroundColor = hslString;
  });
};
const handleAlertAppearance = () => {
  alert('Hej, to łaskocze. Hi hi hi');
};

const handleCounterChange = e => {
  const dataset = e.currentTarget.dataset;
  e.currentTarget.querySelector('h3').textContent = `${
    dataset.eventType
  } counter: ${++dataset.counter}`;
};

const handleColorChangeOf2n3 = () => {
  const hsl = getRandomHsl();
  const hslString = convertRandomHslToString(hsl);
  document.getElementById('btn2').style.backgroundColor = hslString;
  document.getElementById('btn3').style.backgroundColor = hslString;
};

const handleBackgroundColorInversion = e => {
  const button = e.currentTarget;
  button.classList.toggle('invert');
};

const handleSizeChangeOfElement = e => {
  if (e.currentTarget === e.target) {
    const button = e.currentTarget;
    button.classList.toggle('changeSize');
  }
};

const handleTextVisibilityChange = () => {
  const text = document.getElementById('text')
  text.classList.toggle('visibility');
};

const handleModalAppearance = e => {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  window.addEventListener('click', event => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
};

const handleFontFamilyChange = e => {
  document.body.classList.toggle('font');
};

const addBackgroundChangeListener = child => {
  child.addEventListener(child.dataset.eventType, handleBackgroundChange);
};

const addListenersToAlert = child => {
  child.addEventListener(child.dataset.eventType, handleAlertAppearance);
};

const addListenersToCounters = child => {
  child.addEventListener(child.dataset.eventType, handleCounterChange);
};

const addListenersToChange2n3 = child => {
  child.addEventListener(child.dataset.eventType, handleColorChangeOf2n3);
};

const addListenersToInvertBackground = child => {
  child.addEventListener(child.dataset.eventType, handleBackgroundColorInversion);
};

const addListenersToChangeSize = child => {
  child.addEventListener(child.dataset.eventType, handleSizeChangeOfElement);
};

const addListenersVisibility = child => {
  const thing = document.getElementById('button'); 
  thing.addEventListener(child.dataset.eventType, handleTextVisibilityChange);
};

const addListenersToModal = child => {
  child.addEventListener(child.dataset.eventType, handleModalAppearance);
};

const addListenersToFontFamily = child => {
  child.addEventListener(child.dataset.eventType, handleFontFamilyChange);
};

const addListeners = child => {
  switch (child.dataset.type) {
    case 'background-change':
      addBackgroundChangeListener(child);
      break;
    case 'alert':
      addListenersToAlert(child);
      break;
    case 'counter':
      addListenersToCounters(child);
      break;
    case 'change-2n3':
      addListenersToChange2n3(child);
      break;
    case 'invert':
      addListenersToInvertBackground(child);
      break;
    case 'size':
      addListenersToChangeSize(child);
      break;
    case 'visibility':
      addListenersVisibility(child);
      break;
    case 'modal':
      addListenersToModal(child);
      break;
    case 'font':
      addListenersToFontFamily(child);
      break;
  }
};

const addExtraArticle = () => {
  const array = [...document.getElementsByClassName('item')]
  const mediaQuery = window.matchMedia('(min-width: 1000px)')
  if (array.length == 10) {
    if (mediaQuery.matches) 
      {const new11 = document.createElement('article');
      new11.setAttribute('id', 'btn11');
      new11.setAttribute('class', 'item');
      new11.classList.add('style');
      new11.setAttribute('onclick', "window.open('https://theuselessweb.com/','mywindow')");
      new11.innerHTML = '<h3>:)</h3>';
      document.getElementById('container').appendChild(new11);
    }
  }else{
    if(!mediaQuery.matches){
      const wantedDeadNotAlive = document.getElementById('btn11');
      wantedDeadNotAlive.remove();
    }
  }
}

gridChildren.forEach(addListeners);

window.addEventListener('load', addExtraArticle);
window.addEventListener('resize', addExtraArticle);



window.addEventListener('resize', checkSizeAlert);

