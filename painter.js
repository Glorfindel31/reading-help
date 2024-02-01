export default function textPainter(inputString) {
  const inputArray = inputString.split(' ');

  const outputArray = inputArray.map((word, index) => {
    return `<span id="word-${index}" class="word">${word}</span> `;
  });
  const output = outputArray.join('');

  return output;
}
