import {Request, Response } from 'express'; 
import {validationResult} from 'express-validator';
import { AuthModel } from '../models/auth';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const registration = async (req: Request, res: Response) => {
    const error = validationResult(req)
    
    try { 
        const { email, password, fullName } = req.body
        const hash =  await bcrypt.hash(password, 12)
        const doc = new AuthModel({email, hashedPassword: hash, fullName})
        if(!error.isEmpty()) {
            return res.status(400).json(error.array())
        }
        const user = await doc.save()
        
        const token = jwt.sign(
            {
                _id: user._id,
            },
                'secret123',
            {
                expiresIn: '1d'
            }
        )
        const { hashedPassword, ...userData } = user._doc
        res.json({...userData, token})
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error
        })
    }

}

export const login = async (req: Request, res: Response) => {    
    try { 
        const { email, password } = req.body        
        const user = await AuthModel.findOne({ email })                
        //перевірка на логін і пароль
        if (!user) {
            return res.status(404).json({
                message: email ? 'Incorect email or password' : 'Incorect param for emeil'
            })
        }

        const isValidPass = await bcrypt.compare(password, user.hashedPassword)
        console.log(isValidPass, 'isValidPass', user.hashedPassword, password);
        
         if(!isValidPass) {
            return res.status(404).json({
                message: 'Incorect password or email'
            })
         }

         const token = jwt.sign(
            {
                _id: user._id,
            },
                'secret123',
            {
                expiresIn: '1d'
            }
        )
        const { hashedPassword, ...userData } = user._doc
        res.json({...userData, token})
    } catch (e) {
        res.status(500).json({message: "Failed to authorize"})
    }

}
