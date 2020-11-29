# POMODORO CLOCK

- Jest to zegar mający na celu lepszą organizację pracy 
- Można manualnie ustalić długość pracy i przerwy. Na jedno i drugie jest ustawiony górny limit. 
- Specjalny dźwięk informuje o początku przerwy

## State management przy pomocy [Reduxa](https://redux-toolkit.js.org/ "Reduxa")

```javascript
const sessionStatusSlice = createSlice({
  name: 'sessionStatus',
  initialState: 'session',
  reducers: {
    resetStates: state => { return state = 'session'},
    sessionOn: state => { return state = 'session' },
    breakOn: state => { return state = 'break' }
  }
})

export const { resetStates, sessionOn, breakOn } = sessionStatusSlice.actions;
```

## Przykładowy CSS i responsywność

```css
.label {
  border: red solid 7px;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  max-height: 65px;
  max-width: 500px;
  width: 100%;
  margin: 20px 10px;

  @media screen and (max-width: 1000px) {
    margin: 5px;
    font-size: 0.7em;
    max-height: 47px; 
  }
}
```

## Instalacja

[Create React App with Redux](https://github.com/reduxjs/cra-template-redux "Create React App with Redux"):

`npx create-react-app my-app --template redux`

SCSS:

`npm install node-sass@4.14.1`