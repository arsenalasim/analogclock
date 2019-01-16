const [secondHand,minutesHand,hoursHand] = document.getElementsByClassName('hand');
const secondSound = document.querySelector('#sound')

console.log(secondHand)
function updateTime(){
	const now = new Date();
	const second = now.getSeconds();
	const minute = now.getMinutes();
	const hour = now.getHours();
	const secondInDeg = ((second/60)*360);
	secondHand.style.transform= `rotate(${secondInDeg+90}deg)`
	const minuteInDeg = ((minute/60)*360);
	minutesHand.style.transform= `rotate(${minuteInDeg+90}deg)`
	const hourInDeg = ((hour/60)*360);
	hoursHand.style.transform= `rotate(${hourInDeg+90}deg)`;
	secondSound.play();
}	


setInterval(updateTime,1000);