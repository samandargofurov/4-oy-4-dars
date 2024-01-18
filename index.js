// 1. 4 xonali sonning juft raqamlari sonini topuvchi algoritm yozing.

// let a = 1234;
// let counter = 0;

// let birlik = a % 10;
// let on = ((a - birlik) / 10) % 10;
// let yuzlik = (a - on * 10 - birlik) / 100;
// let minglik = Math.floor(a / 1000);

// if (birlik % 2 == 0) {
//     counter++;
// }

// if (on % 2 == 0) {
//     counter++;
// }

// if (yuzlik % 2 == 0) {
//     counter++;
// }

// if (minglik % 2 == 0) {
//     counter++;
// }

// console.log(counter);

// 2. Agar berilgan 3 xonali sonning raqamlari yigindisi juft hamda 5 ga karrali bolsa
// true aks holda false qiymat qaytaruvchi algoritm yozing.

// let num = 133;

// let birlik = num % 10;
// let on = ((num - birlik) / 10) % 10;
// let yuzlik = (num - on * 10 - birlik) / 100;
// let res = birlik + on + yuzlik;

// if (res % 2 == 0 && res % 5 == 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// 3. 3 ta son berilgan. Ular orasidan o'rtachasini topuvchi algoritm yozing

// let a = 10;
// let b = 15;
// let c = 5;
// let middle;

// if (a < b){
//     middle = b;
// } else {
//     middle = a;
// }
// if (middle > c) {
//     middle = c;
// }

// console.log(middle);

// 4. Foydalanuvchi ko'pi bilan 4 xonali son kirita oladi (1 xonali 2 xonali yoki 3 xonali bolishi ham mumkin
// Ushbu kiritgan sonning palindrom yoki palindrom emasligini tekshiruvchi algoritm yozing

// let num = 2332;
// let res = "palindrom emas";
// let birlik = num % 10;
// let on = ((num - birlik) / 10) % 10;
// let yuzlik = Math.floor((num % 1000) / 100)
// let minglik = Math.floor(num / 1000);

// if (birlik == minglik) {
//     if (on == yuzlik) {
//         if (birlik == minglik) {
//             if (on == yuzlik) {
//                 res = "palindrom"
//             }
//         }
//     }
// }

// console.log(res);

// 5-masala

// Kechikkan poyezd
// RoboBoyning poyezdi soat "t" da ketishi kerak edi, ammo u T soatga kechikdi.
// Uni poyezdi nechchada ketishini topuvchi dastur tuzing.
// Kiruvchi ma'lumotlar:
// Kirish faylida 2 ta qatorda mos ravishda poyezd ketishi kerak bo'lgan vatq t(0 ≤ t ≤ 23).
// ikkinchi qatorda esa poyezd kechikishi soatlarda beriladi. T(1 ≤T ≤ 1000)



// 6-masala

// Alisher chet elga dam olishga bormoqchi.
// Safar uchun ketadigan xarajatni internetdagi saytlardan qidirib chiqib, quyidagi ro'yxatda berilgan ma'lumotlarni topdi.
// Ularning ba'zilari AQSh dollarida ko'rsatilgan bo'lsa, ba'zilari yevroda berilgan.
// Borish-kelish samolyot bileti - $500
// Mehmonxona to'lovi (to'liq safar davomiyligi uchun)-$250
// Muzey va ko'ngilochar joylar uchun - 120 yevro
// $1 11000.34 so'm
// 1 yevro 12354.03 so'm
// Tuzilishi kerak bo'lgan dastur quyidagi ko'rinishda ishlaydi:
// 1. Alisher o'zida necha pul bor ekanligini so'mda prompt orqali kiritadi.
// 2. Xarajatlar dollar va yevrodan so'mga o'tkaziladi.
// 3. Alisherda yetarlicha pul bo'lsa, console.log da "Oq yo'l, Alisher!" xabari chiqadi.
// 4. Alisherda yetarlicha pul bo'lmasa, console.log da "Alisher, ozgina sabr qilish kerak bo'lar ekan." xabari chiqadi.
// Pseudo kod:
// 1. Promptdan kelgan so'm qiymatni o'zgaruvchiga saqlaymiz
// 2. Safar harajatlarini so'mga alishtiramiz
// 3. Alisherning pulidan umumiy harajatlarni ayiramiz
// 4. chiqqan natijani O dan katta yoki kichikligini tekshiramiz.
// Agar katta bo'lsa console.log ichiga Oq yo'l, kichik bo'lsa "Alisher, ozgina sabr qilish kerak bo'lar ekan" yozuvini chiqaramiz.