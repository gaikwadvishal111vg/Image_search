const accessKey = "UrQObsTzMZsV9JpcHDg4BgWO0qlaKDV3e62V2jM9CCw";
const searchForm =document.getElementById('search-form');
const searchBox =document.getElementById('search-box');
const searchResult =document.getElementById('search-result');
const showmoreButton =document.getElementById('show-more-btn');
// searchResult.style.backgroundColor='darkgray';
// searchResult.style.width="70%";
let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response =await fetch(url);
    const data =await response.json();
    console.log(data);
    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;
console.log(results);
    results.map((result)=>{
        const image =document.createElement("img");
        image.src=result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image); //image display in a href tag
    searchResult.appendChild(imageLink)//add img to the div
    
    });
    showmoreButton.style.display="block"; //dispaly  button when there are images to be shown
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    // every time you enter a page become one to show data
    // searchForm.style.backgroundColor='#f4d8b7';
    searchImages();

});

showmoreButton.addEventListener("click",()=>{
    page++;
    searchImages();
});