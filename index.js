var carousel = document.querySelector(".carousel");
var options = {
  fullWidth: false,
  indicators: true,
  padding: 30,
};
M.Carousel.init(carousel, options);

var instance = M.Carousel.getInstance(carousel);
var count = 0;

setInterval(function () {
  console.log(`Count is ${count}`);
  if (count >= 3) {
    count = 0;
  }
  instance.set(count);
  count++;
}, 3000);
