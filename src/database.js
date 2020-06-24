
const mongoose = require('mongoose');

const URL = 'mongodb+srv://ninjagabo:Ninjagabo.1312@cluster0-ni87o.mongodb.net/Cluster0?retryWrites=true&w=majority';


mongoose.connect(URL,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true 
})
.then(db => console.log('DB is connected '))
.catch(err=> console.log('Algo paso ', err))