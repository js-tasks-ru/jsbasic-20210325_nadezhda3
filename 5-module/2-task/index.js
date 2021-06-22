function toggleText() {
  // ваш код...

  let button = document.querySelector('.toggle-text-button');
  let div = document.querySelector('#text');
  button.onclick = function () {
    div.toggleAttribute("hidden")

  }
}

}