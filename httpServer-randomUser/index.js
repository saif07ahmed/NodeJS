const { write } = require('fs');
var http = require('http');

data = (fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json()).then((data) => {
            http.createServer(function (req, res) {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html');
            let d=data.results;
            console.log(d);
            if (req.url == '/') {
                res.write(
                    `<a href="http://localhost:8080/randomProfile">Profile</a>
                <a href="http://localhost:8080/search"> Search</a>`
                )

            }
            else if (req.url == '/randomProfile') {
                let dt = JSON.stringify(data.results[0]);
                let d = JSON.parse(dt);
                res.write("Hello my Name is")
                res.end(

                    `<h1>${d.name.title} ${d.name.first} ${d.name.last} </h1>
                    <img src=${d.picture.large}>`

                )
            }

            else if (req.url == '/search') {
                // let allNames = d.map(
                //     obj => obj.name.first+" "+obj.name.last
                // )

                res.write(   
                    `
                    
<body>
<div style="display: flex;">
    <div style="display: block;">
        <input id="nameInput" placeholder="Name">
        <button onclick="myFunction()">click</button>
    </div>

    <div style="display: block;">
        <input style="display: inline;" id="genderInput" placeholder="Gender" >
        <button onclick="myFunction2()">click</button>
    </div>

    <select name="sort" id="sortOption">
        <option value = "ascending"> ASC   
        </option>  
        <option value = "descending"> DSC   
        </option>  
    </select>
    <button onclick=sortList()>sort</button>

</div>
<p id="display">
</p>
</body>

<script>
let searchName = document.getElementById('nameInput');
let y = document.getElementById('display');
let searchGender = document.getElementById('genderInput')
let sortVal=document.getElementById('sortOption')


function myFunction(){
    d=${JSON.stringify(d)}.filter(obj =>{
        return obj.name.first.toLowerCase().includes(searchName.value.toLowerCase())
    })
    y.innerHTML = " ";

    for(let x of d) {
        let p = document.createElement('p');
        p.innerHTML = x.name.first + " " + x.name.last;
        let img=document.createElement('img')
        img.src=x.picture.large
        document.getElementById('display').appendChild(img);
        document.getElementById('display').appendChild(p);    
        };
    }     

function myFunction2(){
    y.innerHTML = " ";
    d=${JSON.stringify(d)}.filter(obj =>{
        return obj.gender.toLowerCase()==(searchGender.value.toLowerCase())
    })
    d.map((x) => {
        let p = document.createElement('p');
        p.innerHTML = x.name.first + " " + x.name.last;
        let img=document.createElement('img')
        img.src=x.picture.large
        document.getElementById('display').appendChild(img);
        document.getElementById('display').appendChild(p);    
        })
 }        
    function sortJSON(arr1, asc=true) {
        let arr = ${JSON.stringify(d)}
    return arr.sort((a, b) => {
      let x = a.name.first;
      let y = b.name.first;
      if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
      else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
  }
  

function sortList(){
    y.innerHTML = " ";
    let names = ${JSON.stringify(d)}
    if (sortVal.value ==="ascending"){
        names=sortJSON(names.results,true)
    }    
    else{
       names=sortJSON(names.results,false)
    }

    names.map((x) => {
        let p = document.createElement('p');
        p.innerHTML = x.name.first + " " + x.name.last;
        let img=document.createElement('img')
        img.src=x.picture.large
        document.getElementById('display').appendChild(img);
        document.getElementById('display').appendChild(p);    
    })

}        

</script>
</body>
                `)

                res.end('')

                // for(i of allNames){
                //     res.write(`<h3>${i}</h3>`)
                // }       
        }
    }).listen(8080)
    }))
