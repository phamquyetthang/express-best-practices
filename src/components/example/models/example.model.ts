import mongoose, { Schema } from 'mongoose';

const ExampleSchema = new Schema(
  {
    text: String,
  },
  { timestamps: true },
);

const ExampleModel = mongoose.model('examples', ExampleSchema);

export default ExampleModel;
