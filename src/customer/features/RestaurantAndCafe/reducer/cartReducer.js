import * as types from '../actionTypes'
import { pushInPayload } from 'utils'

export default (state, action) => {
  switch (action.type) {
    case types.CART_ADD_DISH:
      let result
      if (state.payload.cart) {
        let items = state.payload.cart.slice(0)
        items.forEach((item, index) => {
          if (item.id === action.payload.id) items[index].count = item.count + 1
          else if (index === items.length - 1) items = []
        })
        result = items.length ? items : [...state.payload.cart, { ...action.payload, count: 1 }]
      }
      else result = [{ ...action.payload, count: 1 }]
      return pushInPayload(state, {
        cart: result
      })
    case types.CART_CHANGE_ITEM_COUNT:
      return pushInPayload(state, {
        cart: state.payload.cart.map(item =>
          item.id === action.payload.id ? { ...item, count: item.count += action.payload.amount } : item
        ).filter(item => item.count > 0)
      })
    case types.CART_DELETE_ITEM:
      return pushInPayload(state, {
        cart: state.payload.cart.filter(item => item.id != action.id)
      })  

    default: return false
  }
}