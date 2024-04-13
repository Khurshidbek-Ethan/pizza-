//                                     3)Authentication nima va uni tashkilashtirish usullari

// # Authentication kim murijat qilyapdi misol mobil teldan kim murojat qilyapdi yoki notebookdan kim murojat qilyapdi kim murojat qilishni aniqlash mehanizimi Authentication deydi
// # Authentication degani kim murojat qilayotganligini server aniqlash jarayoni , Authentication proesesini turli xil usulda tashkilashtirishimiz mumkin
// # 1) Sessions (Cookies)
// # 2)Tokens (Cookies)
// # 3)Tokens(Headers)
// # Authentication xosil qilishda eng kop qolaniladigon usular  Sessions yoki Tokens xisoblanar ekan
// # bizning 1 chi Authentication usulimiz sesionlarni cookies larni ichida xosil qilib ishlatish xisoblanadi yani metodimizni ozi sesionlar orqali ishlatish mehanizimi esa cookies larni ichida degani
// # 2 chi uslub bu tokenslar orqali lekin tokenslarni biz cookeis ichida saqlash orqali Authentication procesini amalga oshiramiz xamda tokenlarni bu yerda
// # jwd jeyson web token package orqali tokenlarni xosil qilishda bizga yordamga keladi emg mashhurlaridan biri
// # 3 chi usulham 2chi usul bn bir hil bu yerdaham jeyson tokenlarni ishlatishimiz mumkin ekan lekin 2 chi usuldan farqi uni mehanizimida tokenlani biz cookies larda saqlamaymiz xar bitta
// # requestlar headerlar orqali yuborishni strategiya qilgan uslubimiz xisoblanadi / burak darsimizda sesion va tokenlarni ishlatamiz amaliyotda soralyotgani un ikkalasini orgatyapdi
// # adminka loyihada session larni ishlatamiz Authentication procesinni tashkil qilamiz
// # react qismida Single page aplicationimizda tokens orqali Authentication jarayoni qilamiz
// # ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// # Authentication turida sesion larni cookie ni ichida saqlagan xolda Authentication jarayonini amalga oshirishini taxlili
// # login. bolgan user un session id biriktiriladi sesion id browserga borib borowserimizni cookie qismiga borib joylashib oladi shu jarayondan keyin bizning browserimizda
// # cokkie ni xotirasida login bolgan userni session idisi xosil bolar ekan va bizning Authentication procesimizni poydevori xisoblanadi

// # bizning browserimizdan navbatdagi reqlarni ichida cookie ham joylashib oladi cookieni shundey tabiyati bor cookie xar qanday requestga ozini boglab qoyadi yani request bn birga
// # serverga yonaltiriladi xar qanday loginProcess amalga oshgandan keyin xar qanday bizning serverga qilinayotgan reqni ichida cookie mavjud bolgandan keyin osha cookie serverga xar bir req bn yetib
// # keladi va bizning serverimiz sesion idni cookieni ichidagi sesion id ninoqib sesion id ga tegishli bolgan malumottni bizga taqdim etadi va bizning serverimiz ga kim murojat qilayotganligini
// # aniq bilib oladi sesion orqali Authentication jarayonini qurishini nazariy taxlili edi
// # cookielarni kop ishlatishimiz sababi cookielarimizni kuchli ximoyaga ega ekanligidandir
// # browserimizni ozi nechihil xotirasi borligini taxlil qilsak browserimiznu 3 xil xotirasi bor
// # 1) Local Storage // ximoya vositasi cookiechalik emas
// # 2)Session Storage // ximoya vositasi cookiechalik emas
// # 3)Cookie
// # browserimizni  storageni aplication bolimidan tekshirib olishimiz mumkin
// # cookieni ichida saqlayatganimizni asosiy sababi cookielar juda qatiq ximoya vositasiga ega aynan bizning browserimizda eng ohiri  crec qiloladigon narsa cookie boladi
// # maxfiy malumotlarni biz cookieni ichida saqlashga odatlanamiz cookie maxsus ximoyasidan tashqari oziga xos jozibasi bor cookie  xar bitta req da joylashib olish xususiyatiga ega
// # chaqirilgan va chaqirilmagan joygaham bororadigon cookie
// # kamikatsiya xususiyatigaham ega yani malum bir vaqtni korsatamiz osha malum bir vaqtdan keyin cookieni ozini ozi yoqotib yuboradi oshandey kuchli xususiyatga ega bolgan
// # tool xisoblanadi foydali muhitni yaratib beradi


//                                        // yuklash mantigi 

// import path from "path";// core peckage 
// import multer from "multer" // 
// import {v4} from "uuid" // rendom string xosil qilib beradigon uuid peckageni ichidan v4 foydalanamiz 
// // v4ni xosil qilib reqvit qilish natijasida rendom stringni qabul qilish maqsadida biz doyim v4 ni ishlatamiz

// /** MULTER IMAGE UPLOADER */
// // xar qanday yuklanayotgan Target un misol un product bolishi mumkin ,member bolishi mumkin yoki qanaqadur
// //  artikilar bolishi mumkin qanaqa target yuklanishidan qatiy nazar unga Multi usege kop maqsadli foydalaniladigon
// //  yuklovchi uploaderni xosil qilamiz 

// // umumiy qaysi proyekti ishlatsek doyim shunday bir hil mantiq bn ishlashni odat qilamiz !

// function getTargetImageStorage(address: any) {
//     return multer.diskStorage({
//         destination: function (req,file,cb){
//             cb(null, `./uploads/${address}`);
//         },
//         filename: function (req,file,cb){
//             const extension = path.parse(file.originalname).ext;
//             const randomName = v4()+ extension;
//             cb(null,randomName);
//         },
//     });
// }

// // pasdegi bn farq yana bir functionni xosil qildik makeUploader degan u bizga xar xil targetlar un 
// // Upload mantigini xosil qilib beradi aynan qayerga yuklayatgan manzilimizni (address: string) shu yerga pass qilishimiz kerak boladi
// // misol biz pasdagi product_storage ni qabul qilishni xoxlasak biz default makeUploader; makeUploaderga
// // uploads/products manzilini bersak boladi 
// const makeUploader = (address: string) => {
//     const storage = getTargetImageStorage(address);
//     return multer ({storage:storage});// multerni bizga return qilib beradi qiymatni qaytarib beradi
// };

// export default makeUploader;
// // uploaderda bizni serverimizga turlihil rasimlarni turli xil documentlarni yuklab olishga 
// //  xizmat qiladigon mantiqni xosil qilyapmiz 

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ''// agar bizga Image kerak bolsa bunda faqat product usegeni xosil qilsak pasta dagi mantigimiz orqali xosil qilib olyapmiz 
// //  masalan bizga yanna member storage kerak bolsa yann xuddiy shunday mantiqni qayta yozib pastiga 
// //  uploaders/productsni orniga  cb(null,'./uploads/products') orniga memberni yozish kerak qayta qayta mantiqlar shakilanib qoladi 
// //  shuning un tepaga umumiy xolat un yozamiz  14 satirdan 
// ''


// // multer strorage 
// // prodctlarni xosil qilyapmiz product_storage productlarni rasmini yuklash products storagega yuklashimiz kerak
// // multerni ichidan diskStorage ni qabul qilib olamiz diskStorageni ichiga esa optinlarni kiritamiz
// // bu yerda product_storageni yuklashimiz kerak edi rasimlar v file mojalangan maxsus storage multer orqali 
// // xosil qilinyapdi uning manosi uploades degan folder kerak boladi uni src dan tashqariga ochvolamiz 
// // uploades folder products fileiga jamiki serverimizga yuklanyatgan filelar shu yerga yetib keladi 
// // biz tavarlarga bogliq bolgan rasimlarni yukleydegon product_storage xosil qilyapmiz 


// const product_storage = multer.diskStorage({
//     destination:function(req,file,cb){ //
//        // multer.diskStorage docsga kora destination hamda filenamni kiritish kerak
//       cb(null,'./uploads/products'); //multerga korsatyapmiz srcmizdan tashqaridagi folder dagi file ga yukleysan deb 
//     }, 
    
//     filename:function(req,file,cb){ // kirib kelayotgan req,kerib kelayotgan fileni yuklab oladida 
//         console.log(file); // "yuklanayotgan parametirlarini beryapdi logda / xali filimiz yuklanib bolgani yoq"
//         // fileni biz path orqali parse qilyapmiz va fileni ichidan originalname qabul qilib va uning ohiriga 
//         const extension = path.parse(file.originalname).ext; //.ext  parsening mantigidan foydalanyapmiz extentionni qoyib olyapmiz 
//         //  "aynan pathni ishlatishimizni sabab originalnameni fileni ichidan olyapmiz hamda pathni parse "
//         //  "methodini ichida file.originalnameni ishlatib pass qilsak bizga turli xil kamadalarni oshirish imkoniyatini berad "
//         //  " (base,dir,ext,name,root).extni orniga name ni qoysak fileni nameni olib beradi lekin bizga ext kerak"
//         //  " ext qoysak pathimiz kiritilgan fileni nomidagi extension jpg farmatda ekanligini bildiradi .ext=jpg"
        
//         // extentionni olib berishini sorayabmiz 
//         //  const extension  yuklanayotgan filimizni extensionni olib beradi  
//         // va uni rendom raqam bn serverimizni uploades folder products fileiga yuklashni maqsad qildirdik 
//         // "v4ni ishlatyapmiz v4 bizga rendom raqamlarni xosil qilib beradigon insturment uploads/products filedagi"
//         // "rasimga qarasek rendom raqamlar xosil boldi osha rendom stringimizni ohiriga jpgni brirktirib "
//         // " bizga  const random_name  yuklanishi kerak bolgan filimizni nomini xosil qilib olyapmiz  "
//         const random_name = v4()+ extension;// yuklaniyotgan filimizni ichidan file ozini  ayrib oldik extention qilib ,namenidan ayrib oldik
//         // " va random_name shu yerga bersak aynan osha nom bn yuklab beradi"
//         cb(null,random_name);  
       
//         // yuklanyotgan fileni farmatini path orqali osongina topib olish mumkin ekan rasimni 
//         //  kirib kelayotgan rasimiz png bolsa extension orqali png farmatdaham yuklab ololamiz 
//         // uploades folderimiz bizning githubga yuklamaslik kerak .gitgnoremizga yozib qoyamiz
//     },
// });
 
// export const uploadProductImage = multer({storage:product_storage});

