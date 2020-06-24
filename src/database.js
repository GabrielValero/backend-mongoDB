
const mongoose = require('mongoose');

const URL =process.env.MONGODB_URL || 'mongodb+srv://ninjagabo:Ninjagabo.1312@cluster0-ni87o.mongodb.net/Cluster0?retryWrites=true&w=majority';


mongoose.connect(URL,{
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true 
})
.then(db => console.log('DB is connected'))