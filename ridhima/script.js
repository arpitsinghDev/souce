var qAnda=[
{
	question:"green",
	answer:'#0f0',
	audiof:"audio/green.mp3"
},
{
	question:"red",
	answer:'#f00',
	audiof:"audio/red.mp3"
},
{
	question:"blue",
	answer:'#00f',
	audiof:"audio/blue.mp3"
},
{
	question:"white",
	answer:'#fff',
	audiof:"audio/white.mp3"
},
{
	question:"black",
	answer:'#000',
	audiof:"audio/black.mp3"
},
{
	question:"grey",
	answer:'#555',
	audiof:"audio/grey.mp3"
},
{
	question:"yellow",
	answer:'#ff0',
	audiof:"audio/yellow.mp3"
},
{
	question:"pink",
	answer:'#f0f',
	audiof:"audio/pink.mp3"
},
{
	question:"Purple",
	answer:'#505',
	audiof:"audio/purple.mp3"
},
{
	question:"violet",
	answer:'#e8e',
	audiof:"audio/violet.mp3"
}
];
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "autoplay");
    this.sound.setAttribute("id", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
   
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play()
    }
    this.stop = function(){
        this.sound.pause();
    }

}
var question=document.getElementById("question")
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")
var box=document.getElementById("box")
let notchoose=1
function creater(a){
	var m=[]
	if(a>=7){
		m=[a,a-1,a-2,a-3]}
		else{
		m=[a,a+1,a+2,a+3];}
	m.sort(()=> .5-Math.random());
let value=""
value=`Where is color ${qAnda[a].question}`;

let colorName = new sound(qAnda[a].audiof)
//////////////////
question.addEventListener("click",()=>{
	let mysound=new sound("audio/wsc.mp3")
	mysound.play()
	setTimeout(()=>colorName.play(),890)
})
///////////////////////////////
question.innerHTML=value
let oc1=option1.style.backgroundColor=qAnda[m[0]].answer
let oc2=option2.style.backgroundColor=qAnda[m[1]].answer
let oc3=option3.style.backgroundColor=qAnda[m[2]].answer
let oc4=option4.style.backgroundColor=qAnda[m[3]].answer

	option1.addEventListener("click",()=>{
		if(oc1==qAnda[a].answer){
			right(option1)
		}
		else {
			wrong(option1)
		}
	});
	option2.addEventListener("click",()=>{
		if(oc2==qAnda[a].answer){
			right(option2)
		}
		else {
			wrong(option2)
		}
	});
	option3.addEventListener("click",()=>{
		if(oc3==qAnda[a].answer){
			right(option3)
		}
		else {
			wrong(option3)
		}
	});
	option4.addEventListener("click",()=>{
		if(oc4==qAnda[a].answer){
			right(option4)
		}
		else {
			wrong(option4)
		}
	});
}

//if(notchoose==1){
function right(r){
	
	if(notchoose==1){
	r.firstChild.innerHTML="V"
	r.firstChild.style.color="#0f0"
	setTimeout(function(){location.reload()},2000)
}
notchoose++
}
function wrong(w){
	if(notchoose==1){
	w.firstChild.innerHTML="X"
	w.firstChild.style.color="#f00"
	setTimeout(function(){location.reload()},2000)
}
notchoose++
}

//}
let next=[8,7,1,2,3,4,5,6]
next.sort(()=>.5-Math.random())
creater(next[0])


