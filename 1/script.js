let div = document.createElement("div");
div.setAttribute("class","box1");

let div1 = document.createElement("div");
div1.setAttribute("class","container");


let div2 = document.createElement("div");
div2.setAttribute("class","row");


let div3 = document.createElement("div");
div3.setAttribute("class","col-md-12");

let div4 = document.createElement("div");

let header = document.createElement("div");
header.setAttribute("class","header");
header.innerHTML=`Form submission`;

let flabel = document.createElement("label");
flabel.setAttribute("for","f");
flabel.innerHTML=`First Name`;

let br1 = document.createElement("br");

let fname =document.createElement("input");
fname.setAttribute("type","text");
fname.setAttribute("id","f");

let br2 = document.createElement("br");

let llabel = document.createElement("label");
llabel.setAttribute("for","l");
llabel.innerHTML=`Last Name`;

let br3 = document.createElement("br");

let lname =document.createElement("input");
lname.setAttribute("type","text");
lname.setAttribute("id","l");

let br4 = document.createElement("br");

let glabel = document.createElement("label");
glabel.setAttribute("for","g");
glabel.innerHTML=`Gender`;

let br5 = document.createElement("br");

let malname =document.createElement("input");
malname.setAttribute("type","radio");
malname.setAttribute("name","gender");
malname.setAttribute("id","male");
malname.setAttribute("value","Male");
malname.innerHTML= `Male`;

let mallabel = document.createElement("label");
mallabel.setAttribute("for","male");
mallabel.innerHTML=`Male`;

let femname =document.createElement("input");
femname.setAttribute("type","radio");
femname.setAttribute("name","gender");
femname.setAttribute("id","female");
femname.setAttribute("value","Female");
femname.innerHTML=`Female`

let femlabel = document.createElement("label");
femlabel.setAttribute("for","female");
femlabel.innerHTML=`Femaale`;

let br6 = document.createElement("br");


let alabel = document.createElement("label");
alabel.setAttribute("for","add");
alabel.innerHTML=`Address`;

let br7 = document.createElement("br");

let aname =document.createElement("input");
aname.setAttribute("type","text");
aname.setAttribute("id","add");

let br8 = document.createElement("br");

let plabel = document.createElement("label");
plabel.setAttribute("for","p");
plabel.innerHTML=`Pincode`;

let br9 = document.createElement("br");

let pname =document.createElement("input");
pname.setAttribute("type","text");
pname.setAttribute("id","p");

let br10 = document.createElement("br");

let slabel = document.createElement("label");
slabel.setAttribute("for","state");
slabel.innerHTML=`State`;

let br11 = document.createElement("br");

let sinput =document.createElement("input");
sinput.setAttribute("type","text");
sinput.setAttribute("id","state");

let br12 = document.createElement("br");

let clabel = document.createElement("label");
clabel.setAttribute("for","country");
clabel.innerHTML=`Country`;

let br13 = document.createElement("br");

let cname =document.createElement("input");
cname.setAttribute("type","text");
cname.setAttribute("id","country");

let br14 = document.createElement("br");

let foods = document.createElement("label");
foods.setAttribute("for","food");
foods.innerHTML=`FOOD `;

let br15 = document.createElement("br");

let sel1=document.createElement("input");
sel1.setAttribute("type","checkbox");
sel1.setAttribute("id","food1");
sel1.setAttribute("name","food");
sel1.setAttribute("value","South Indian Cuisine");
let food1 = document.createElement("label");
food1.setAttribute("for","food1");
food1.innerHTML=`South Indian Cuisine`;

let br16 = document.createElement("br");

let sel2=document.createElement("input");
sel2.setAttribute("type","checkbox");
sel2.setAttribute("id","food2");
sel2.setAttribute("name","food");
sel2.setAttribute("value","North Indian Cuisine");

let food2 = document.createElement("label");
food2.setAttribute("for","food2");
food2.innerHTML=`North Indian Cuisine`;

let br17 = document.createElement("br");

let sel3=document.createElement("input");
sel3.setAttribute("type","checkbox");
sel3.setAttribute("id","food3");
sel3.setAttribute("name","food");
sel3.setAttribute("value","chinese");

let food3 = document.createElement("label");
food3.setAttribute("for","food3");
food3.innerHTML=`Chinese`;

let br18 = document.createElement("br");

let sel4=document.createElement("input");
sel4.setAttribute("type","checkbox");
sel4.setAttribute("id","food4");
sel4.setAttribute("name","food");
sel4.setAttribute("value","Italian Cuisine");

let food4 = document.createElement("label");
food4.setAttribute("for","food4");
food4.innerHTML=`Italian Cuisine`;

let br19 = document.createElement("br");

let sel5=document.createElement("input");
sel5.setAttribute("type","checkbox");
sel5.setAttribute("id","food5");
sel5.setAttribute("name","food");
sel5.setAttribute("value","Lebanese Cuisine");

let food5 = document.createElement("label");
food5.setAttribute("for","food5");
food5.innerHTML=`Lebanese Cuisine`;

let br20 = document.createElement("br");

let submit=document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("value","submit");
submit.setAttribute("id","submit");
submit.addEventListener("click",submit1);


let br21 = document.createElement("br");


div4.append(header,flabel,br1,fname,br2,llabel,br3,lname,br4,alabel,br5,aname,br6,glabel,br7,malname,mallabel,femname,femlabel,br8,plabel,br9,pname,br10,slabel,br11,sinput,br12,clabel,br13,cname,br14,foods,br15,sel1,food1,br16,sel2,food2,br17,sel3,food3,br18,sel4,food4,br19,sel5,food5,br20,submit,br21);
div3.append(div4);
div2.append(div3);
div1.append(div2);
div.append(div1);
document.body.append(div);


let div5 = document.createElement("div");
div5.setAttribute("class","box2");

let div6 = document.createElement("div");
div6.setAttribute("class","container");

let div7 = document.createElement("div");
div7.setAttribute("class","row");

let div8 = document.createElement("div");
div8.setAttribute("class","col-md-8");

let div9 =document.createElement("table");
div9.setAttribute("class","table");
div9.innerHTML=`
  <thead class="thead-dark">
    <tr>
      <th scope="col">SL. NO</th>
      <th scope="col">FIRST Name</th>
      <th scope="col">LAST Name</th>
      <th scope="col">GENDER</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">STATE</th>
      <th scope="col">COUNTRY</th>
      <th scope="col">FOOD</th>
    </tr>
  </thead>`


let div10 =document.createElement("tbody");

function submit1(){
  let firstname = document.getElementById("f").value;
  let lastname = document.getElementById("l").value;
  let address = document.getElementById("add").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;

  

  let gender = document.getElementsByName("gender");
  for(let i=0; i<gender.length; i++){
      if(gender[i].checked){
          gender[i].value;
   let gen =gender[i].value;
   let values=[];

   let check = document.getElementsByName("food");
   for(let j=0; j<=check.length; j++){
      if(check[j].checked){
     values.push(check[j].value);
console.log(check[j].value)
  div10.innerHTML=`
  <tr>
    <th scope="row">1</th>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${gen}</td>
    <td>${address}</td>
    <td>${state}</td>
    <td>${country}</td>
    <td>${values}</td>
  </tr>`
  
}}
}} 
}; 


div9.append(div10);
div8.append(div9);
div7.append(div8);
div6.append(div7);
div5.append(div6);
document.body.append(div5);





