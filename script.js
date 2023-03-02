//ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2
// yaitu counted loop (terhitung) and uncounted loop (tak terhitung)
//perbedaannya:
//1. counted loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya
//2. uncounted loop merupakan perulangan yang tidak jelas berapa kali harus mengulang

//contoh
// function PushUp(){
//     //code
// }
// for(i = 0; i<10; i++){
//     PushUp();
// }


// let bosan;

// //contoh uncounted loop
// while(bosan == false){
//     PushUp();
// }

//macam macam perulangan counted loop
//1. perulangan For
//2. perulangan ForEach
//3. perulangan Repeat

//macam macam perulangan uncounted loop
//1. perulangan While
//2. perulangan Do/While

//1. perulangan FOR
//PERULANGAN for merupakan perulangan yang termasuk dalam counted loop, karena sudah jelas berapa kali akan mengulang sebuah perulangan.
//contoh

// for(let i = 0; i < 10; i++){
//     document.write(`<p>Perulangan ini berulang ${i + 1} kali</p>`)
// }

//1. perulangan WHILE

//perulangan while merupakan perulangan yang termasuk ke dalam perulangan uncounted loop namun, perulangan while juga dapat masuk atau menjadi perulangan counted loop dengan memberikan sebuah counter di dalamnya

//contoh
// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulang){
//     var jawab = confirm("Apakah anda mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }
// }

// document.write("Perulangan sudah dilakukan sebanyak" + counter + "kali");

//2. perulangan Do/While
//perulangan do/while sama seperti perulangan while.

//perbedaannya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurungb while

// do{
    //code
// }while(kondisi);

//contoh
// var ulang = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda mau mengulang?");
// }while(ulang);

// document.write("perulangan yang sudah dilakukan sebanyak " + counter + "kali");

// let sum = "";
// while(true){
//     let value = prompt("Lagi ape ?", '');
//     if(!value) break;
//     sum+= value;
// }

// alert(`sum : ` + sum);

// 4. perulangan FOREACH
//perulanga foreach biasanya digunakan untuk mencetak item di dalam array
//perulangan ini termaasuk dalam perulangan counted loop, karena jumlah perulangannya akan ditentukan oleh panjang dari arrray.
//ada dua caara untuk menggunakan perulangan foreach\

//1. menggunakan for dengan operator in 
//2. menggunakan method forEach()

//contoh
// let bahasa = ["Javascript", "Java", "Objective-c", "Python"];
// for (let i = 0; i < bahasa.length; i++){
//     document.write(`${i + 1}.${bahasa[i]}<br/>`);
// }

// //perulangan for menggunakan operator in
// let bahasaPemrograman = ["Javascript", "Java", "Objective-c", "Python"];
// for (let i in bahasaPemrograman){
//     document.write(`${i}.${bahasaPemrograman[i]}<br/>`);
// }

//contoh menggunakan perulangan forEach();

// let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]; //ini array
// hari.forEach(function (hari) {
//     document.write(`<h1>${hari}</h1>`);
// });



//5. perulangan dengan method repeat()
//perulangan dengan menggunakan method atau fungsi repeat() termasuk dalam perulangan counted loop

//fungsi ini khusus untuk mengulang sebuah teks (string);

// for (let i = 0; i <10; i++){
//     document.write(`Ulangi kalimat ini! <br>`);
// }

// document.write(`ulangi! <br>`.repeat(10));

//perulangan nested (bersarang)
//nested loop adalah perulangan bersarang (perulangan di dalam perulangan)

//contoh
// var ulang = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda mau mengulang?");
// }while(ulang);

// document.write("perulangan yang sudah dilakukan sebanyak " + counter + "kali");

// let hari = [1, 2, 3, 4, 5, 6, "minggu"]; //ini array
// hari.forEach(function (hari) {
//     document.write(`<h1>${hari}</h1>`);
// });


// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 5; j++){
//         document.write(`<p>Perulangan ke- ${i}, ${j} </p>`)
//     } 
// }

var ulang = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulang){
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    ulang = confirm("Apakahb anda ingin mengulang?");
}