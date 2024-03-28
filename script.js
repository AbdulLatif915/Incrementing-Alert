let count = 0;

document.addEventListener('keydown', function(event) {
  alert("Count: " + ++count);
});

window.addEventListener('load', function() {
  count = 0;
});