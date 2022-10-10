var ES1 = !!(Array.prototype.join);
ES3 = !!(Array.prototype && Array.prototype.pop);
ES51 = (function () {'use strict'; return !this;})();
ES6 = !!Object.assign;
ES7 = !!(Array.prototype && Array.prototype.incluides);

/*
var ES51 = Modernizr.es5,
    ES6 = Modernizr.es6object;
    ES7 = FALSE;
*/

if (ES7) {
    console.log('Tu navegador contine caracteristicas minimas de ECMAScrip 7');
} else if (ES6) {
    console.log('Tu navegador contine caracteristicas minimas de ECMAScrip 6');
} else if (ES51) {
    console.log('Tu navegador contine caracteristicas minimas de ECMAScrip 5.1');
} else if (ES3) {
    console.log('Tu navegador contine caracteristicas minimas de ECMAScrip 3');
} else if (ES1) {
    console.log('Tu navegador contine caracteristicas minimas de ECMAScrip 1');    
} else {
    console.log('Tu navegador contine caracteristicas minimas de ECMAScrip desconocida'); 
}
