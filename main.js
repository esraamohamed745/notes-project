
let outlineBox = document.getElementById("outline-box");
let btnText = document.getElementById("btnText");
let close = document.getElementById("close");
let boxItem = document.getElementById("box-item");
let noteText = document.getElementById("noteText");
let noteArea = document.getElementById("noteArea");
let addNote = document.getElementById("addNote");
let noteDate = document.getElementById("noteDate");
let btnDelete = document.getElementById("btn-delete");
let btnList = document.getElementById("btnList");
let outlineContainer = document.getElementById("outline-container");
let closeTwo = document.getElementById("closeTwo");
let searchBtn = document.getElementById("searchBtn");
let btnImage = document.getElementById("btnImage");
let buttonReview = document.getElementById("buttonReview");


btnText.addEventListener("click" , function(){
    outlineBox.style.display = "flex";
})

btnList.addEventListener("click" , function(){
    window.location.href = "list.html";


})
btnImage.addEventListener("click" , function(){
    window.location.href = "image.html"
})



close.addEventListener("click" , function(){
      outlineBox.style.display = "none";

})
let noteContainer;
let twoFlag = false;

if(localStorage.getItem("notes") !=null){
    noteContainer = JSON.parse(localStorage.getItem("notes"));
    displayNote();
}else{
    noteContainer = [];
}
let temp;

addNote.addEventListener("click" , function(){
    let note = {
        title:noteText.value ,
        date: noteDate.value ,
        write: noteArea.value,

    }

    if(twoFlag == false){
          noteContainer.push(note);

    } else{
        noteContainer[temp] = note;
        twoFlag = false;
      addNote.innerHTML = "add note";
    }

    console.log(noteContainer);
    displayNote();
    localStorage.setItem("notes" , JSON.stringify(noteContainer));
     outlineBox.style.display = "none";

     noteText.value = "";
     noteDate.value = "";
     noteArea.value = "";


})

function displayNote(){
    let market = "";
    for(var i = 0 ; i< noteContainer.length ; i++){
        market += `<div class="col-4 card">
        <h3>${noteContainer[i].title}</h3>
        <h6 class="font">${noteContainer[i].date}</h6>
        <p>${noteContainer[i].write}</p>
        <div class= "d-flex justify-content-end gap-3">
        <a href="#"><i class="fa-solid fa-pen icon1" onclick="editBtn(${i})"></i></a>
        <a href="#" id="btn-delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-trash icon1"></i></a>
        </div>
      </div>`
    }
    document.getElementById("row").innerHTML = market;
}

function deleteBtn(i){
    noteContainer.splice(i , 1);
     localStorage.setItem("notes" , JSON.stringify(noteContainer));
    displayNote();
}

function editBtn(i){
     outlineBox.style.display = "flex";
    noteText.value = noteContainer[i].title;
    noteDate.value = noteContainer[i].date;
    noteArea.value = noteContainer[i].write;
    addNote.innerHTML = "edit note";
    twoFlag = true;
    temp =i;

}
let searchFlag = true;

function searchByWho(){
    if(id == "whoThis"){
        searchFlag =true;
    } else{
        searchFlag = false;
    }
}

 function searching(value){
      let market = "";
      if(searchFlag == true){
          for(var i = 0 ; i< noteContainer.length ; i++){
          if(noteContainer[i].title.includes(value)){
                  market += `<div class="col-4 card">
                  <h3>${noteContainer[i].title}</h3>
                  <h6 class="font">${noteContainer[i].date}</h6>
                  <p>${noteContainer[i].write}</p>
                  <div class= "d-flex justify-content-end gap-3">
                  <a href="#"><i class="fa-solid fa-pen icon1" onclick="editBtn(${i})"></i></a>
                  <a href="#" id="btn-delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-trash icon1"></i></a>
                  </div>
                </div>`

      }
      }
    }

    document.getElementById("row").innerHTML = market;
    
}

// review



buttonReview.addEventListener("click" , function(){
    window.location.href = "review.html";
})











