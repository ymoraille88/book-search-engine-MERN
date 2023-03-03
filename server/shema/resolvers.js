const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');




const resolvers = {
Query: {
    async getSingleUser (_parent, args, context) {
        const { user } = context;
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : args.id }, { username: args.username }],
          });
          return foundUser;
    },
},

Mutation: {
    addUser: async (_parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
    },
    login: async (_parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      saveBook: async (_parent, { newBook }, context) => {
        if (context.user) {
            const updateUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { savedBooks: newBook } },
                { new: true }
            );
            return updateUser;
        }
        throw new AuthenticationError('Not logged in');
},
      deleteBook: async (_parent, { bookId }, context) => {
        if (context.user) {
            const updateUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: bookId } },
                { new: true }
            );
            return updateUser;
        }
        throw new AuthenticationError('Not logged in');
}
}

};


module.exports = resolvers;
