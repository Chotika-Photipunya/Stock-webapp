import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

const rootReducer = combineReducers({
    order: OrderRducer,
    products: ProductReducer,
    form: reduxForm
})

export default rootReducer;