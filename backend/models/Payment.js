import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    transactionId: { type: String, required: true, unique: true },
    paymentMethod: { type: String, default: 'Razorpay' },
    amount: { type: Number, required: true },
    receiptNo: { type: String, required: true },
    status: { type: String, enum: ['pending', 'success', 'failed'], default: 'success' },
  },
  { timestamps: true }
)

export default mongoose.model('Payment', paymentSchema)
