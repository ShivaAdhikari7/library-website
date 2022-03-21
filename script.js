// Constructur Book Prototype:
function Book(name, author, type){
    this.name=name;
    this.author=author;
    this.type=type;
}

// Constructur Display Prototype:
function Display(){

}

Display.prototype.add=function(book){
    let tablebody=document.getElementById("tablebody");
    console.log(tablebody);
    let html=`
                <tr>
                                
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                   
                </tr>
                
                `
    tablebody.innerHTML=html;
}
Display.prototype.clear=function(){
    let libraryForm= document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.show=function(type,displayMsg){
    let message=document.getElementById("message");
    let boldtext;
    if(type==='success'){
        boldtext='Sucess!';
    }
    else{
        boldtext='Error!'
    }
    message.innerHTML=`
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldtext}</strong> ${displayMsg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        `
                        setTimeout(() => {
                            message.innerHTML="";
                        }, 5000);
}

Display.prototype.validate=function(book){
    if(book.name.length<2|| book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

let libraryForm=document.getElementById("libraryForm");
libraryForm.addEventListener("submit", function(e){

    let name=document.getElementById("bookName").value;
    let author=document.getElementById("authorName").value;

    let type;
    let programming=document.getElementById("programming");
    let web=document.getElementById("web");
    let networking=document.getElementById("networking");

    if(programming.checked){
        type=programming.value;
    }
    else if(web.checked){
        type=web.value;
    }
    else if(networking.checked){
        type=networking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
   
    let display= new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success'," Your book is added Sucessfully.");        
    }
    else{
        display.show("danger", " Sorry book cannot be added");
        display.clear();
    }

   
    e.preventDefault();
})