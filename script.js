const select = document.querySelector("select");

select.addEventListener("change", changeLanguage);

function changeLanguage(){
    let lang = select.value;
    for(let key in langArr){
        let elem = document.querySelector('.lng-' + key);
        
        if(elem){
            elem.innerHTML = langArr[key][lang];
        }    
            
    } 
}

select.addEventListener("change", changeLanguage);
    