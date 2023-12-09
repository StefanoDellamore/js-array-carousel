//definire immagini in variabili

const imgUno = document.querySelector ('.card').innerHTML = '<img src="img/01.webp" alt="01">';
console.log ('imgUno', imgUno, typeof imgUno)
const imgDue = document.querySelector ('.card').innerHTML = '<img src="img/02.webp" alt="02">';
console.log ('imDue', imgDue, typeof imgDue)
const imgTre = document.querySelector ('.card').innerHTML = '<img src="img/03.webp" alt="03">';
console.log ('imgTre', imgTre, typeof imgTre)
const imgQuattro = document.querySelector ('.card').innerHTML = '<img src="img/04.webp" alt="04">';
console.log ('imgQuattro', imgQuattro, typeof imgQuattro)
const imgCinque = document.querySelector ('.card').innerHTML = '<img src="img/05.webp" alt="05">';
console.log ('imgCinque', imgCinque, typeof imgCinque)

//impostazione array per immagini
const imgList = [ 
    ` ${imgUno} `,
    ` ${imgDue} `,
    ` ${imgTre} `,
    ` ${imgQuattro} `,
    ` ${imgCinque} ` 
     ];

     console.log ('imgList', imgList, typeof imgList)

document.querySelector('.card').innerHTML = (imgList[0]);

let contatore = 0

//definire bottoni in variabili

const buttonForward = document.getElementById ('forward');
console.log ('buttonForward', buttonForward, typeof buttonForward)
const buttonBack = document.getElementById ('back');
console.log ('buttonBack', buttonBack, typeof buttonBack)




buttonForward.addEventListener('click', function() {
    
    if (contatore < imgList.length -1){
        contatore += 1;
        console.log ('contatore', contatore, typeof contatore);
        document.querySelector('.card').innerHTML = imgList[contatore];
    }
    
})

buttonBack.addEventListener ('click', function() {
    
    if ((contatore !== imgList.lenght) && (contatore !== 0)){
        contatore -= 1;
        console.log ('contatore', contatore, typeof contatore);
        document.querySelector ('.card').innerHTML = (imgList[contatore]);
    }
})