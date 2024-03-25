document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu a");
    const contents = document.querySelectorAll(".content");
  
    menuItems.forEach(function(item) {
      item.addEventListener("click", function(event) {
        event.preventDefault();
        const targetContent = document.getElementById(this.dataset.content);
        contents.forEach(function(content) {
          content.classList.remove("active");
        });
        targetContent.classList.add("active");
      });
    });
  });
  