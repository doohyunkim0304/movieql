// import { strict } from "assert";

export const people = [
    {   
        id: "0",
        name: "Danny",
        age: 31,
        gender: "male"
    },
    {
        id: "1",
        name: "mile",
        age: 18,
        gender: "male"
    },
    {
        id: "2",
        name: "chris",
        age: 25,
        gender: "male"
    },
    {
        id: "3",
        name: "nodi",
        age: 22,
        gender: "male"
    },
    {
        id: "4",
        name: "JD",
        age: 41,
        gender: "male"
    },
];


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}