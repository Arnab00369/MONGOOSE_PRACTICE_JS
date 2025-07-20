import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      //taking references from previous pages(linked)
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    //Array not Object - taking Objects under Array
    subTodos: [
      //Objects under Array
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      }, //Array of SubTodos
    ],
  },
  { timestamps: true }
);

//subtodo based on todo
export const SubTodo = mongoose.model('Todo', todoSchema);
