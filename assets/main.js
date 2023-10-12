
// Task 1. 1den 100e qeder ededler icerisinde 5e ve 3e bolunenlerin toplamin tapan algoritm

// let toplamDeyer = 0

// for (let i = 1; i < 100; i++) {
//     if (i % 15 === 0) {
//         toplamDeyer+=i
//     }
// }

// console.log(toplamDeyer);


// ---------------------------------------

// Task 2. Verilen ededin 2nin quvveti olub olmadigini bildiren algoritm

// 4=0100
// 8=1000 (2nin bütün qüvvətlərində 1 bit var demək decimal olaraq 1 cıxsaq və and (vurma) istifadə eləsək sıfırlanacaq) bu şərti ödəyən bütün ədədlər 2nin qüvvəti sayılar.
// 7=0111



// let num=9

// if (num >= 1 && (num & (num - 1)) === 0) {
//     console.log(` ${num} 2nin qüvvətidir`);
// } else {
//     console.log(` ${num} 2nin qüvvəti deyil `);
// }




// --------------------------------------

// Task 3. Verilen ededin sade ve murekkeb oldugunu bildiren algoritm

// let eded=8

// let isComplex = false

// sadə ədədlər 1ə və özünə bölündüyünə görə i-ni 2dən başladıb ciddi bərabərlik istif. edilib

// for (let i = 2 ; i < eded; i++) {
    
//     if (eded % i === 0) {
//         isComplex=true
//         break
//     } 
    
// }

// if (isComplex) {
//     console.log('murekkeb ededdir');
    
// }else if (eded === 0){
//     console.log('0 ne sade ne de murekkeb ededdir')
// }else{
//     console.log('sade ededdir');
// }





// -------------------------------------

// Task 4. Gelen aylara gore hansi fesil oldugunu bildiren algoritm.Deger Consoledan girilecek.Sabit deger olmayacaq.


    // dəyər istifadəçi tərəfindən daxil edilir.
// let getValue = prompt('Doğulduğunuz ayı daxil edin')

// switch (getValue) {
//     case 'dekabr':
//     case 'yanvar':
//     case 'fevral':    
//         alert('siz qış fəslində doğulmusunuz')
//         break;

//     case 'mart':
//     case 'aprel':
//     case 'may':    
//         alert('siz yaz fəslində doğulmusunuz')
//         break;
    

//     case 'iyun':
//     case 'iyul':
//     case 'avqust':    
//         alert('siz yay fəslində doğulmusunuz')
//         break;

//     case 'sentyabr':
//     case 'oktyabr':
//     case 'noyabr':    
//         alert('siz payız fəslində doğulmusunuz')
//         break;
    
//     default:
//         alert('belə bir ay mövcud deyil')
//         break;
// }