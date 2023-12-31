import profileReducer, { actions } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hfdgfdgfdgj", likesCount: 12 },
    { id: 2, message: "HJHNGJNGKJGNJG", likesCount: 1 },
    { id: 3, message: "hdfghgfjhfg", likesCount: 101 },
    { id: 4, message: "iouojhkhkjhkhj", likesCount: 50 },
  ],
  profile: null,
  status: "",
};

it("length of posts should be incremented", () => {
  let action = actions.addPostCreator("it-km");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});
it("message of new posts should be correct", () => {
  let action = actions.addPostCreator("it-km");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("it-km");
});
it("after deleting length of massages should be decrement", () => {
  let action = actions.deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
it("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = actions.deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
