import {addPostAC, ProfilePageType, profileReducer} from "./profile-reducer";
import {ProfileType} from "../types/types";


let state: ProfilePageType;

beforeEach(() => {
        state = {
            posts: [
                {id: 1, message: "Это передача сдохни или умри!", like: 25},
                {id: 2, message: "Или сдохни", like: 40},
                {id: 3, message: "Или умри", like: 1}
            ],
            profile: null as ProfileType | null,
            status: ""
        }
    }
)

it('length of post should be incremented', () => {
    let action = addPostAC("new post should be added")

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})

it('new of post should be added', () => {
    let action = addPostAC("new post should be added")

    let newState = profileReducer(state, action)
    expect(newState.posts[0].message).toBe("new post should be added")
})
