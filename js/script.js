
const circularProgressBars = document.querySelectorAll('.circular-progress');

circularProgressBars.forEach(bar => {
  const value = bar.querySelector('.progress-value').textContent.replace('%', '');
  const progressDegree = (value / 100) * 360;
  bar.style.background = `conic-gradient(#4caf50 ${progressDegree}deg, #e0e0e0 ${progressDegree}deg)`;
});

let mybutton = document.getElementById("btn-back-to-top");
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}