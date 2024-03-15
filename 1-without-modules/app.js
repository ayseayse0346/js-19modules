// eski modulle yan,i global regisition yöntemi ile.
// ?GLOBAL REGİSTRATİON YÖNTEMİ İLE KODLARI PARÇALARA AYIRMA İŞLEMİ

const h1 = document.querySelector("h1")
h1.textContent="without module"

const students = ["ahmet","Mehmet","ismet","saffet"]

// ben burdaki price toplamını bulmak isitiyorum ama bunu hesaplamaları başka bir dosyada yapmak istiyorum.onu da consola total price olarak basmak istiyorum console.log("total price:",totalPrice(products)); bunun hesabını da calculate diye oluşturduğum dosyada yapıyorum ve burda aşağıda çağırıyorum 
const products = [
    {
      phone: "Iphone",
      type: "15Pro",
      price: 50000,
    },
    {
      phone: "Samsung",
      type: "S23",
      price: 40000,
    },
    {
      phone: "Huawei",
      type: "Mate60",
      price: 45000,
    },
  ]

  console.log("total price:",totalPrice(products));
//   burda çağırıyoruz calculate oluşturduğumuz fonksiyonu ama gelmiyo çünkü nerde olduğunu bilmiyo onun için  ilkel yöntemle html e src olarak calculate js eklemeliyiz. sıra önemli. önce calculate sonra app.js yazılır.

// !NOTLAR
//? Uygulamalar büyüdükçe kodlari tek bir JS dosyasına koymak bu kodun sürdürülebilirliğini ve anlaşılabiliriliğini imkansız hale getirmeye başlar.

//* Çözüm: Kodlari yaptiği işe göre ayrı JS dosyalarina bölmek.

//! Ancak, bölme işleminden sonra başka JS dosyasında olan bir kodu (değişken,array ,obje, fonksiyon, class v.b) bir JS kodu içerisinde kullanabilmek için tüm JS kodlarının scriptlerini HTML içerisine eklemek gerekir.

//! Script'ler eklenirken sırası önem arz etmektedir.

//! Başka önemli bir husus da bu şekilde bir bölme işleminde global ad-uzayi (namespace) kullanildiği için bir değişken tüm dosyalar için bir kere tanımlanabilir.