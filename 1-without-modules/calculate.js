'use strict' //!derleyici drektifi

const totalPrice = (products)=>{
return products.reduce((sum,product)=>sum+product.price,0)
}

//? Global namespace (direk dosya aktarıldığı için aynı değişken ismi veremiyoruz.)
// const students = ["Canan", "Can"]

myVariable = "my string" //! use Strict -> myVariable is not defined
console.log(myVariable)

console.log(this) //? window burda var(use strict kaldırdığımızda).ama yeni es 6 modulşde yok .
