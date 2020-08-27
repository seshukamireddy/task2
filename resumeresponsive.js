function jsonloading(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=()=>{
        if(xhr.readyState=="4" && xhr.status ===200){
            callback(xhr.responseText);
        }
    }
xhr.send();
}
jsonloading("resumeresponsive.json",(Text)=>{
    let d=JSON.parse(Text);
    console.log(d);
    info(d.profile);
    dell(d.details);
    due(d.card);
})
var main=document.querySelector(".main");
function info(cool){
    var p=document.createElement("img");
    p.src=cool.picture;
    main.appendChild(p);
    var name=document.createElement("h5");
    name.textContent=cool.name;
    main.appendChild(name);
    var work=document.createElement("h4");
    work.textContent=cool.work;
    main.appendChild(work); 
    var mobile=document.createElement("p");
    mobile.textContent=cool.mobile;
    main.appendChild(mobile);
    var gmial=document.createElement("p");
    gmial.textContent=cool.gmail;
    main.appendChild(gmial);
    var place=document.createElement("p");
    place.textContent=cool.place;
    main.appendChild(place);
}
var submain1=document.querySelector(".submain1");
var submain2=document.querySelector(".submain2");
var submain3=document.querySelector(".submain3");
var submain4=document.querySelector(".submain4");
function dell(hard){
    var headone=document.createElement("h3");
    headone.textContent=hard.heading1;
    submain1.appendChild(headone);
    var h1inf=document.createElement("li");
    h1inf.textContent=hard.h1info;
    submain1.appendChild(h1inf);
    var headtwo=document.createElement("h3");
    headtwo.textContent=hard.heading2;
    submain2.appendChild(headtwo);
    var h2inf=document.createElement("li");
    h2inf.textContent=hard.h2info;
    submain2.appendChild(h2inf);
    var headthree=document.createElement("h3");
    headthree.textContent=hard.heading3;
    submain3.appendChild(headthree);
    var h3sub=document.createElement("h4");
    h3sub.textContent=hard.h3sub;
    submain3.appendChild(h3sub);
    var h3subinfo1=document.createElement("span");
    h3subinfo1.textContent=hard.h3subinfo1;
    submain3.appendChild(h3subinfo1);
    var h3subinfo2=document.createElement("span");
    h3subinfo2.textContent=hard.h3subinfo2;
    submain3.appendChild(h3subinfo2);
    var h3subinfo3=document.createElement("span");
    h3subinfo3.textContent=hard.h3subinfo3;
    submain3.appendChild(h3subinfo3);
    var h3subinfo4=document.createElement("span");
    h3subinfo4.textContent=hard.h3subinfo4;
    submain3.appendChild(h3subinfo4);
    var h3sub1=document.createElement("h4");
    h3sub1.textContent=hard.h3sub1;
    submain3.appendChild(h3sub1);
    var h3sub1info1=document.createElement("span");
    h3sub1info1.textContent=hard.h3sub1info1;
    submain3.appendChild(h3sub1info1);
    var h3sub1info2=document.createElement("span");
    h3sub1info2.textContent=hard.h3sub1info2;
    submain3.appendChild(h3sub1info2);
    var h3sub1info3=document.createElement("span");
    h3sub1info3.textContent=hard.h3sub1info3;
    submain3.appendChild(h3sub1info3);
    var h3sub2=document.createElement("h4");
    h3sub2.textContent=hard.h3sub2;
    submain3.appendChild(h3sub2);
    var h3sub2info=document.createElement("span");
    h3sub2info.textContent=hard.h3sub2info;
    submain3.appendChild(h3sub2info);
    var heading4=document.createElement("h3");
    heading4.textContent=hard.heading4;
    submain4.appendChild(heading4);
    var h4list1=document.createElement("li");
    h4list1.textContent=hard.h4list1;
    submain4.appendChild(h4list1);
    var h4list2=document.createElement("li");
    h4list2.textContent=hard.h4list2;
    submain4.appendChild(h4list2);
    var h4list3=document.createElement("li");
    h4list3.textContent=hard.h4list3;
    submain4.appendChild(h4list3);
}


