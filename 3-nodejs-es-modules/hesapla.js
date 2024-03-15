// ÖRNEK: bu uyggulamayı index.js içersinde kullanmak istiyorum.indexe gidip,import yapıyoruz. çünkü burda bunu exportla açmışız.
export const topla = (a, b) => a + b

//? NodeJS 2020 yılında beridir ES-Modül desteği vermeye başlamıştır.
//? CommonJS'nin ve ES-Modülün birbirlerine göre  avantaj ve dezavantajları vardır.
//? Ancak Backend uygulamaları için geliştirilen birçok eski modül hala Common JS modül yapisini kullandığı için yaygın olan kullanım Common JS'dir.
//? Front-end uygulamaları için ES-Modül yapisi kullanılmaktadir.