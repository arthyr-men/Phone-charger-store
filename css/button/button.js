document.addEventListener("DOMContentLoaded", function() {
    for (var i = 1; i <= 6; i++) {
      var openButton = document.getElementById("openModal" + i);
      var modal = document.getElementById("myModal" + i);
      var closeButton = document.getElementById("closeModal" + i);
  
      openButton.addEventListener("click", createButtonClickHandler(modal));
      closeButton.addEventListener("click", createCloseButtonClickHandler(modal));
      window.addEventListener("click", createWindowClickHandler(modal));
    }
  
    function createButtonClickHandler(modal) {
      return function() {
        modal.style.display = "block";
      };
    }
  
    function createCloseButtonClickHandler(modal) {
      return function() {
        modal.style.display = "none";
      };
    }
  
    function createWindowClickHandler(modal) {
      return function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  });
  
  