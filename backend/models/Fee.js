import mongoose from 'mongoose'

const feeSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    semester: { type: String, required: true },
    semesterFee: { type: Number, default: 0 },
    hostelFee: { type: Number, default: 0 },
    transportFee: { type: Number, default: 0 },
    libraryFee: { type: Number, default: 0 },
    examFee: { type: Number, default: 0 },
    fine: { type: Number, default: 0 },
    scholarship: { type: Number, default: 0 },
    status: { type: String, enum: ['pending', 'partial', 'paid'], default: 'pending' },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export default mongoose.model('Fee', feeSchema)
