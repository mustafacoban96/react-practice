import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


interface UserState {
    data: User | null,
    isLoading: boolean,
    error:string,
}

const initialState: UserState = {
    data:null,
    isLoading: false,
    error:""
}
export const fetchUser = createAsyncThunk("fetchUser", async()=>{
    const response = await axios.get<User>('https://randomuser.me/api/');
    return response.data;
}); // paramters ==> actionCreatorname, func

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchUser.pending, (state,action) =>{
            state.isLoading = true;
            state.error = "";


        }); //pending
        builder.addCase(fetchUser.fulfilled, (state,action: PayloadAction<User>) =>{
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchUser.rejected, (state,action) =>{
            state.isLoading = false;
            state.error = "Error fetching user data"
        })
    }
})



export default userSlice.reducer;



export interface User {
    results: Result[];
    info: Info;
  }
  
  interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
  }
  
  interface Result {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Dob;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
  }
  
  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  
  interface Id {
    name: string;
    value: string;
  }
  
  interface Dob {
    date: string;
    age: number;
  }
  
  interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }
  
  interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
  }
  
  interface Timezone {
    offset: string;
    description: string;
  }
  
  interface Coordinates {
    latitude: string;
    longitude: string;
  }
  
  interface Street {
    number: number;
    name: string;
  }
  
  interface Name {
    title: string;
    first: string;
    last: string;
  }