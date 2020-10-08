export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
}

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type) {

        default : 
            return state;
        
    }

}

export default reducer;