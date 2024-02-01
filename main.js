import './style.css';
import textPainter from './painter';

let setNumber = 0;
function updateClassForSetNumber() {
  // Remove 'active' class from all words
  const words = document.querySelectorAll('.word');
  words.forEach(word => word.classList.remove('active'));

  // Add 'active' class to the word with the ID matching setNumber
  const activeWord = document.getElementById(`word-${setNumber}`);
  if (activeWord) {
    activeWord.classList.add('active');
  } else {
    console.error(`Element with ID word-${setNumber} not found.`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('#input');
  const paintedTextContainer = document.querySelector('#painted-text');

  paintedTextContainer.innerHTML = textPainter(textarea.value);
  let maxLength = textarea.value.split(' ').length;
  updateClassForSetNumber();

  textarea.addEventListener('input', event => {
    const paintedText = textPainter(event.target.value);
    paintedTextContainer.innerHTML = paintedText;
    maxLength = textarea.value.split(' ').length;
    updateClassForSetNumber();
  });

  document.querySelector('#left').addEventListener('click', e => {
    if (setNumber > 0) {
      setNumber--;
      updateClassForSetNumber();
    }
  });
  document.querySelector('#right').addEventListener('click', e => {
    if (setNumber < maxLength - 1) {
      setNumber++;
      updateClassForSetNumber();
    }
  });
  document.addEventListener('keydown', event => {
    switch (event.key) {
      case 'ArrowLeft':
        if (setNumber > 0) {
          setNumber--;
          updateClassForSetNumber();
        }
        break;
      case 'ArrowRight':
        if (setNumber < maxLength - 1) {
          setNumber++;
          updateClassForSetNumber();
        }
        break;
      default:
        // Ignore other keys
        break;
    }
  });
});

document.querySelector('#app').innerHTML = `
  <div class="main">
    <div class="container">
    <label for="input">Text Input</label>
    <textarea id="input" name="input" rows="40" cols="30">Inter your text here</textarea> 
    </div>
    <div id="painted-text" class="painted-text"></div>
      <div class="controls">
        <button id="left">◀️</button>
        <button id="right">▶️</button>
      </div>
  </div>
`;
