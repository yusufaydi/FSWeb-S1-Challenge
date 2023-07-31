// eslint-disable-next-line no-unused-vars
const fenomenler = [
  {
    "number": 1,
    "profile": "Instagram",
    "followers": 539446645,
    "posts": 7202,
    "platform": "Instagram"
  },
  {
    "number": 2,
    "profile": "Cristiano Ronaldo",
    "followers": 473864939,
    "posts": 3338,
    "platform": "Instagram"
  },
  {
    "number": 3,
    "profile": "Kylie",
    "followers": 364542529,
    "posts": 6935,
    "platform": "Instagram"
  },
  {
    "number": 4,
    "profile": "Leo Messi",
    "followers": 355790796,
    "posts": 890,
    "platform": "Instagram"
  },
  {
    "number": 5,
    "profile": "Selena Gomez",
    "followers": 341579063,
    "posts": 1828,
    "platform": "Instagram"
  },
  {
    "number": 1,
    "profile": "Barack Obama",
    "followers": 132473746,
    "posts": 16563,
    "platform": "Twitter"
  },
  {
    "number": 2,
    "profile": "Justin Biber",
    "followers": 114165664,
    "posts": 31371,
    "platform": "Twitter"
  },
  {
    "number": 3,
    "profile": "KATY PERRY",
    "followers": 108950737,
    "posts": 11715,
    "platform": "Twitter"
  },
  {
    "number": 4,
    "profile": "Rihanna",
    "followers": 106989611,
    "posts": 10632,
    "platform": "Twitter"
  },
  {
    "number": 5,
    "profile": "Elon Musk",
    "followers": 102819963,
    "posts": 18921,
    "platform": "Twitter"
  },
  {
    "number": 1,
    "profile": "Ninja",
    "followers": 18296006,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 2,
    "profile": "auronplay",
    "followers": 13377575,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 3,
    "profile": "Rubius",
    "followers": 12524137,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 4,
    "profile": "Tfue",
    "followers": 11145556,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 5,
    "profile": "shroud",
    "followers": 10244388,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 1,
    "profile": "charli damelio",
    "followers": 141200000,
    "posts": 2211,
    "platform": "TikTok"
  },
  {
    "number": 2,
    "profile": "Khabane lame",
    "followers": 139700000,
    "posts": 1055,
    "platform": "TikTok"
  },
  {
    "number": 3,
    "profile": "Bella Poarch",
    "followers": 89900000,
    "posts": 470,
    "platform": "TikTok"
  },
  {
    "number": 4,
    "profile": "Addison Rae",
    "followers": 87700000,
    "posts": 1683,
    "platform": "TikTok"
  },
  {
    "number": 5,
    "profile": "Will Smith",
    "followers": 72200000,
    "posts": 136,
    "platform": "TikTok"
  },
];


/* Görev 1 (otomatik kontrol testi yapılmayacak):
Aşağıdakileri konsolda gösterim (console.log) işlemi gerçekleştirerek, yukarıda verilen fenomenler dizisindeki verilere erişim alıştırması yapın:

(işlev yazmanıza gerek yok) */

//(1) Dizideki ilk fenomen (0. dizin) profil (profile) adı
console.log(fenomenler[0].profile);

//(2) Dizideki üçüncü fenomenin (2. dizin) takipçi (followers) sayısı
console.log(fenomenler[2].followers);

/* Görev 2 (otomatik kontrol testi yapılmayacak):
(işlev yazmanıza gerek yok)npm 
Fenomenler dizisinde bir yazım hatası var 😱 7. sıradaki fenomen 'Justin Bieber' ın soyismi 'Biber' olarak yanlış yazılmış. Bu sorunu düzeltin ve çalışmanızı kontrol etmek için console.log() yapın.*/
fenomenler[6].profile = "Justin Bieber";
console.log(fenomenler[6].profile);

/* 

    Görev 3:
Aşağıdaki işlemleri yapmak için indekseGoreFenomen işlevini kullanın:
1. İlk parametre olarak fenomenler dizisini alın,
2. İkinci parametre de ise, dizide istenen feneomene ait indeksi gösteren bir sayıyı alın.
3. `{indeks}. indekste bulunan fenomen: {profile}` şeklinde sonuç döndürün

NOT: DÖNDÜĞÜNÜZ DİZİN YUKARIDAKİ BİÇİMLE EŞLEŞMESİ GEREKİR, YA DA TESTİ GEÇMEYECEKTİR!
ÖRNEK: fenomenler dizisi ve 3 sayısı ile indekseGoreFenomen çağrılırsa, `3. indekste bulunan fenomen: Leo Messi' */

function indekseGoreFenomen(arr,index) {
  return `${index}. indekste bulunan fenomen: ${arr[index].profile}`;
}

indekseGoreFenomen(fenomenler,3);
indekseGoreFenomen(fenomenler,1);

/*  Görev 4:
Aşağıdakileri yapmak için profilListesi'ni kullanın:
1. fenomen dizisini bir parametreden argüman olarak alın
2. Parametre dizisini kopyalayarak yeni bir dizi oluşturun
3. Yeni dizinin üzerinde dolaşın ve dizinin her bir indeksinde yalnızca fenomenin adına eşit olacak şekilde güncelleyin
🌟 Dönüş ÖRNEĞİ: ["Instagram", "Cristiano Ronaldo", "Kylie"....]
*/

function profilListesi(arr) {
  let newArr = [...arr];
  let empty = [];
  // for (let i = 0; i < newArr.length; i+=1) {
  //   empty.push(newArr[i].profile);
  // }
  for (let i in newArr) {
    empty.push(newArr[i].profile);
  }
  return empty;
}



/* Görev 5:
Aşağıdakileri yapmak için fenomenSil'i kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. ikinci parametre olarak istenen dizin(indeks) saysısını argüman olarak alın
3. Parametre dizisinin bir kopyası olan yeni bir dizi oluşturun
4. Kopyalanan diziden istenen indeksteki fenomeni çıkarın
5. Ortaya çıkan diziyi döndürün

ÖRNEK: fenomenSil işlevi fenomenler dizisi ve 0 indeks sayısı ile çağrılırsa, veri kümemizden 'Instagram' kaldırılmış olarak döndürür. */
function fenomenSil(arr,value) {
  let newArr = [...arr];
  newArr.splice(value,1);
  console.log(newArr);
  return newArr;
  
}

console.log("lets see",fenomenSil(fenomenler,4));


/* Görev 6:
Aşağıdakileri yapmak için fenomenEkle'i kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. İKİNCİ, ÜÇÜNCÜ, DÖRDÜNCÜ, BEŞİNCİ ve ALTINCI parametre olarak sırasıyla bir sırano (number), bir profil ismi (profile), takipçi sayısı (followers), gönderim sayısı  (posts) ve bir platform adı (platform) alın.
3. fenomenler dizisini bir kopyasını oluşturun.
4. Aşağıdaki formatta bir nesne oluşturun:
  {
    "number": 6,
    "profile": "Workintech",
    "followers": 10000000,
    "posts": 2022,
    "platform": "Instagram"
  }
5. Yeni oluşturulan nesneyi kopyalanan diziye ekleyin, ardından kopyalanan diziyi döndürün

ÖRNEK: fenomenEkle(fenomenler, 6, "Workintech", 10000000, 2022, "Instagram") çağrıldığında dizinin sonuna yukarıdaki nesne en sona eklenerek yeni fenomenler dizisini döndürmelidir. */

function fenomenEkle(arr,number,profile,followers,posts,platform) {
  let copyArr = [...arr];
  let obj = {
    "number":number,
    "profile":profile,
    "followers":followers,
    "posts": posts,
    "platform":platform
  };
copyArr.push(obj);

return copyArr;

}

console.log("lets see",fenomenEkle(fenomenler,25,"Ali",28255,142587,"TikTok"));

/* Görev 7:
Aşağıdakileri yapmak için enFenomenler'yi kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. Alınan diziden yüzmilyon'dan (100000000) fazla takipçisi olan fenomenlerin adlarını içeren bir dizi döndürün.

ÖRNEK: enFenomenler(fenomenler) çağrıldığında sonuç olarak ["Instagram", "Cristiano Ronaldo", ... "Khabane lame"] dönemelidir
*/

function enFenomenler(arr) {
  const array = [...arr];
  //let newArr = [];
  // for (let i in array) {
  //   if (array[i].followers > 100000000 ) {
         
  //       newArr.push(array[i].profile);  
  //   }
  //   else {
  //     console.log(" There is no profile who has more than 100000000 followers.");
  //   }
  //   }
  // return newArr;

  const newArr = array.filter((person) => person.followers > 100000000).map((person) => person.profile);
  return newArr;
  

}




/* Görev 8:
Aşağıdakileri yapmak için fenomenGonderimSayisi'nı kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. ikinci parametre olarak fenomen profil adını (profile) alın
3. Fenomenin gönderim(posts) sayısını döndürün

ÖRNEK: fenomenGonderimSayisi(fenomenler, 'Will Smith') çağrıldığında "136" dönmelidir
*/

function fenomenGonderimSayisi(arr,profile){
  const _arr = Number(arr.filter((person) => person.profile === profile && person.posts !== 'NA').map((person) => person.posts));
  //const arr_ = Number(_arr.filter((person) => typeof(person) === "number"));
  //const num = Number(_arr.join(''));
  return _arr;
}



/* Görev 9:
Aşağıdakileri yapmak için platformaGoreCokGonderiYapanFenomen'ni kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. ikinci parametre olarak platform adını alın
3. Verilen platform da en çok gönderi yapan fenomen adını döndürün

Not: Gönderi sayısı belli olmayan (NA) hesaba katmayın.

Örnek: platformaGoreCokGonderiYapanFenomen(fenomenler, 'TikTok') çağrıldığında "charli damelio" dönmelidir
*/

function platformaGoreCokGonderiYapanFenomen(arr,platform){
 const _arr = arr.filter((person) => person.posts !== 'NA' && person.platform === platform ).sort(function(a,b) {
  return b.posts - a.posts;
 });// Filtered array whic has only requested platform data.
 
 return _arr[0].profile;

//  let byPosts = _arr.slice(0);

//  let byPots = [..._arr].sort(function(a,b) {
//   return b.posts - a.posts;
//  });

 //const arr_ = _arr.posts.sort(function(a, b){return b-a});

 //const sortArr = _arr.map((person) => person.posts); // New Array that holds the posts of required platforms.
  
 
 // const sortArr = _arr.map((person) => person.posts).sort(function(a, b){return b-a});
  // const arr_ = _arr.map((person) => person.profile);
  // const str = arr_.join(" ");
  // return str;
  
  //let arr_ = _arr.filter();


  
  //console.log("SortArray => ",sortArr);

  //let indeks = sortArr.indexOf(Math.max(...sortArr)); // the index number of the post which is the maximum number. 
  //we used Spread Operator here to copy sortArr because e couldnt get the index by using same array twice
  
 // const desireArr = _arr[indeks].profile; // This code gets the profiles of the maximum posts and declare  it to new array called desiredArr.
  
  }


console.log("Result => ", platformaGoreCokGonderiYapanFenomen(fenomenler,"TikTok"));
//console.log("Result => ", platformaGoreCokGonderiYapanFenomen(fenomenler,"Twitter"));

console.log("Fenomen Gönderim Sayısı =>  ",fenomenGonderimSayisi(fenomenler,"Ninja"));
console.log("Fenomen Gönderim Sayısı =>  ",fenomenGonderimSayisi(fenomenler,"Will Smith"));

/* ***** GÖREVLERİN SONU ***** */



/*Bu satırdan sonra koda dokunmayın! */
function sa() {
  console.log('çalışıyor');
  return 'as';
}
sa();
/*Bu satırdan sonra koda dokunmayın! */
module.exports = {
  sa,
  indekseGoreFenomen,
  profilListesi,
  fenomenSil,
  fenomenEkle,
  enFenomenler,
  fenomenGonderimSayisi,
  platformaGoreCokGonderiYapanFenomen
}
