import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// routes
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import PostRoute from './routes/PostRoute.js';
import UploadRoute from './routes/UploadRoute.js';
import ChatRoute from './routes/ChatRoute.js';
import MessageRoute from './routes/MessageRoute.js';

// import Reservation model
import ReservationModel from './models/ReservationModel.js';

const app = express();

// middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static('public'));
app.use('/images', express.static('images'));

dotenv.config();
const PORT = process.env.PORT;

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Listening at Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
app.use('/upload', UploadRoute);
app.use('/chat', ChatRoute);
app.use('/message', MessageRoute);







// Add the reservation creation route
app.post('/api/reservations', (req, res) => {
  // Extract form data from request body
  const { material, firstName, lastName, email, phone,type,dateJ,time1,time2, comments,prix } = req.body;

  // Create the reservation object with timestamp
  const reservation = new ReservationModel({
    material,
    firstName,
    lastName,
    email,
    phone,
    type,
    dateJ,
    time1,
    time2,
    comments,
    prix,
  });

  // Save the reservation to MongoDB
  reservation
    .save()
    .then((createdReservation) => {
      // Reservation created successfully
      res.status(200).json(createdReservation);
    })
    .catch((error) => {
      // Error occurred while saving reservation
      res.status(500).json({ error: 'Failed to create reservation' });
    });
});

// Add the reservation retrieval route
app.get('/api/reservations', (req, res) => {
  // Retrieve all reservations and sort them by the last timestamp
  ReservationModel.find()
    .sort({ timestamp: -1 })
    .exec((error, reservations) => {
      if (error) {
        // Error occurred while retrieving reservations
        res.status(500).json({ error: 'Failed to retrieve reservations' });
      } else {
        // Reservations retrieved successfully
        res.status(200).json(reservations);
      }
    });
});

// Add the reservation deletion route
app.delete('/api/reservations/:id', (req, res) => {
  const reservationId = req.params.id;

  // Find and delete the reservation by ID
  ReservationModel.findByIdAndDelete(reservationId)
    .then(() => {
      // Reservation deleted successfully
      res.status(200).json({ message: 'Reservation deleted' });
    })
    .catch((error) => {
      // Error occurred while deleting reservation
      res.status(500).json({ error: 'Failed to delete reservation' });
    });
});



export default app
