import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const INCREASE_USER_BALANCE = 'INCREASE_USER_BALANCE'
const DECREASE_USER_BALANCE = 'DECREASE_USER_BALANCE'
const CLEAR_BALANCE = 'CLEAR_BALANCE'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const increaseUserBalance = user => ({type: INCREASE_USER_BALANCE, user})
const decreaseUserBalance = user => ({type: DECREASE_USER_BALANCE, user})
const clearBalance = user => ({
  type: CLEAR_BALANCE,
  user
})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (name, email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {name, email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    console.log('pushing home')
    history.push('/')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const increaseThunk = () => async dispatch => {
  try {
    const {data} = await axios.put('api/users/increase')
    dispatch(increaseUserBalance(data))
  } catch (error) {
    console.error(error)
  }
}
export const decreaseThunk = () => async dispatch => {
  try {
    const {data} = await axios.put('api/users/decrease')
    dispatch(decreaseUserBalance(data))
  } catch (error) {
    console.error(error)
  }
}

export const clearThunk = () => async dispatch => {
  try {
    const {data} = await axios.put('api/users/clear')
    dispatch(clearBalance(data))
  } catch (error) {
    console.error(error)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case INCREASE_USER_BALANCE:
      return action.user
    case DECREASE_USER_BALANCE:
      return action.user
    case CLEAR_BALANCE:
      return action.user
    default:
      return state
  }
}
