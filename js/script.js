ready(function() {
initializeBackground();
});

var resizeTimeout;
var resizeCooldown = 500;
var lastResizeTime = Date.now();
function initializeBackground() {
canvas = document.getElementById("stars");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function() {
if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {
clearTimeout(resizeTimeout);
delete resizeTimeout;
}

lastResizeTime = Date.now();
canvas.style.display = "none";
resizeTimeout = setTimeout(function() {
fadeIn(canvas, 500);
initializeStars();
}, 500);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
initializeStars();
(window.requestAnimationFrame && requestAnimationFrame(paintLoop)) ||
setTimeout(paintLoop, ms);
}

var canvas;
var stars = [];

function rand(max) {
return Math.random() * max;
}

function Star(canvas, size, speed) {
this.ctx = canvas.getContext("2d");
this.size = size;
this.speed = speed;
this.x = rand(window.innerWidth);
this.y = rand(window.innerHeight);
}

Star.prototype.animate = function(delta) {
this.x += this.speed * delta;
this.y -= this.speed * delta;
if (this.y < 0) {
this.y = window.innerHeight;
}
if (this.x > window.innerWidth) {
this.x = 0;
}
this.ctx.fillStyle = "#ffffff";
this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

function initializeStars() {
var winArea = window.innerWidth * window.innerHeight;
var smallStarsDensity = 0.0001;
var mediumStarsDensity = 0.00005;
var largeStarsDensity = 0.00002;
var smallStarsCount = winArea * smallStarsDensity;
var mediumStarsCount = winArea * mediumStarsDensity;
var largeStarsCount = winArea * largeStarsDensity;
stars = [];
for (var i = 0; i < smallStarsCount; i++) {
stars.push(new Star(canvas, 1, 30));
}

for (var i = 0; i < mediumStarsCount; i++) {
stars.push(new Star(canvas, 2, 20));
}

for (var i = 0; i < largeStarsCount; i++) {
stars.push(new Star(canvas, 3, 10));
}
}

function drawStars(delta) {
for (var i = 0; i < stars.length; i++) {
stars[i].animate(delta);
}
}

var ms = 16;
var lastPaintTime = 0;
function paintLoop(timestamp) {
canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
var delta =
(window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1000;
if(delta > 0.05){
delta = 0.05;
}
drawStars(delta);
(window.requestAnimationFrame && requestAnimationFrame(paintLoop)) ||
setTimeout(paintLoop, ms);
lastPaintTime = timestamp;
}

function fadeIn(element, duration, callback) {
element.style.opacity = 0;
element.style.display = "block";

var startTime = Date.now();
var tick = function() {
var newOpacity = (Date.now() - startTime) / duration;
if (newOpacity > 1) {
newOpacity = 1;
callback && callback();
} else {
(window.requestAnimationFrame && requestAnimationFrame(tick)) ||
	setTimeout(tick, 16);
}

element.style.opacity = newOpacity;
};
tick();
}

//http://youmightnotneedjquery.com/
function ready(fn) {
if (
document.attachEvent
? document.readyState === "complete"
: document.readyState !== "loading"
) {
fn();
} else {
document.addEventListener("DOMContentLoaded", fn);
}
}




/*~~~~~~~~~~~~~~~~~~conuter~~~~~~~~~~~~~~~~~~ */
var secs = document.getElementById("seconds");
var mins = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");

const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

let countDown = new Date('May 4, 2022 09:30:00').getTime(),
x = setInterval(function() {

let now = new Date().getTime(),
	distance = countDown - now;
days.innerText = Math.floor(distance / (day)),
hours.innerText = Math.floor((distance % (day)) / (hour)),
minutes.innerText = Math.floor((distance % (hour)) / (minute)),
seconds.innerText = Math.floor((distance % (minute)) / second);
}, second)




/* ****************start wow ******************** */
new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.5s');
/* ****************end wow ******************** */


anime.timeline({loop: true})
.add({
	targets: '.ml8 .circle-white',
	scale: [0, 3],
	easing: "easeInOutExpo",
	duration: 1100
}).add({
	targets: '.ml8 .circle-container',
	scale: [0, 1],
	duration: 1100,
	easing: "easeInOutExpo",
	offset: '-=1000'
}).add({
	targets: '.ml8 .circle-dark',
	scale: [0, 1],
	duration: 1100,
	easing: "easeOutExpo",
	offset: '-=600'
}).add({
	targets: '.ml8 .letters-left',
	scale: [0, 1],
	duration: 1200,
	offset: '-=550'
}).add({
	targets: '.ml8 .bang',
	scale: [0, 1],
	duration: 1200,
	offset: '-=1000'
}).add({
	targets: '.ml8',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1400
});

anime({
targets: '.ml8 .circle-dark-dashed',
duration: 8000,
easing: "linear",
loop: true
});