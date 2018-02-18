import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();
const PORT = 3001 || process.env.PORT;

mongoose.connect('mongodb://localhost/my_earworms');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// INDEX ROUTE
router.get('/', (req, res) => res.json({ message: 'API Initialized' }));
app.use('/api', router);

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));