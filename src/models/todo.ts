import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    content: { type: String, required: true },
    completed: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    order: { type: Number, required: true },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
