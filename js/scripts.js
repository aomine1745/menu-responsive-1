var btn = document.getElementById('menu');
var links = document.getElementById('links');
btn.addEventListener("click", Toogle);
function Toogle(){
	if(links.classList.contains('active')){
		links.classList.remove('active');
	}else{
		links.classList.add('active');
	}
	
}