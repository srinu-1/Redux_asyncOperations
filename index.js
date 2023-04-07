const { createStore, combineReducers, applyMiddleware } = require("redux");
const logger = require('redux-logger').default;
const thunk = require('redux_thunk');
const BUY_LAPTOP ="BUY_LAPTOP";
const BUY_MOBILE ="BUY_MOBILE";
 
const initialLaptop={
    numOfLaptops: 100
}

const initialMobile={
    numOfMobiles: 10000
}

const buyLaptop = () =>{
    return{
        type:"BUY_LAPTOP"
    }
}


const buyMobile = () =>{
    return{
        type:"BUY_MOBILE"
    }
}
const laptopReducer = (state = initialLaptop, action)=>{
    switch(action.type){
        case "BUY_LAPTOP":
            return {numOfLaptops: state.numOfLaptops-1}
        default:
            return state;
    }
}

const mobileReducer = (state = initialMobile, action)=>{
    switch(action.type){
        case "BUY_MOBILE":
            return {numOfMobiles: state.numOfMobiles-1}
        default:
            return state;
    }
}

const rootReducer = combineReducers({laptops: laptopReducer, mobiles: mobileReducer});
const store =  createStore(rootReducer, applyMiddleware(logger));
//console.log(store);
store.subscribe(() =>{console.log(store.getState())});
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
