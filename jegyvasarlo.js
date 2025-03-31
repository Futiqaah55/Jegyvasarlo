/**
 * Jegyvásárla alkalmazás
 */
var quantity = prompt('Add meg a darabszámot!');
var type = prompt('Add meg a típust');

console.log(quantity);
console.log(type);

var price = type === 'student' ? 300 : 350;
var discount = quantity > 10 ? 0.9 : 1;
var total = quantity * price * discount;


var types ={
   student: 300,
   adult: 350,
   retired: 280
};

var price = types[type];
if(price === undefined) {
   alert('érvénytelen típus');
}else {
   var discount = quantity > 10 ? 0.9 : 1;
   var total = quantity * price * discount;
   alert(total);
}



/*
   input: 
       Hány jegyet kér?
       Milyen típusú jegyet kér? (student | adult)

       A diák jegy ára: 300ft
       Felnőtt jegy ára: 350ft
       Nyugdijas jegy ára: 280ft
       Tíznél több jegy vásárlása esetén jár 10% kedvezmény

*/