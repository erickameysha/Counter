
export type CounterType  = {
  minCount: number,
  maxCount: number,
  count: number
}
type ActionType = ReturnType<typeof setInitCounter>| ReturnType<typeof setCounter>

let initialState:CounterType = {
  minCount: 0, maxCount: 5, count: 0
}
export const CounterReducer = (state= initialState, action: ActionType) => {

  switch (action.type) {
    case "SET-INIT-COUNT":{
      return {...state,
        count: action.initCount,
        maxCount:action.initMaxCount,
        minCount:action.initMinCount,
      }
    }
    case "SET-COUNT":{
      return {...state, count: action.count}
    }

    default: return state
  }
}
export const setInitCounter = (initMaxCount:  number, initMinCount: number, initCount: number) => ({
  type: 'SET-INIT-COUNT', initMaxCount, initMinCount,initCount
}as const)
export const setCounter = (count: number) => ({
  type: 'SET-COUNT', count
}as const)
