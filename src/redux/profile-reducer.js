import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   posts: [
      { id: '1', message: 'Hi', likes: '0' },
      { id: '2', message: 'It\'s my first post', likes: 36 },
      { id: '3', message: 'HHello there', likes: 24 }
   ],
   profile: null,
   staus: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: action.newPostText,
            likes: 0
         }
         return {
            ...state,
            posts: [...state.posts, newPost]
         }
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         }
      }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      default:
         return state
   }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId)
         .then(data => {
            dispatch(setUserProfile(data))
         })
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then(data => {
            dispatch(setStatus(data))
         })
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(setStatus(status))
            }
         })
   }
}

export default profileReducer