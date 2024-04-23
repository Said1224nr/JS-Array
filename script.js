var array = ["element1", "element2", "element3", "element4"];


console.log("Array uzunligi:", array.length);
alert("Array uzunligi: " + array.length);


var confirmResult = confirm("Elementni o'chirishni xohlaysizmi?");


if (confirmResult) {
    var olinganElement = array.pop();
    console.log("Olingan element:", olinganElement);
    alert("Olingan element: " + olinganElement);
    console.log(`Qolgan elementlar: ${array}`);
}
 else {
    console.log("Amal bekor qilindi.");
    alert("Amal bekor qilindi.");
    console.log("Qolgan elementlar:", array);
}