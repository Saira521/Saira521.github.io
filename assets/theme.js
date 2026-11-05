// Loaded in <head> so the saved theme applies before first paint.
(function () {
  var root = document.documentElement;
  var KEY = "theme";

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* storage blocked: theme lasts this page only */ }
  }
  function current() {
    return root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  var initial = saved();
  if (initial === "light" || initial === "dark") root.setAttribute("data-theme", initial);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    function label() {
      var next = current() === "dark" ? "light" : "dark";
      btn.textContent = next === "dark" ? "Dark" : "Light";
      btn.setAttribute("aria-label", "Switch to " + next + " theme");
    }
    btn.hidden = false;
    label();
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
      label();
    });
  });
})();
