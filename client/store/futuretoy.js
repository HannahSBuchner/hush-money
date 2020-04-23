import axios from 'axios'

const GOT_ALL_FUTURE_TOYS = 'GOT_ALL_FUTURE_TOYS'

export const gotAllFutureToys = futuretoys => ({
  type: GOT_ALL_FUTURE_TOYS,
  futuretoys
})

export const getAllFutureToys = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/toys/future')
      dispatch(gotAllFutureToys(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export default function(futuretoys = [], action) {
  switch (action.type) {
    case GOT_ALL_FUTURE_TOYS:
      return action.futuretoys
    default:
      return futuretoys
  }
}
