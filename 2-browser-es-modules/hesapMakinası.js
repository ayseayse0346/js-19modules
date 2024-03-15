// dışarıya açılıyor,exportlanıyor.
//!1- mamed export bu şekilde 
// export const add = (a, b) => a + b  //arrow function ile yazdık...
// export const sub = (a, b) => a - b
// export const mul = (a, b) => a * b
// export const div = (a, b) => a / b

// name export toplun şekilde:

 const add = (a, b) => a + b  
 const sub = (a, b) => a - b
 const mul = (a, b) => a * b
 const div = (a, b) => a / b

export{add,sub,mul,div}

export const PI = 3.14

const primeNumbers = [2, 3, 5, 13] 

// !2- default export(sadece bir kere kullanılır. dosya başında)

const message = ()=>{
    console.log("end of module");
}

export default message