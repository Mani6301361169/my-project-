import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'parent', 'admin'], default: 'student' },
    phone: { type: String, default: '' },
    department: { type: String, default: '' },
    year: { type: String, default: '' },
    semester: { type: String, default: '' },
    rollNumber: { type: String, default: '' },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
