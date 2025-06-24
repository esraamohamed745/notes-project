
let httpRequest = new XMLHttpRequest();
httpRequest.open("Get" , "https://jsonplaceholder.typicode.com/comments");
httpRequest.send();

let allReviews;

httpRequest.addEventListener("readystatechange" , function(){
    if(httpRequest.readyState === 4 && httpRequest.status === 200){
        allReviews = JSON.parse(httpRequest.response);
        console.log(allReviews);
         displayReviews()
    } 
});


function displayReviews(){
    var rate = "";
    for(let i = 0 ; i< allReviews.length; i++){
        rate += `<div class="cardOne col-4">
    <div class="content1">
     <h6 class="card-title d-inline-block px-2">name :</h6><h6 class="card-subtitle mb-2 text-body-secondary d-inline-block">${allReviews[i].name}</h6>
     </div>
   <div class="content2">
     <h6 class="card-title d-inline-block px-2">email :</h6><h6 class="card-subtitle mb-2 text-body-secondary d-inline-block">${allReviews[i].email}</h6>
     </div>
     <div class="content3">
     <h6 class="card-title d-inline-block px-2">review :</h6><h6 class="card-subtitle mb-2 text-body-secondary d-inline-block">${allReviews[i].body}</h6>
     </div>
</div>`

    }
    document.getElementById("mainRow").innerHTML = rate;
}