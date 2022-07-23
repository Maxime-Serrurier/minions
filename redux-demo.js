// Etape 1 : Importer Redux
const redux = require('redux');

// Etape 2 : Initialiser le State
const initialState = {
    compteur: 0
};

// Etape 3 : Créer le reducer (ce quinous permettra de modifier le state)
const reducer = (state = initialState, action) => {

    // Actions
    if(action.type == 'INC_COUNTER') {
        return {
            compteur: state.compteur + 1
        };
    }
    else if(action.type == 'ADD_COUNTER') {
        return {
            compteur: state.compteur + action.value
        };
    }    

    return state;
}

// Etape 4 : Créer le Store (ce qui nous permettra de diffuser notre state partout, c'est un gros magasin)
const createStore = redux.createStore;
const store = createStore(reducer);

// Etape 5 : Créer l'abonnement au store (pour récupérer les dernières modifications)
store.subscribe(() => {
    console.log(store.getState());
});

// Etape 6 : Envoyer des actions (dispatcher)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 4});