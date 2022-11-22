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

/*Sidebar js end*/