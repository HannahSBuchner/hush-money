import axios from 'axios'

const GOT_ALL_TOYS = 'GOT_ALL_TOYS'

export const gotAllToys = toys => ({
  type: GOT_ALL_TOYS,
  toys
})

export const getAllToys = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/toys')
      dispatch(gotAllToys(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export default function(toys = [], action) {
  switch (action.type) {
    case GOT_ALL_TOYS:
      return action.toys
    default:
      return toys
  }
}
