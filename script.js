const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const h2 = document.getElementById("h2");
score.style.display='none'
let array = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Tempora itaque molestias illum nihil sed minima, temporibus dicta quibusdam perspiciatis dolorem",
  "totam ratione laboriosam vero repellendus, aperiam qui possimus mollitia saepe vitae deserunt",
];

const start = () => {
  let date = new Date();
  time1 = date.getTime();
};

const end = (first, second) => {
  let count = 0;
  let error = 0;
  let wpm = 0;
  let date = new Date();
  time2 = date.getTime();
  const speed = ((time2 - time1) / 1000).toPrecision(1);
  const linewords = first.split(" ");
  const inputwords = second.split(" ");
  inputwords.forEach((element, index) => {
    if (linewords[index] == element) {
      count++;
    } else {
      console.log(textarea.value);
      if (textarea.value == "") {
        error = 0;
      } else {
        error++;
      }
    }
  });
  wpm = Math.floor((count * 60) / speed);
  return { count, error, speed, wpm };
};
btn.addEventListener("click", () => {
  let time1, time2;
  const random = Math.floor(Math.random() * array.length);
  if (btn.innerText == "Start" || btn.innerText=='Restart') {
    h2.innerHTML = array[random];
    score.style.display='none'
    btn.innerHTML = "Done";
    start();
  } else {
    btn.innerHTML = "Restart";
    let count = end(h2.innerText, textarea.value);
    score.innerHTML = `True:${count.count} False:${count.error} Speed:${count.wpm}wpm`;
    // Time:${count.speed}s
    h2.innerHTML = "Click Restart to test again";
    score.style.display='block'
    textarea.value=''
  }
});
