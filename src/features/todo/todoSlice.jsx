import { createSlice, nanoid } from "@reduxjs/toolkit";

// this no special or magical thing it's just normal JS we are writting here so, if you want to pass the referance of predefined function/states you can
 // from any where you can define then above here or can import them from any where in the app.

export const todoSlice = createSlice({
    name:"todo",// this is how our devtools will shows us.

    // all the data of this particular slice.
    initialState:{
        todos:[{id:1, text:"hii how are you"}, {} , {}]
        // there can be more and different type of state, these are the data we'll need to work with the slice.

    },
    // all the functions that will be used by this slice ( to mutate data )
    reducers:{
        addTodo: (state,action)=>{
            const todo ={
                id: nanoid(),
                text: action.payload // the data we recieve to update the state. 
                // // there can be further more and you can jsut write action.payload in front of them as it will automatically derive the right data.
            }

            state.todos.push(todo);

        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload ) // here also the payload is the data received( an id) that is being compared with the every obj's(todo) id just normal js stuff with new keyword payload
        },
        updateTodo: (state,action)=>{
            const {id, ...updates } = action.payload; // this is not magic it's just payload is an obj and we are destructuring it's values to use the values directly
           const todo= state.todos.forEach((todo) => todo.id === id);
           if(todo){
            Object.assign(todo, updates);
           }
        }
    }

});

// to access these function in any component we'll need to export it.
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;


// to connect all the reducer with the store so it can use it to update the state/data.
export default todoSlice.reducer;