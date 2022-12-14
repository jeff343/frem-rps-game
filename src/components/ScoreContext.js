import { createContext, useReducer } from "react";

export const ScoreContext = createContext(null)
export const ScoreDispatchContext = createContext(null)

export function ScoreProvider({ children }) {
    const [score, dispatch] = useReducer(
        scoreReducer,
        initialScore
    )

    return (
        <ScoreContext.Provider value={score}>
            <ScoreDispatchContext.Provider value={dispatch}>
                {children}
            </ScoreDispatchContext.Provider>
        </ScoreContext.Provider>
    )
}

function scoreReducer(score, action) {
    switch(action.type) {
        case 'WIN': {
            return (score + 1)
        }
        case 'TIE': {
            return (score)
        }
        case 'LOSE':{
            return (score - 1)
        }
        default: {
            throw Error('Unknown Action')
        }
    }
}

const initialScore = 0