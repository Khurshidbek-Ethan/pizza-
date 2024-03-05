import {Request,Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";

 
const memberService = new MemberService();

const memberController:T = {};

memberController.signup = async (req:Request,res:Response)=>{
    try{
      console.log('signup');
      console.log("body:",req.body);
 
      const input: MemberInput = req.body,
       result:Member = await memberService.signup(input);
    
      res.json({member:result})
  } catch(err){
       
    console.log("Error,signup:",err);
    // res.json({})

 
 
    }
 };
 
 
 memberController.login = async (req:Request,res:Response)=>{
    try{
      console.log('login');
      const input:LoginInput=req.body,
       result = await memberService.login(input);
    
      res.json({member:result})

 
    } catch(err){
     console.log("Error,login:",err);
      // res.json({})
    }
 };
 

 export default memberController;