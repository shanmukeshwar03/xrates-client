import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'currency',
  initialState: {
    rates: {},
    symbols: {},
    timestamp: 0,
    options: [],
    base: 'EUR',
    fromInput: 1,
    toInput: 1,
    fromExchange: 1,
    toExchange: 1,
  },
  reducers: {
    updateState: (state, action) => {
      const rates = JSON.parse(action.payload.rates)
      const symbols = JSON.parse(action.payload.symbols)
      state.rates = rates.rates
      state.options = [...Object.keys(rates.rates)]
      state.timestamp = rates.date
      state.base = rates.base
      state.symbols = symbols.symbols
      state.toExchange = rates.rates['EUR']
      state.fromExchange = rates.rates['INR']
      state.toInput = rates.rates['INR']
    },
    handlefrom: (state, action) => {
      state.fromInput = action.payload
      state.toInput = (
        (action.payload * state.toExchange) /
        state.fromExchange
      ).toFixed(3)
    },
    handleto: (state, action) => {
      state.toInput = action.payload
      state.fromInput = (
        (action.payload * state.fromExchange) /
        state.toExchange
      ).toFixed(3)
    },
    handlefromExchange: (state, action) => {
      state.fromExchange = action.payload
      state.toInput = (
        (state.fromInput * state.toExchange) /
        action.payload
      ).toFixed(3)
    },
    handletoExchange: (state, action) => {
      state.toExchange = action.payload
      state.fromInput = (
        (state.toInput * action.payload) /
        state.fromExchange
      ).toFixed(3)
    },
  },
})

export const {
  updateState,
  handlefrom,
  handleto,
  handlefromExchange,
  handletoExchange,
} = slice.actions
export default slice.reducer
