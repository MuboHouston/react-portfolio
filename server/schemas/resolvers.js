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
        },
        // deleteContact: async (parent, {name, email }) => {
        //     const params = {};

        //     if(name) {
        //         params.name = name

        //         return await Contact.findOneAndDelete(name)
        //     }

        //     if(email) {
        //         params.email = email
                
        //         return await Contact.findOneAndDelete(email)
        //     }

        //     return await alert("No message found with this criteria")
        // }
    }
}

module.exports = resolvers