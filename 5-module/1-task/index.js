function hideSelf() {
  let button = document.getElementsByClassName('hide-self-button');
  
    for (let onbutton of button) {
    onbutton.onclick = function () {
    onbutton.setAttribute('hidden', 'true');
    }
    }
    // ваш код...
  }
  