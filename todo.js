let contenu= document.querySelector('.f-family')
let boutton= document.querySelector('.btn')
let task= document.querySelector('.tasktodo')
console.log(contenu)
console.log(boutton)
x="";
let input= document.querySelector('.inputselect')
input.addEventListener('change',function(e){

    x=e.target.value;
console.log(x)
});


boutton.addEventListener('click',function(e) {
    
    var paragh = document.createElement("p");
    let com = document.createElement("button");
    com.innerHTML="Complete"
    com.className="complete"
    paragh.appendChild(com);
    task.appendChild(paragh);
    
    
    let del= document.createElement("button");
    del.innerHTML="Delete";
    del.className="delete";
    paragh.appendChild(del);
    task.appendChild(paragh);
    
    let phrase= document.createElement("span");
    phrase.className="phrasestyle"
    phrase.innerHTML=x;
    paragh.appendChild(phrase);
    task.appendChild(paragh);
    x=''
    input.value="" ;
    
    
    del.addEventListener("click",function(event){
        del.parentElement.remove();

    });
com.addEventListener("click",function(event){
    if(com.innerHTML==="Complete"){
        com.innerHTML="Undo";
        phrase.className="phrasestyle1";
    }else{
    com.innerHTML="Complete";
        phrase.className="phrasestyle";
    }

    

});



})  