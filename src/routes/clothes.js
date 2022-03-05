'use strict';

const express = require('express');
const {clothes} = require('../models/index');
//this router will hold all my routers
const router = express.Router();


router.post('/clothes',createClothes);
router.get('/clothes',getClothes);
router.get('/clothes/:id',getOneClothes);
router.put('/clothes/:id',updateOneClothes);
router.delete('/clothes/:id',deleteOneClothes);
// localhost:3000/food (body:{firstName:'razan',lastName:'quran'})
async function createClothes(req,res) {
    let newClothes = req.body;
    let piece = await clothes.createRecord(newClothes);
    res.status(201).json(piece);
}
async function getClothes(req,res) {
    let Clothes = await clothes.readRecord();
    res.status(200).json(Clothes);
}
async function getOneClothes(req,res) {
    let pid = parseInt(req.params.id);
    let piece = await clothes.readRecord(pid);
    res.status(200).json(piece);
}
async function updateOneClothes(req,res) {
    let updatedClothes = req.body;
    let pid = parseInt(req.params.id);
    let piece = await clothes.updateRecored(updatedClothes,pid);
    // let updateThisEle = await food.findOne({where:{id:pid}});
    // let dish = await updateThisEle.update(updatedFood);
    res.status(201).json(piece);
}
async function deleteOneClothes(req,res) {
    let pid = parseInt(req.params.id);
    let piece = await clothes.deleteRecord(pid);
    res.status(204).json(piece);
}
module.exports = router;