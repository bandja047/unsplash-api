const mongoose = require('mongoose');


mongoose.set("strictQuery", false);

const uri = process.env.MONGO_URI;

mongoose.connect(uri,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));