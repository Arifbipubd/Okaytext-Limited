
document.getElementById('button1').addEventListener('click',function(){
    document.querySelector('.hide-section-1').style.display = 'block' ;
    document.querySelector('.hide-section-2').style.display = 'none' ;
    document.querySelector('.hide-section-3').style.display = 'none' ;
    document.querySelector('.hide-section-4').style.display = 'none' ;
    document.querySelector('.hide-section-5').style.display = 'none' ;
    // document.querySelector('.button').style.display = 'none' ;
})
document.getElementById('button2').addEventListener('click',function(){
    document.querySelector('.hide-section-1').style.display = 'none' ;
    document.querySelector('.hide-section-2').style.display = 'block' ;
    document.querySelector('.hide-section-3').style.display = 'none' ;
    document.querySelector('.hide-section-4').style.display = 'none' ;
    document.querySelector('.hide-section-5').style.display = 'none' ;
    // document.querySelector('.button').style.display = 'none' ;
})
document.getElementById('button3').addEventListener('click',function(){
    document.querySelector('.hide-section-1').style.display = 'none' ;
    document.querySelector('.hide-section-2').style.display = 'none' ;
    document.querySelector('.hide-section-3').style.display = 'block' ;
    document.querySelector('.hide-section-4').style.display = 'none' ;
    document.querySelector('.hide-section-5').style.display = 'none' ;
    // document.querySelector('.button').style.display = 'none' ;
})
document.getElementById('button4').addEventListener('click',function(){
    document.querySelector('.hide-section-1').style.display = 'none' ;
    document.querySelector('.hide-section-2').style.display = 'none' ;
    document.querySelector('.hide-section-3').style.display = 'none' ;
    document.querySelector('.hide-section-4').style.display = 'block' ;
    document.querySelector('.hide-section-5').style.display = 'none' ;
    // document.querySelector('.button').style.display = 'none' ;
})
document.getElementById('button5').addEventListener('click',function(){
    document.querySelector('.hide-section-1').style.display = 'none' ;
    document.querySelector('.hide-section-2').style.display = 'none' ;
    document.querySelector('.hide-section-3').style.display = 'none' ;
    document.querySelector('.hide-section-4').style.display = 'none' ;
    document.querySelector('.hide-section-5').style.display = 'block' ;
    // document.querySelector('.button').style.display = 'none' ;
})


/*----------------ActiveClass----------*/
var elements = document.getElementsByClassName("button");
for(var i = 0; i < elements.length; i++)
{
    elements[i].onclick = function(){
        
        // remove class from sibling
        
        var el = elements[0];
        while(el)
        {
            if(el.tagName === "DIV"){
                //remove class
                el.classList.remove("active");
                
            }
            // pass to the new sibling
            el = el.nextSibling;
        }
        
      this.classList.add("active");  
    };
}

