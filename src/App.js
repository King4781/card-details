import { useReducer } from 'react';

import { Layout, Form, FrontCard, BackCard } from './components';

import './App.css';

const initialState = {
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.payload.field]: action.payload.value
            }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

function App() {
      const [state, dispatch] = useReducer(reducer, initialState);

    const handleUpdate = (field, value) => {
        dispatch({ type: 'UPDATE_FIELD', payload: { field, value }});
    };

    const reset = () => {
      dispatch({ type: 'RESET' });
    };

      return (
          <Layout
              leftColumn={[
                  <FrontCard state={state} key={1} />,
                  <BackCard state={state} key={2} />
              ]}
              rightColumn={<Form {...{ handleUpdate, reset, state }} />}
          />
      );
}

export default App;
