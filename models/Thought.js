const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // Use getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
    id: false,
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
