const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8800;

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
  () => {
    console.log('Connected to MongoDB');
  });// Connect to MongoDB

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
// middlware

app.use(express.json());
app.use(helmet());
// app.use(morgan('dev'));
app.use(morgan('common'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('file uploaded successfully');
  } catch (err) {
    console.log(err);
  }

});

// routes
// app.get('/', (req, res) => {
//   res.send('MERNlama');
// });                 // GET /

app.use('/api/auth', authRouter); // GET /api/auth
app.use('/api/users', usersRouter); // GET /api/users
app.use('/api/posts', postsRouter); // GET /api/posts

app.listen(port, () => {
  console.log('Server is running on port:', port);
});