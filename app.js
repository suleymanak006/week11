//Dunya Saati 
//3 farkli sehirin saatini digital olarak gosteren bir program calismasi yapilacak.
//1. Ilk olarak html de saatimiz icin gerekli sayfayi olusturduk.
//3 sehrin saatini liste halinde duzenledik
//Saat secimi icin buttonla 3 secenek koyduk
//css de saatin duzenlenmesi icin boostrapi kullandik
//gerekli sekilsel duzenlemeleri yaptik
//js de digitall satle ilgili cift haneli yazmasi icin ilk fonksiyonumuzu olusturduk
//her ile ait zamani gosteren fonksiyon olusturduk.

let clickCityElement1 = document.getElementById("tokyo");
clickCityElement1.addEventListener("click", displayLocationTimeTokyo);
let clickCityElement2 = document.getElementById("london");
clickCityElement2.addEventListener("click", displayLocationTimeLondon);
let clickCityElement3 = document.getElementById("istanbul");
clickCityElement3.addEventListener("click", displayLocationTimeIstanbul);
