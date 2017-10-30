// TODO: String templates


const object = {
    id:7,
    name:"Jack",
    friend:{
        name:"Jim",
        friend:{
            name:"Jo",
            friend:{
                name:"Jules",
                friend:{
                    name:"Jack"
                }
            }
        }
    }
};


console.log(JSON.stringify(object));
