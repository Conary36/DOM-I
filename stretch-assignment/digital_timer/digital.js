
 const count = document.querySelectorAll('.digit');
 console.log(count);
 //console.log('Hello World!');

function msCount(){
    //console.log(count);
    
        
         setTimeout(function () {
            for (let i = 0; i < 11; i++) {
            count[count.length-1].textContent = i;
            console.log(count[count.length -1].textContent);
            }
         }, 1000);
        
    
}
msCount();
    