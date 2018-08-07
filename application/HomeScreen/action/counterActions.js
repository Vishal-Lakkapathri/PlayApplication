import {
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER,
  STARWARS_LIST,
} from '../constants/counterConstants';

export const incrementCounter = () => ({
  type: INC_COUNTER,
});

export const decrementCounter = () => ({
  type: DEC_COUNTER,
});

export const resetCounter = () => ({
  type: RESET_COUNTER,
});

// export const handleStarWarsClick = () => (dispatch) => {
//   fetch('https://swapi.co/api/people/')
//     .then(response => response.json())
//     .then((json) => {
//       const { results } = json;
//       dispatch(starWarsLits(results));
//     });
// };

export const handleStarWarsClick = () => (dispatch) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://swapi.co/api/people/', true);
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const details = JSON.parse(xhr.responseText).results;
      dispatch(starWarsCharacter(details));
    }
  };
  xhr.send();
};

export const starWarsCharacter = details => ({
  type: STARWARS_LIST,
  characters: details,
});
