
const statez = {
    contact:[]
};

export  const contactReducer = (state = statez, action ) => {
    const { type, payload } = action;
    switch( type ) {
    case "ADD_CONTACT_SUCCEED" :
        return {
            ...state,
            contact: [...state.contact, payload]
            }
    }
return state
};