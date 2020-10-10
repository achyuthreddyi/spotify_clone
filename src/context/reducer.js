export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    discover_weekly:null,
    token:null
    // token:"BQDbVZv8nBKcZFZ6PTP2cAq4juQKttK3KoI1zi_kRyW0N_KOVbUXNLUgIfbcfhnVDfEI0AB-86hNjUt2SMvv2x6MoYj5E6NY0aFDmnzXOpFAk8qiE6uhHc92dZh2K3MMPzXoicelRmL7nF301Pn-JSmA-L_2Po5nUsYyHTct5yU7lvbilpZO"
}
const reducer = (state, action) =>{
    console.log("In the datalayer",action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case "CREATE_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists                
            }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly

            }
        default : 
            return state;        
    }
}
export default reducer;