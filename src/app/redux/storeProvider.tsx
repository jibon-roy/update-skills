"use client"
import { Provider } from "react-redux";
import { store } from "./store/store";

type Props = {
    children: any
}

function StoreProvider({ children }: Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default StoreProvider;