import {Request,Response} from "express";
import Errors from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
// import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();

const  productController:T = {};
productController.getAllProducts = async (req:Request,res:Response)=>{
    try{
      console.log('getAllProducts');
      // console.log("req.member",req.member); korish un AdminReq chaqirgan edik test maqsadda 
      
      res.render("products");
  } catch(err){
       
     console.log("Error,getAllProducts:",err);
    //  res.status(Errors.statndard.code).json(Errors.statndard);
     if(err instanceof Errors)res.status(err.code).json(err);
      else res.status(Errors.statndard.code).json(Errors.statndard);
    }
 }; 
 
 productController.createNewProduct = async (req:Request,res:Response)=>{
    try{
      console.log('createNewProduct');
     res.send("DONE!");
  } catch(err){
       
     console.log("Error,createNewProduct:",err);
    //  res.status(Errors.statndard.code).json(Errors.statndard);
     if(err instanceof Errors)res.status(err.code).json(err);
      else res.status(Errors.statndard.code).json(Errors.statndard);
    }
 };
 
 productController.updateChosenProduct = async (req:Request,res:Response)=>{
    try{
      console.log('updateChosenProduct');
     
  } catch(err){
       
     console.log("Error,updateChosenProduct:",err);
    //  res.status(Errors.statndard.code).json(Errors.statndard);
     if(err instanceof Errors)res.status(err.code).json(err);
      else res.status(Errors.statndard.code).json(Errors.statndard);
    }
 };
 



  

export default productController;