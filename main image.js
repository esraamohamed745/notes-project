
let noteText3 = document.getElementById("noteText3");
let noteDate3 = document.getElementById("noteDate3");
let addNoteThree = document.getElementById("addNoteThree");
let btnListTwo = document.getElementById("btnListTwo");
let outlineContainer = document.getElementById("outline-images");
let addList = document.getElementById("addList");
let rowThree = document.getElementById("rowThree");
let closeThree = document.getElementById("closeThree");
let btnImage = document.getElementById("btnImage");
let imageInput = document.getElementById("imageInput");
let buttonReviewTwo = document.getElementById("buttonReviewTwo");
let imgSelect = document.getElementById("imgSelect");


// image

btnImage.addEventListener("click" , function(){
  outlineContainer.style.display = "flex";

});


closeThree.addEventListener("click" , function(){
    outlineContainer.style.display = "none";
});



let noteContain;
let twoFlag = false;

if(localStorage.getItem("images") !=null){
    noteContain = JSON.parse(localStorage.getItem("images"));
    displayList();
} else{
    noteContain = [];
}
let temp;
addNoteThree.addEventListener("click" , function(){
       let note = {
        title:noteText3.value ,
        date: noteDate3.value ,
        img: imageInput.files[0].name,

      }

    console.log(note.img);   
    
  

    if(twoFlag == false){
          noteContain.push(note);

    } else{
        noteContain[temp] = note;
        twoFlag = false;
      addNoteThree.innerHTML = "add note";
    }

    console.log(noteContain);
    displayList();
     localStorage.setItem("images" , JSON.stringify(noteContain));
     outlineContainer.style.display = "none";

     noteText3.value = "";
     noteDate3.value = "";
     imageInput.src = "";


    })

function displayList(){
    let market = "";
    for(var i = 0 ; i< noteContain.length ; i++){
        market += `<div class="col-4 card">
        <h3>${noteContain[i].title}</h3>
        <h6 class="font">${noteContain[i].date}</h6>
          <img src="media/${noteContain[i].img}" alt="photo" width ="230" class="imgOne">
        <div class= "d-flex justify-content-end gap-3">
        <a href="#"><i class="fa-solid fa-pen icon1" onclick="editBtn(${i})"></i></a>
        <a href="#" id="btn-delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-trash icon1"></i></a>
        </div>
      </div>`
    }
    document.getElementById("rowFour").innerHTML = market;
}


function deleteBtn(i){
    noteContain.splice(i , 1);
    localStorage.setItem("images" , JSON.stringify(noteContain));
    displayList();
}

function editBtn(i){
     outlineContainer.style.display = "flex";
    noteText3.value = noteContain[i].title;
    noteDate3.value = noteContain[i].date;
    addNoteThree.innerHTML = "edit note";
    twoFlag = true;
    temp =i;

}
let searchFlag = true;

function searchByWho(){
    if(id == "searchThis"){
        searchFlag =true;
    } else{
        searchFlag = false;
    }
}

 function searching(value){
      let market = "";
      if(searchFlag == true){
          for(var i = 0 ; i< noteContain.length ; i++){
          if(noteContain[i].title.includes(value)){
          market += `<div class="col-4 card">
        <h3>${noteContain[i].title}</h3>
        <h6 class="font">${noteContain[i].date}</h6>
          <img src="${noteContain[i].image}" alt="photo" id="imgSelect">
        <div class= "d-flex justify-content-end gap-3">
        <a href="#"><i class="fa-solid fa-pen icon1" onclick="editBtn(${i})"></i></a>
        <a href="#" id="btn-delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-trash icon1"></i></a>
        </div>
      </div>`

      }
      }
    }

    document.getElementById("rowFour").innerHTML = market;
    
}

//review

buttonReviewTwo.addEventListener("click" , function(){
    window.location.href = "review.html";
})