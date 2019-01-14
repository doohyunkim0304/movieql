const danny = {
    name: "Danny",
    age: 31,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => danny
    }
};

 export default resolvers;
