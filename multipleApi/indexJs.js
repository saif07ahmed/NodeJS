let page = 1
const size = 16
let clicked=""
window.onload=fetchDat(size,page,"")

function display(data,curr){
    let main=document.getElementById("main");
    if (curr!=clicked)
        {main.innerHTML=""}
    for(let j=0;j<data.length;j++){
        let section=document.createElement("section")
        let image=document.createElement("img")
        image.src=data[j].image
        section.appendChild(image)
        let title=document.createElement('h3')
        title.innerHTML=data[j].title
        section.appendChild(title)
        let par=document.createElement('p')
        par.innerHTML=data[j].teaser
        section.appendChild(par)
        let line=document.createElement('hr')
        section.appendChild(line)
    main.appendChild(section)
    //section.className="element"
    clicked=curr
    btn=document.getElementById('showMore')
    section.addEventListener("click",()=>{
        document.getElementById('body').innerHTML=data[j].html
        window.onload=fetchDat(size,page,"")
    })
    if (data.length<16){
        
        btn.style.display="none"
    }
    else{
        btn.style.display="block"
    }
    }
}

function showMore(){
    page+=1
    fetchDat(size,page,clicked)
}


let btn1=document.getElementById("articles");
btn1.addEventListener('click',()=>{
    fetchDat(size,page,'');
});

let btn2=document.getElementById("trends");
btn2.addEventListener('click',()=>{
    page=1
    fetchDat(size,page,"trends");
});

let btn3=document.getElementById("advice");
btn3.addEventListener('click',()=>{
    page=1
    fetchDat(size,page,"advice");
});

let btn4=document.getElementById("relationships");
btn4.addEventListener('click',()=>{
    page=1
    fetchDat(size,page,"relationships");
});


async function fetchDat(size=16,pag=1,category="") {
        let searc = document.getElementById('searchInput').value
        console.log(searc)
        let data
        if (searc!=""){
            main.innerHTML=""
            data = await fetch(`http://localhost:700/?pagesize=${size}&page=${pag}&category=${category}&search=${searc}`)
        }
        else{

            data= await fetch(`http://localhost:700/?pagesize=${size}&page=${pag}&category=${category}`)
        }
        const dataa = await data.json();
        display(dataa,category);       
}



