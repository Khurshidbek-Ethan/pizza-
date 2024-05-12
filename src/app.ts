import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import { T } from "./libs/types/common";
import cookieParser from "cookie-parser";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

// session connection to database
const MongoDBStore = ConnectMongoDB(session);
// mongoDbStore object
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1- Entrance **/
const app = express();
// middleware pattern
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/** 2- Session **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6 hours
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);
// middleware hamma qilinayotgan murojatlar uchun
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/** 3- Views **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4- Routers **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // Middleware design pattern : React => SPA

export default app;

// import cors from "cors";
// import express from "express";
// import path from "path";
// import router from "./router";
// import routerAdmin from "./router-admin";
// import morgan from "morgan";
// import cookieParser from "cookie-parser";
// import { MORGAN_FORMAT } from "./libs/config";

// // Cors ustanovka / npm i cors@^2.8.5 /npm i @types/cors -D

// import session from "express-session";
// import ConnectMongoDB from "connect-mongodb-session";
// import { T } from "./libs/types/common";

// const MongoDBStore = ConnectMongoDB(session);
// const store = new MongoDBStore({
//   uri: String(process.env.MONGO_URL),
//   collection: "sessions",
// });
// // burak-reactdan req amalga oshirilganda Cors xatolik bolyapdi
// //burakimizni ximoyasi ishga tushyapdi lekin postman orqali req qilsak xech qandey Cors ga bogliq bolgan xatolik bomayapdi nega?
// //chunki bizi Postmanemiz test qilish maqsadida bizning serverimiz Postmandan qilinayotgan req ximoyalangan req deb qabul qiladi
// //browserlardan kelayotgan reqni ximoyalanmagan deb qareydi
// // Cors -> bizning backend serverni aynan qaysi clientlarga ochib berishimizni aytadi boshqa browserlardan kelayotgan reqga ruxsat berish
// // backendimizni ximoyaleymiz tashqi olamdan
// //backendimizga bita domeyingdan req bolmasa aytalik bir nechta domeying orqali bizning backentga req amalga oshirilsa
// //biz whitelist xosil qilib arrayga olib qaysi urldan kelishligiga ruxsat beramiz

// /**  1-ENTRANCE  **/
// const app = express();
// console.log("__dirname:", __dirname);
// app.use(express.static(path.join(__dirname, "public")));
// //uplouds folderini userlarga ochib berish manqigi
// // uploads url bn kirib kelsa express.static folderiga yuborsin nomini uploads deb kiritdik
// app.use("/uploads", express.static("./uploads"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// //ihtiyori domeyinglardan kelayotgan req larga serverimizni ochishni maqsad qildik va kirishiga ruxsat beradi
// app.use(
//   cors(
//     //
//     {
//       credentials: true,
//       //ihtiyoriy origindan
//       origin: true,
//     }
//   )
// );
// app.use(cookieParser());
// app.use(morgan(MORGAN_FORMAT));

// /**  2-SESSIONS  **/
// app.use(
//   session({
//     secret: String(process.env.SESSION_SECRET),
//     cookie: {
//       maxAge: 1000 * 3600 * 3, // 3hr
//     },
//     store: store,
//     resave: true, // 12:00 =>15:00// folse // 10:30 auth =>13:30 ,12:00, 13:31 yoqoladi
//     saveUninitialized: true,
//   })
// );

// app.use(function (req, res, next) {
//   const sessionInstance = req.session as T;
//   res.locals.member = sessionInstance.member;
//   next();
// });

// /**  3-VIEWS  **/
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// /**  4-ROUTERS  **/

// app.use("/admin", routerAdmin); // SSR:EJS
// app.use("/", router); //SPA:REACT

// export default app;
