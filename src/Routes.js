const { Router } = require('express');
const router = Router();
const { Schema, model } = require('mongoose');

const new_Task = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	price:{
		type: Number
	},
	url:{
		type:String,
		unique:true
	},
	images: String,
	description: String
}, { versionKey: '_somethingElse' });
const task= model('Task', new_Task);

router.route('/api/task')
	.get(async (req,res)=>{
		const response = await task.find();
		res.json(response);
	})
	.post(async (req,res)=>{
		const response = await new task({
				name: req.body.name,
				price: req.body.price,
				url: req.body.url,
				images: req.body.images,
				description: req.body.description
			})
		await response.save();
		console.log(response);
	})
router.route('/api/task/:id')
	.get(async (req,res)=>{
		const response = await task.find({_id:req.params.id});
		res.json(response);
	})
	.put(async (req,res)=>{
		const response = await task.findOneAndUpdate({_id: req.params.id}, {
				name: req.body.name,
				price: req.body.price,
				url: req.body.url,
				images: req.body.images,
				description: req.body.description
			})
		console.log(req.body);
	})
	.delete(async (req,res)=>{
		const response = await task.findByIdAndDelete(req.params.id);
		console.log(response);
	})


module.exports = router;