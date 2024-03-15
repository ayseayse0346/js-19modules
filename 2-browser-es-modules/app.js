//*************************************/
//* ES-MODULES (APP.JS)
//*************************************/
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonksiyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.

// !AMACIMIZ:app js ana dosyamız hesapmakinesijs yardımcı dosyamız.

// hesap makinasei işlemleri yapmak istiyoryum bunları da hesap makinesi js de yapıyorum.HESAP MAKİNAESİNİN FONKSİYONMLARINI AYRI BİR DOSYAYA YAZDIK.
// ana program ,birleştirmem gereken program burası.
// bunları nasıl çağıracağız,neye göre çağıracağız.
// ilk olarak ana dosyamızı html de script oalrak yazacağız ve mutlaka type module yazmalıyız...
// yardımcı dosyada yaptığım fonksiyonları ana dosyada çağırmak istiyorum onun için export ve import yapacağız.bir değişkenin,fonksiyonun vb. önüne export yaptığımızda dışarıya açmiş oluyoruz.
// !14-named export
import {add} from "./hesapMakinası.js"; //as ile isim değişikliği yaplılmalı çünkü aşağıda internal add function yaptık.aynı isim olmaz.
import { sub, mul, div } from "./hesapMakinası.js"; //bu şekilde hepsini aynı yerde de verebiliriz. aynı yerden geldiği için.

console.log("add:",add(3,5)); 
console.log("sub:",sub(3,5));
console.log("mul:",mul(6,5));
console.log("dıv:",div(8,5));  

import { PI } from "./hesapMakinası.js"; //HOSİTED yapıdadırlar. kullanımdan hemen öncesinde istediğimiz yerde kullanılırız.
import { PI as pi } from "./hesapMakinası.js"; //isim değişikliğini ancak as ile yaparız yoksa exportta işsim ne ise importta o olmalı.
console.log(pi);

// !2-defeult export 
// adını değiştirebiliriz. farklı isim alabiliriz. bir tane olduğu için.

import message from "./hesapMakinası.js";
import givemessage from "./hesapMakinası.js"

//? internal add function
const add = (a, b, c) => a + b + c

console.log(add(3, 4, 5))


//! use strict modu dogrudan enable oldugu icin hata verir.
// deneme = 5

//? global scope this kelimesi window nesnesini göstermez
console.log(this) //? undefined

// NOT: js kodları browserda çalışmaz server gereklidir.