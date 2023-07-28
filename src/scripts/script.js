const runScript = () => {
  window.onload = function () {
    document.getElementById("burgerr").addEventListener("click", function () {
      document.querySelector(".navbar").classList.toggle("open");
    });
  };
};

export default runScript;
