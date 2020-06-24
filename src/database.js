
const mongoose = require('mongoose');

const URL =process.env.MONGODB_URL || 'mongodb+srv://ninjagabo:Ninjagabo.1312@cluster0-ni87o.mongodb.net/Cluster0?retryWrites=true&w=majority';


mongoose.connect(URL,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true 
})
.then(db => console.log('DB is connected ' + process.env.MONGODB_URL))
.catch(err=> console.log('Algo paso ', err))