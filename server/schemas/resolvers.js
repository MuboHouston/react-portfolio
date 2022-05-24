const { Contact } = require('../models')

const resolvers = {
    Query: {
        contacts: async (parent, { name, email }) => {
            const params = {};
            
            if(name) {
                params.name = name
            };

            if(email) {
                params.email = email
            };

            return await Contact.find(params);
        }
    },
    Mutation: {
        addContact: async (parent, args) => {
            return await Contact.create(args)
        }
    }
}

module.exports = resolvers