import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

// import { ObjectId } from "mongoose"; //
// import {
//   ProductCollection,
//   ProductSize,
//   ProductStatus,
// } from "../enums/product.enum";
// // doyim taxlil qilishni organ
// export interface Product {
//   // databasimiz xosil qilib bergan
//   _id: ObjectId; // ObjectIdni mongoosedan qabul qilamiz
//   productStatus: ProductStatus; // ProductStatusni kirgizmasekham uni default valusi bor u doyim mavjud boladi
//   productCollection: ProductCollection;
//   productName: string;
//   productPrice: number;
//   productLeftCount: number;
//   productSize: ProductSize;
//   productVolume: number;
//   productDesc?: string; //
//   productImages: string[];
//   productViews: number;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface ProductInput {
//   // ProductInputni xosil qildik
//   productStatus?: ProductStatus; //  bolishi mumkin bolmasligiham mumkin
//   productCollection: ProductCollection; //
//   productName: string; //
//   productPrice: number; //
//   productLeftCount: number; //
//   productSize?: ProductSize; // enumdan kelgan
//   productVolume?: number; // ichimlik un/ bolishi mumkin bolmasligiham mumkin
//   productDesc?: string; // bolishi mumkin bolmasligiham mumkin
//   productImages?: string[]; // stringdan iborat array / bolishi mumkin bolmasligiham mumkin
//   productViews?: number; // bolishi mumkin bolmasligiham mumkin
// }

// export interface ProductInquiry {
//   order: string;
//   page: number;
//   limit: number;
//   productCollection?: ProductCollection;
//   search?: string;
// }

// export interface ProductUpdateInput {
//   //
//   _id: ObjectId; // qaysi productni update qilmoqchimiz
//   productStatus?: ProductStatus; // va barchasi optional boladi
//   productCollection?: ProductCollection;
//   productName?: string;
//   productPrice?: number;
//   productLeftCount?: number;
//   productSize?: ProductSize;
//   productVolume?: number;
//   productDesc?: string;
//   productImages?: string[];
//   productViews?: number;
// }
