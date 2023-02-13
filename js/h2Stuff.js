let hasMoved = false;

function checkAndMoveElement(elementId) {
  const element = document.querySelector(`#${elementId}`);
  const rect = element.getBoundingClientRect();
  const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);

  if (visibleWidth < element.offsetWidth && !hasMoved) {
    // The element is completely off-screen and hasn't been moved yet, move it so that 10 pixels are visible
    if (rect.right < 10) {
      element.style.left = `${1 - rect.right}px`;
    } else {
      element.style.left = `${window.innerWidth - rect.left - 1}px`;
    }

    // Set the flag to true so we don't move the element again until it goes off-screen again
    hasMoved = true;
  } else if (visibleWidth >= element.offsetWidth) {
    // The element is back on-screen, reset the flag so we can move it again if it goes off-screen again
    hasMoved = false;
  }
}

// Call the function every 500 milliseconds to check if the element is off-screen
setInterval(() => checkAndMoveElement('HelloMessage'), 500);


const HelloMessage = document.querySelector('#HelloMessage');






let image = document.querySelector('#image');


const element = document.querySelector('#HelloMessage');
const rect = element.getBoundingClientRect();

setInterval(() => checkAndMoveElement('HelloMessage'), 1000);




