import React from 'react'
import { createStore, connect } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import { initialState, rootReducer } from '../redux/reducer'
import Header from '../components/header';


const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

class Wrapper extends React.Component {
  render() {
    const Component = this.props.component;
    return <Component dataExperience={this.props.language_ds} />
  }
}

afterEach(cleanup);

test('change language', async () => {

  const { getByTestId } = renderWithRedux(<Header />);
  
  await fireEvent.click(getByTestId('button-en'));

  console.log(getByTestId('text-language'))

  // expect(getByTestId('button-en')).equalsTo({})

  // const { getByTestId } = render(<Header />);

  // fireEvent.click(getByTestId('button-en'));

  // const language = await waitForElement(() => getByTestId('Electronic'));
  // console.log(language);

  //expect(language).toHaveTextContent('')

});
