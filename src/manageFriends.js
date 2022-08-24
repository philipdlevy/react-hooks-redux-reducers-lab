import { managePresents } from "./managePresents";
const initialState = {friends: []}


export function manageFriends(state, action) {
  // console.log("state", state)
  console.log("action.payload", action.payload)
  // your code here
  switch (action.type) {
    case 'friends/add':
      return {friends: [...state.friends, action.payload]}
    case 'friends/remove':
      return {friends: state.friends.filter((friend) => friend.id != action.payload)}
    default:
      return state;
  }
}



// const initialState = { friends: [] };

// let action = {
//   type: 'friends/add',
//   payload: {
//     name: 'Mac Miller',
//     hometown: 'Arizona',
//     id: 1,
//   },
// };

// function manageFriends(state, action) {
//   switch (action.type) {
//     case 'friends/add':
//       return { friends: [...state.friends, action.payload] };
//     case 'friends/remove':
//       return {
//         friends: state.friends.filter((friend) => friend.id != action.payload),
//       };
//     default:
//       return state;
//   }
// }



// manageFriends(initialState, action);
