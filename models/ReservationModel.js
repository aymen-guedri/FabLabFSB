import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  material: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  comments: { type: String },
  timestamp: { type: Date, default: Date.now } // Add the timestamp field with default value as the current date and time
});

const ReservationModel = mongoose.model('Reservation', reservationSchema);

export default ReservationModel;
