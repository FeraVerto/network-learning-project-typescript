import {FOLLOW, SET_USERS, UNFOLLOW, usersReducer} from "./users-reducer";
import {UsersType} from "./redux-store";

let state: UsersType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 3,
                avatar: "",
                fullName: "person-3",
                followed: false,
                status: "Человек-3-status",
                location: {city: "Ekaterinburg", country: "Russia"}
            },

            {
                id: 4,
                avatar: "",
                fullName: "person-4",
                followed: true,
                status: "Человек-3-status",
                location: {city: "Ekaterinburg", country: "Russia"}
            }
        ]
    }
})

test("usersReducer with FOLLOW", () => {

    let action = {type: FOLLOW, id: 3} as const
    let newState = usersReducer(state, action)

    expect(newState.users[0].followed).toBe(true)
})

test("usersReducer with UNFOLLOW", () => {

    let action = {type: UNFOLLOW, id: 4} as const
    let newState = usersReducer(state, action)

    expect(newState.users[1].followed).toBe(false)
})

test("usersReducer with SET_USERS", () => {

    let newUser = [{
        id: 6,
        avatar: "",
        fullName: "person-5",
        followed: true,
        status: "Человек-5-status",
        location: {city: "Sp", country: "Russia"}
    }]

    let action = {type: SET_USERS, users: newUser} as const
    let newState = usersReducer(state, action)

    expect(newState.users.length).toBe(3)
    expect(newState.users[2].id).toBe(6)
    expect(newState.users[2].fullName).toBe("person-5")
})

/*
test("error", () => {
    expect(() => {
        usersReducer(state, {type: "FAKE"})
    }).toThrowError();
})*/
