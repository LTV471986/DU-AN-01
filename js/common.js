(function () {
  let isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "../index.html";
  }
})();
