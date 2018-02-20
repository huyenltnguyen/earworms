import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Song from './model/song';

const app = express();
const router = express.Router();
const PORT = 3001 || process.env.PORT;

mongoose.connect('mongodb://localhost/my_earworms');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// ROUTES
router.get('/', (req, res) => res.json({ message: 'API Initialized' }));
app.use('/api', router);

router.route('/songs')
  // INDEX ROUTE
  .get((req, res) => {
    Song.find((err, songs) => err ? res.send(err) : res.json(songs))
  })
  // POST ROUTE
  .post((req, res) => {
    let song = new Song();
    song.title = req.body.title;
    song.artist = req.body.artist;
    song.url = req.body.url;

    song.save((err, newSong) => err ? res.send(err) : res.json({ message: 'Added new song!' }));
  });

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));