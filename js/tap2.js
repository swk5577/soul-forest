const eltab = document.querySelectorAll('.tab'),
    eltabnavli = document.querySelectorAll('.nav >*');


    HTMLCollection.prototype.forEach = Array.prototype.forEach;

eltab.forEach((v2, k2) => {

    console.log(v2.querySelector('.tabct >*') );
    v2.querySelector('.tabct >*').classList.add('on');
    v2.querySelector('.nav >*').classList.add('active');

})

/*
    eltabnavall.forEach((v,k)=>{
        
        v.onclick =function(){
            let name = v.dataset.name;
            let tabct = v.parentElement.parentElement.querySelectorAll('.tabct');
            tabct.forEach((v,k)=>{
                v.children.forEach((h)=>{


                    if(h.dataset.name == name){
                       h.classList.add('on');
                       console.log(h.children[0])
                       h.children[0].classList.add('on');
                    }else{
                        h.classList.remove('on') 
                    }
                })
            });

            // v.parentNode.querySelectorAll('.nav +>*')[k].classList.add('on');
        }
        
    })

    const eltab = document.querySelectorAll('.tab'),
    eltabnavli = document.querySelectorAll('.tab > .nav >*');

eltab.forEach((v2, k2) => {
    v2.querySelectorAll('.tabct >*')[0].classList.add('on');


})
 */



eltabnavli.forEach((v,k) => {
    
    
    v.addEventListener('click', function(){
        
        for(const all of v.parentElement.parentElement.querySelector('.nav').children)
            all.classList.remove('active')
        v.classList.add('active')

        let full = v.parentElement.parentElement.querySelectorAll('.nav >*').length, 
            count = eltabnavli.length
            k2 = 0;

            max = count-full;

        if(max == 0) {
            k2 = k
        }else if(max == 5){
            k2 = k-(count-full-1)
        }else{
            k2 = k-(count-full)
        }

        console.log("k",k);

        console.log(v.parentElement.parentElement.querySelector('.tabct').children[k2]); 

        
            for(const all of v.parentElement.parentElement.querySelector('.tabct').children)
            all.classList.remove('on')
        v.parentElement.parentElement.querySelector('.tabct').children[k2].classList.add('on')
    })
})