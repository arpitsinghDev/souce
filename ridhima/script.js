var qAnda=[
{
	qusetion:"green",
	answer:'#0f0'
},
{
	qusetion:"red",
	answer:'#f00'
},
{
	qusetion:"blue",
	answer:'#00f'
},
{
	qusetion:"white",
	answer:'#fff'
},
{
	qusetion:"black",
	answer:'#000'
},
{
	qusetion:"grey",
	answer:'#555'
},
{
	qusetion:"yellow",
	answer:'#ff0'
},
{
	qusetion:"pink",
	answer:'#f0f'
},
{
	qusetion:"Purple",
	answer:'#505'
},
{
	qusetion:"violet",
	answer:'#e8e'
}
];
var question=document.getElementById("question")
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")
var box=document.getElementById("box")
function creater(a){
	var m=[]
	if(a>7){
		m=[a,a-1,a-2,a-3]}
		else{
		m=[a,a+1,a+2,a+3];}
	m.sort(()=> .5-Math.random());
let value=""
value=`Where is color ${qAnda[a].qusetion}`;
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
	//question.value.remove()
	console.log(qAnda[a].qusetion)
	console.log(qAnda[a].answer)
}
function right(r){
	r.firstChild.innerHTML="V"
	r.firstChild.style.color="#0f0"
	setTimeout(function(){
	location.reload()},2000)
}
function wrong(w){
	w.firstChild.innerHTML="X"
	w.firstChild.style.color="#f00"
}
let next=[8,9,1,2,3,4,5,6,7]
next.sort(()=>.5-Math.random())
creater(next[0])
