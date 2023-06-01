import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  material: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  type: { type: String, required: false },
  dateJ: { type: String, required: false },
  time1: { type: String, required: false },
  time2: { type: String, required: false },
  comments: { type: String },
  prix: { type: String },
  timestamp: { type: Date, default: Date.now } // Add the timestamp field with default value as the current date and time
});

const ReservationModel = mongoose.model('Reservation', reservationSchema);

export default ReservationModel;