import { Route, Routes } from 'react-router-dom';

import { 
    Register, Login, 
    Home, Menu, 
    Orders,
    Products,
    NewProduct,
    NotFound,
    CartFinalize,
    CompletePayment,
    Checkout
} from '../pages';
import { UserLayout } from '../layouts/UserLayout/index.jsx';
import { AdminLayout } from '../layouts/AdminLayout/index.jsx';
import { Cart } from '../pages/Cart/index.jsx';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path='/cardapio' element={<Menu />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/admin' element={<AdminLayout />}>
                <Route path='pedidos' element={<Orders />} />
                <Route path='produtos' element={<Products />} />
                <Route path='/admin/novo-produto' element={<NewProduct />} />
            </Route>

            

            <Route path='/carrinho' element={<Cart />} />

            <Route path='/cartfinalize' element={<CartFinalize />} />

            <Route path='/checkout' element={<Checkout />} />

            <Route path='/complete' element={<CompletePayment />} />

            <Route path='*' element={<NotFound />} />

        </Routes>
    );
}