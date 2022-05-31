const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://carlos:kfI6gJEkeNsmplNm@cluster0.nfr7l.mongodb.net/sistemapagos?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
}).then(() => {
    console.log("Database connected!!!");
}).catch((err) => {
    console.error(err.message);
});
