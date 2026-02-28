  // buton send message
document.getElementById("send").onclick = function() {
    alert("your message has been sent");
  };
  // Subscribe to newsletter

document.addEventListener("DOMContentLoaded", function () {
 
  var subscribeButton = document.getElementById("subscribe-button");

  subscribeButton.addEventListener("click", function (event) {

      event.preventDefault();
     
      var email = document.querySelector('[name="user-email"]').value.trim();

      if (isValidEmail(email)) {
          alert("Thank you for subscribing!");

      } else {
          alert("Please enter a valid email address.");
      }
  });
});

function isValidEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

