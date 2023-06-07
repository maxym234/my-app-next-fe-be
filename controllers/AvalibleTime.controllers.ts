import {Request, Response } from 'express'; 
import { AvalibleTimeModel } from '../models/avalibleTimes'

export const create = async (req: Request, res: Response) => {
    
    try { 
        const { date, time } = req.body
        const doc = new AvalibleTimeModel({date, time})        
        const avalibleTime = await doc.save()
        res.json(avalibleTime)
    } catch (e) {
        res.status(500).json({message: "Error"})
    }
}

export const getAll = async (req: Request, res: Response) => {
    try { 
        const avalibleTimes = await AvalibleTimeModel.find()
        res.json(avalibleTimes)
    } catch (e) {
        res.status(500).json({message: "Avalible Time not found"})
    }
}

export const getOne = async (req: Request, res: Response) => {
    try { 
        const date = req.params.date        
        //findOneAndUpdate() --- to find and upload 
       const doc = await AvalibleTimeModel.findOne({date})
        res.json(doc)
    } catch (e) {
        res.status(500).json({message: "Avalible Time not found!" + e})
    }
}
