import {UserModel} from './user';

const userResolver = {
    Query: {
        Users: async (parent:any, args:any)=>{
            const users = await UserModel.find();
            return users;
        },
        User: async (parent:any, args:any)=>{
            const user = await UserModel.findOne({_id: args._id});
        }
    },
    Mutation:{
        createUser: async (parent:any, args:any)=>{
            const userDb = await UserModel.create({
                name: args.name,
                lastName: args.lastName,
                email: args.email,
                role: args.role,
            });

            if(Object.keys(args).includes('state')){
                userDb.state = args.this.state;
            }

            return userDb;
        },

        updateUser: async (parent:any, args:any)=>{
            const userDb = await UserModel.findByIdAndUpdate(args._id,{
                name: args.name,
                lastname: args.lastName,
                email: args.email,
                role: args.role,
                state: args.state
            });

            return userDb;
        },

        deleteUser: async (parent:any, args:any)=>{
            if(Object.keys(args).includes('_id')){
                const userDeleted = await UserModel.findOneAndDelete({_id:args._id});
                return userDeleted;
            }else if(Object.keys(args).includes('email')){
                const userDeleted = await UserModel.findOneAndDelete({_id:args.email});
                return userDeleted;
            }
        },
    },
}

export {userResolver}