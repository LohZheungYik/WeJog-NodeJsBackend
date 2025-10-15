const calorieModel = require('../models/calorie_model')
const express = require('express')
const router = express.Router()

// Get all calorie
router.get('/', async (req, res, next) => {
    try {
        const result = await calorieModel.get()
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Create a new calorie
router.post('/', async (req, res, next) => {
    try {
        const result = await calorieModel.create(req.body)
        if (!result) return res.sendStatus(409)
        return res.status(201).json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get all calorie
router.get('/', async (req, res, next) => {
    try {
        const result = await calorieModel.get()
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get one calorie
router.get('/:id', async (req, res, next) => {
    try {
        const result = await calorieModel.getById(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Delete a calorie
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await calorieModel.delete(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.sendStatus(200)
    }
    catch (e) {
        return next(e)
    }
})

// Update a calorie
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const doc = await calorieModel.getById(id)
        if (!doc) return res.sendStatus(404)

        Object.keys(data).forEach((key) => doc[key] = data[key])

        const updateResult = await calorieModel.update(id, doc)
        if (!updateResult) return res.sendStatus(404)

        return res.json(doc)
    }
    catch (e) {
        return next(e)
    }
})

// Replace a calorie
router.put('/:id', async (req, res, next) => {
    try {
        const updateResult = await calorieModel.update(req.params.id, req.body)
        if (!updateResult) return res.sendStatus(404)

        const result = await calorieModel.getById(req.params.id)
        return res.json(result)

    }
    catch (e) {
        return next(e)
    }
})

module.exports = router