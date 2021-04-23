
var img = document.querySelector("#logo");
var container = document.querySelector("#container");
var ul = document.createElement("ul");
container.appendChild(ul);
SetProperty(window, img.border, ul);
SetProperty(window, img.complete, ul);
SetProperty(window, img.height, ul);
SetProperty(window, img.width, ul);
SetProperty(window, img.hspace, ul);
SetProperty(window, img.lowsrc, ul);
SetProperty(window, img.name, ul);
SetProperty(window, img.src, ul);
SetProperty(window, img.vspace, ul);


function SetProperty(w, property, parent){
	var li = w.document.createElement("li");
	li.appendChild(w.document.createTextNode(propName(img, property)+":"+property));
	if(property.lenght){
		li.onclick=CreateHtml(property);
	}
	parent.appendChild(li);
}

function CreateHtml(property){
	w = window.open("", "Scriptic", "resizable=1, width=300, height=150");
	w.document.open ();

	w.document.write("<html><head><title>Оппа</title><META http-equiv=Content-Type content='text/html; charset=UTF-8'></head><body></body></html>");

	var ul = w.document.createElement("ul");
	SetProperty(w,property,ul);

	window.focus();
}

var res = '';

function propName(prop, value){
   for(var i in prop) {
       if (prop[i] == value){
            return i;
       }
   }
   return false;
}