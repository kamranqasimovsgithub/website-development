const form = document.querySelector(".top-banner form");

var capital;
var map = {};

form.addEventListener("submit", e => {
    e.preventDefault();
    capital = (document.getElementById('cityName').value)  

    const url = `https://restcountries.com/v3.1/capital/${capital}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        map = data[0].maps;

        const { googleMaps, openStreetMaps } = map;
        
        function diller(){
            for(x in data[0].languages){
                return `<li>Language: <i>${x}</i></li>`
            }
        }

        
        const li = document.createElement("li");
        li.classList.add("city");

        const markup = `
        <span><a href="${googleMaps}" target='_blank'>${capital}</a></span>        

        <div class="city-name city-part" data-name="${googleMaps}">
            
            <div class="melumatlar1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42501316.08590627!2d49.7156096!3d40.534016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2s!4v1669112401809!5m2!1str!2s" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
            </div>
            <div class="melumatlar2">

                <p id="icon"><i class="fa fa-heart-o" style="font-size:36px;" onclick='changeHeart()'></i></p>
                <h2></h2>

                <ul id='list'>
                    <li><b>Continent: </b> <i>${data[0].continents[0]}</i></li>
                    <li id="flag"><b>Flag: </b> <img src="${data[0].flags.png}"/></li>
                    ${diller()}                     
                </ul>  

            </div>
        </div>

        <div class="city-temp">Temperature: ${Math.random().toFixed(2)*100}<sup>°C</sup>
        </div> 
        <div class="city-temp-button">
            <button id="delete" onclick=" confirm('1 item will be updated')" type="submit">UPDATE</button>     
            <button id="delete" onclick="this.parentNode.parentNode.remove(), confirm('1 item will be deleted'), func()" type="submit">DELETE</button>     
        </div> 
        `;
        li.innerHTML = markup;
        document.getElementsByClassName('cities')[0].prepend(li); 
        document.getElementsByTagName('aside')[0].style.height = "auto";
        document.getElementById('cityName').value="";        
    })
    .catch((err) => {
        alert( "Please search for a valid city 😩" );
    });    

});

/*Sidebar js start*/

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.opacity = "0";
    
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    setTimeout(()=>{
        document.getElementById("main").style.opacity = "1";
    }, 500);
}

function changeHeart(){    
    const element = document.getElementById("icon");        
    element.firstChild.remove();  

    const node = document.createElement("i");
    node.classList.add("fa");
    node.classList.add("fa-heart");
    node.style.fontSize= '36px';
    node.style.color="red";
    
    element.insertBefore(node, element.firstChild);
}

function func(){
    if(document.getElementsByTagName('main')[0].offsetHeight >= 312 && document.getElementsByTagName('main')[0].offsetHeight <= 550){
        document.getElementsByTagName('aside')[0].style.height = "300px";
        alert("yes")
    }
    console.log("big",document.getElementsByTagName('main')[0].offsetHeight)    
}

document.getElementById("demo").addEventListener("mouseover", tst);
document.getElementById("demo").addEventListener("mouseout", tst1);

function tst(){
    document.getElementsByClassName('chat-shift')[0].style.display='none'; 
    document.getElementsByClassName('contact-form')[0].style.display='none'; 
    document.getElementsByClassName('chat-div')[0].style.width='200px';
    setTimeout(showChat, 900);
    function showChat(){
        if(document.getElementsByClassName('chat-div')[0].offsetWidth == '200')
            document.getElementsByClassName('chat-shift')[0].style.display='';  
    }
}

console.log("En", document.getElementsByClassName('chat-div')[0].offsetWidth)

function tst1(){
    document.getElementsByClassName('chat-div')[0].style.width='50px';
    
    document.getElementsByClassName('chat-shift')[0].style.display='none';        
}

function showForm(){
    document.getElementsByClassName('contact-form')[0].style.display='';     
}
let bStyle = 'solid'
let b = 1000
setInterval(function(){
    //alert('alma')
    if(bStyle=='solid'){
        document.getElementsByClassName('contact-form')[0].style.transition = "all 0.6s ease-out";
        document.getElementsByClassName('contact-form')[0].style.borderStyle=bStyle;
        setTimeout(function(){
            bStyle=''
        }, 1000)
    }
    if(bStyle==''){
        document.getElementsByClassName('contact-form')[0].style.transition = "all 0.6s ease-out";
        document.getElementsByClassName('contact-form')[0].style.borderStyle='';

        setTimeout(function(){
            bStyle='solid'
        }, 100)
    }
    
},b)


function showMessage(){
    alert('isledi')
    document.getElementById('search-area').style.display = 'none';
    document.getElementById('search-area-ajax').style.display = 'none';
    document.getElementById('mesaj-qutusu').style.display = 'block';
}

function formSubmit(){
    event.preventDefault()
    alert('test')
    let ad = document.getElementById('ad').value
    let nomre = document.getElementById('nomre').value
    text1 = `<div class='message-cards' style="border: 1px solid gray;"><h1>${ad}</h1>`
    text2 = `<p>${nomre}</p></div>`
    document.getElementById('mesaj-qutusu').innerHTML += (text1 +'<hr>'+ text2);
}

function showCitySearch(x){
    x.parentNode.style.display='none';
    document.getElementById('search-area').style.display = '';    
}





/*Sidebar js end*/