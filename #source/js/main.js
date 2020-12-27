let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");
let hiddens = document.querySelector(".header__hiddens");
let city = document.querySelector(".header__city");
let tel = document.querySelector(".header__tel");
let btn = document.querySelector(".header__btn");
let btnM = document.querySelector(".header__btnM");
let sb = document.querySelector(".showBlock");
let smb = document.querySelector(".showMobileBlock");
let sps = hiddens.querySelectorAll("span");
let flug = true;
hiddens.onclick = () => {
	for(sp of sps) {
		let bg = '';
		if (window.innerWidth < 993)
			bg = 'url("/img/feather-menu.svg") no-repeat center';
		else
			bg = 'url("/img/cube.png")';
		flug ? sp.style.background = 'url("/img/close.svg") no-repeat' : 
		sp.style.background = bg;
	}
	flug ? sb.style.display = 'flex' :
	sb.style.display = 'none';
	flug ? city.style.visibility = 'hidden' :
	city.style.visibility = 'visible';
	flug ? tel.style.visibility = 'hidden' :
	tel.style.visibility = 'visible';
	if (window.innerWidth < 993) {
		flug ? btnM.style.display = 'block' :
		btnM.style.display = 'none';
		flug ? smb.style.display = 'flex' :
		smb.style.display = 'none';
	} else {
		btnM.style.display = 'none';
		smb.style.display = 'none';
	}
	
	flug = !flug;
}
let block = document.querySelector(".faq__block");
let quest = document.querySelector(".faq__quest p");
let f = true;
function btnPlus(e) {
	f ? e.style.height = 'auto' : 
	e.style.height = '96px';
	f ? e.classList.add('activeText') : 
	e.classList.remove('activeText');
	f ? e.classList.add('activeBg') : 
	e.classList.remove('activeBg');
	f = !f;
}
let online = document.querySelector('.online');
let onlineM = document.querySelector('.onlineM');
let popap = document.querySelector('.popap');
let popapBg = document.querySelector('.popap-bg');
let close = document.querySelector('.close');
online.onclick = () => {
	popap.style.display = 'block';
}
onlineM.onclick = () => {
	popap.style.display = 'block';
}
popapBg.onclick = () => {
	popap.style.display = 'none';
}
close.onclick = () => {
	popap.style.display = 'none';
}