const eltab = document.querySelectorAll('.tab'),
    eltabnav = document.querySelectorAll('.tab > .nav');


eltab.forEach((v2, k2) => {
    v2.querySelectorAll('.tabct >*')[0].classList.add('on');


})




eltabnav.forEach((v, k) => {


        let childtap = "",
            childct =[];

        childtap = v.parentNode.querySelectorAll('.nav >*')

        console.log("childtap",childtap);

        for (let i=0; i < childtap.length; i++ ) {
            childct.push(childtap[i])
        };

        childct.forEach((v3,k3)=>{
            v3.onclick =function(){

                console.log(k3);


                v.parentNode.querySelectorAll('.tabct >*').forEach((v4)=>{
                    v4.classList.remove('on')
                })


                v.parentNode.querySelectorAll('.tabct >*')[k3].classList.add('on');
            }

        })



})

// 크게 감싸는거
// tab
//nav

