const Initial_state = {
    create_users: [],
    create_passwords: [],
    sign_users: [],
    sign_passwords: [],
    data: null


}
export default (state = Initial_state, action) => {

    // console.log("action function====>", action.type)
    // return state;

    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                create_users: action.email,
                create_passwords: action.pass,

            })
        case "SIGNDATA":
            return ({
                ...state,
                sign_users: action.email,
                sign_passwords: action.pass,
                data: action.data

            })
        default:
            return state
    }
}