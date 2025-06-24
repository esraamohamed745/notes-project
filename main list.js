
let noteText2 = document.getElementById("noteText2");
let noteDate2 = document.getElementById("noteDate2");
let chexBtn = document.getElementById("chexBtn");
let addNoteTwo = document.getElementById("addNoteTwo");
let chexText = document.getElementById("chexText");
let btnListTwo = document.getElementById("btnListTwo");
let outlineContainer = document.getElementById("outline-container");
let addList = document.getElementById("addList");
let rowThree = document.getElementById("rowThree");
let buttonReviewOne = document.getElementById("buttonReviewOne");
let chexTwo = document.getElementById("chexTwo");
let textTwo = document.getElementById("textTwo");
let chexBtn1 = document.getElementById("chexBtn1");
let chexBtn2 = document.getElementById("chexBtn2");
let chexBtn3 = document.getElementById("chexBtn3");
let chexText1 = document.getElementById("chexText1");
let chexText2 = document.getElementById("chexText2");
let chexText3 = document.getElementById("chexText3");
let chexClick = document.getElementById("chexClick");
let click = document.getElementById("click");


// list

btnListTwo.addEventListener("click" , function(){
  outlineContainer.style.display = "flex";

});


closeTwo.addEventListener("click" , function(){
    outlineContainer.style.display = "none";
});



let noteContain;
let twoFlag = false;
if(localStorage.getItem("lists") !=null){
    noteContain = JSON.parse(localStorage.getItem("lists"));
    displayList();
} else{
    noteContain = [];
}
let temp;

addNoteTwo.addEventListener("click" , function(){
       let note = {
        title:noteText2.value ,
        date: noteDate2.value ,
        chex: chexBtn.value,
        text: chexText.value,
        chexOne: chexBtn1.value,
        textOne: chexText1.value,
        chexTwo: chexBtn2.value,
        textTwo: chexText2.value,
        chexThree:chexBtn3.value,
        textThree: chexText3.value,
        // large: rowThree.innerHTML,
        // two: chexTwo.value,
        // desc: textTwo.value,

    }

    if(twoFlag == false){
          noteContain.push(note);

    } else{
        noteContain[temp] = note;
        twoFlag = false;
      addNoteTwo.innerHTML = "add note";
    }

    console.log(noteContain);
    displayList();
    localStorage.setItem("lists" , JSON.stringify(noteContain));
    outlineContainer.style.display = "none";

     noteText2.value = "";
     noteDate2.value = "";
     chexBtn.value = "";
     chexText.value = "";
     rowThree.innerHTML = "";
    // chexTwo.value = "";
    // textTwo.value = "";



    })

function displayList(){
    let market = "";
    for(var i = 0 ; i< noteContain.length ; i++){
        market += `<div class="col-4 card">
        <h3>${noteContain[i].title}</h3>
        <h6 class="font">${noteContain[i].date}</h6>
        <div>
        <span id="chexClick">${noteContain[i].chex}</span>
       <span id="click">${noteContain[i].text}</span>
       </div>
         <div>
        <span>${noteContain[i].chexOne}</span>
       <span>${noteContain[i].textOne}</span>
       </div>
         <div>
        <span>${noteContain[i].chexTwo}</span>
       <span>${noteContain[i].textTwo}</span>
       </div>
         <div>
        <span>${noteContain[i].chexThree}</span>
       <span>${noteContain[i].textThree}</span>
       </div>
        <div class= "d-flex justify-content-end gap-3">
        <a href="#"><i class="fa-solid fa-pen icon1" onclick="editBtn(${i})"></i></a>
        <a href="#" id="btn-delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-trash icon1"></i></a>
        </div>
      </div>`
    }
    document.getElementById("rowTwo").innerHTML = market;
}


function deleteBtn(i){
    noteContain.splice(i , 1);
   localStorage.setItem("lists" , JSON.stringify(noteContain));
    displayList();
}

function editBtn(i){
     outlineContainer.style.display = "flex";
    noteText2.value = noteContain[i].title;
    noteDate2.value = noteContain[i].date;
    chexBtn.value = noteContain[i].chex;
    chexText.value = noteContain[i].text;
    chexBtn1.value = noteContain[i].chexOne;
    chexText1.value = noteContain[i].textOne;
     chexBtn2.value = noteContain[i].chexTwo;
    chexText2.value = noteContain[i].textTwo;
     chexBtn3.value = noteContain[i].chexThree;
    chexText3.value = noteContain[i].textThree;
    addNoteTwo.innerHTML = "edit note";
    twoFlag = true;
    temp =i;

}
let searchFlag = true;

function searchByWho(){
    if(id == "whoIs"){
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
        <span id="chexClick">${noteContain[i].chex}</span>
        <span id="click">${noteContain[i].text}</span>
        <div class= "d-flex justify-content-end gap-3">
        <a href="#"><i class="fa-solid fa-pen icon1" onclick="editBtn(${i})"></i></a>
        <a href="#" id="btn-delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-trash icon1"></i></a>
        </div>
      </div>`

      }
      }
    }

    document.getElementById("rowTwo").innerHTML = market;
    
}

// button to add list
// let containerList = [];

// addList.addEventListener("click" ,function(){

//     let notes = {
//     chex: chexBtn.value,
//     text: chexText.value,
    
//     }
    
//     containerList.push(notes);
//     console.log(containerList);
//     displayToDo();
// });

// function displayToDo(){
//       let todo = "";
//     for(var i = 0; i< containerList.length ; i++ ){

//         todo += `<div class="card-one"> <div class="col-12">
//          <input type="checkbox" name="checkbox" id="chexTwo" class="size">
//         <input type="text" name="text" id="textTwo" class="chexList">
//         </div>
//         </div>`
//     }

//     document.getElementById("rowThree").innerHTML = todo;

// }
 chexBtn.addEventListener("click" , function(){
        if(chexBtn.checked){
         chexText.style.textDecoration = " line-through";
          chexClick.checked = true;
         click.style.textDecoration = " line-through";
     } else{
           chexText.style.textDecoration = "none";
            chexClick.checked = false;
         click.style.textDecoration = "none";
 }

 });

 chexBtn1.addEventListener("click" , function(){
        if(chexBtn1.checked){
         chexText1.style.textDecoration = " line-through";
          chexClick.checked = true;
         click.style.textDecoration = " line-through";
     } else{
           chexText1.style.textDecoration = "none";
            chexClick.checked = false;
         click.style.textDecoration = "none";
 }
 
 });
  chexBtn2.addEventListener("click" , function(){
        if(chexBtn2.checked){
         chexText2.style.textDecoration = " line-through";
         chexClick.checked = true;
         click.style.textDecoration = " line-through";

     } else{
           chexText2.style.textDecoration = "none";
         chexClick.checked = false;
         click.style.textDecoration = " none";
 }
 
 });
  chexBtn3.addEventListener("click" , function(){
        if(chexBtn3.checked){
          chexText3.style.textDecoration = " line-through";
           chexClick.checked = true;
         click.style.textDecoration = " line-through";
     } else{
           chexText3.style.textDecoration = "none";
            chexClick.checked = false;
         click.style.textDecoration = "none";
 }
 
 });

//review

 buttonReviewOne.addEventListener("click" , function(){
    window.location.href = "review.html";
})



 
 