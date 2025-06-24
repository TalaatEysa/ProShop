import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles//index.css';
import App from './App.jsx';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import { Provider } from 'react-redux';
import store from './store.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<App />}
        >
            <Route
                index
                element={<HomePage />}
            />
            <Route
                path='product/:id'
                element={<ProductDetails />}
            />
        </Route>
    )
);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
