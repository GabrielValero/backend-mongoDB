
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;


mongoose.connect(URL,{
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true 
})
.then(db => console.log('DB is connected'))