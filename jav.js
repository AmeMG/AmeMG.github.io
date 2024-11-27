var data = [
    {
        img: "./imagenes/f5abdf10e091602271006a56159b246e.jpg",
        country: "ESCULTURAS",
        place:"GALIS",
        describe:
           "",
    },
    {
        img: "./imagenes/46281e52c13384afe3fc4ba8c4799643.jpg",
        country: "ESCULTURAS",
        place:"VOLAR",
        describe:
           "",
    },
    {
        img: "./imagenes/57c89ee2a25f8241eb4b64c1873ae633.jpg",
        country: "ESCULTURAS",
        place:"RELIGION",
        describe:
           "",
    },
    {
        img: "./imagenes/51c8ed24ded0e56fbeedd10fa8d424d5.jpg",
        country: "ESCULTURAS",
        place:"ANTOR",
        describe:
           "",
    },
];

const introduce = document.querySelector(".introduce");
const ordinalNumber=document.querySelector(".ordinal-number");

introduce.innerHTML="";
ordinalNumber.innerHTML="";

for(let i =0; i < data.length; i++){
    introduce.innerHTML+= `
                    <div class="wrapper">
                        <span>
                            <h5 class="country" style="--idx: 0">${data[i].country}</h5>
                        </span>
                        <span>
                            <h1 class="place" style="--idx: 1">${data[i].place}</h1>
                        </span>
                        <span>
                            <p class="describe" style="--idx: 2">${data[i].describe}</p>
                        </span>
                    </div>
                    `;

    ordinalNumber.innerHTML +=`<h2>0${i+1}</h2>`;
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");

thumbnailListWrapper.innerHTML += `
                        <div class="thumbnail zoom">
                            <img src="${data[0].img}" alt="">
                        </div>
`;
for (let i =1; i < data.length; i++){
    thumbnailListWrapper.innerHTML += ` 
                        <div class="thumbnail" style="--idx: ${i-1}">
                            <img src="${data[i].img}" alt="">
                        </div>
`;
};

const nextBtn=document.querySelector(".navigation .next-button");
var currentIndex=0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled=true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled=false;
    }, 1000);

    for(let i = 2; i < thumbnailListWrapper.childElementCount; i++)
    {
        thumbnailListWrapper.children[i].style= `--idx: ${i - 2}`;
    }
    if(currentIndex < data.length - 1){
        currentIndex++;
    } else currentIndex=0;
    for(let i=0; i < data.length; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent=`0${currentIndex+1}`
});
