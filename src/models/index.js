/* central location for all the model files and prepare to export to Express */
import mongoose from 'mongoose'
import User from './user'

const connectDB = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}

const models = {User}
export { connectDb }
export default models