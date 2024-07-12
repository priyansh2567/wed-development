const button = document.querySelectorAll('.butto')
const body = document.querySelector('body')


button.forEach( function(butto){
    butto.addEventListener( 'click', function (e){
        console.log(e);
        console.log(e.target);
        
        if(e.target.id === 'blue'){
            body.style.background = e.target.id;
            

        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;

        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;

        }
        if(e.target.id === 'blueviolet'){
            body.style.backgroundColor = e.target.id;

        }


    });
});