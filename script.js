function applyRandomColor() {
    var randomIndex = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    var img = document.querySelector('/randomImage');
    img.className = 'random-color-' + randomIndex; 
  
  applyRandomColor();
}