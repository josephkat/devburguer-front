import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row.jsx';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api.js'
import { Filter, FilterOptions } from './styles.js';
import { orderStatusOptions } from './orderStatus';


export function Orders() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [activeStatus, setActiveStatus] = useState(0);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders');

            setOrders(data);
            setFilteredOrders(data);
        }

        loadOrders();
    }, [])

    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: order.createdAt,
            status: order.status,
            products: order.products,
        };
    }

    useEffect(() => {
        const newRows = filteredOrders.map((order) => createData(order));

        setRows(newRows);
    }, [filteredOrders]);

    function handleStatus(status) {
        if (status.id === 0) {
            setFilteredOrders(orders);
        } else {
            const newOrders= orders.filter((order) => order.status === status.value);
            setFilteredOrders(newOrders);
        }
        
        setActiveStatus(status.id);
    }

    useEffect(() => {
        if(0 === activeStatus) {
            setFilteredOrders(orders);
        } else {
            const statusIndex = orderStatusOptions.findIndex(status => 
                status.id === activeStatus);
    
            const newFilteredOrders= orders.filter((order) => 
                order.status === orderStatusOptions[statusIndex]?.value);
            
            setFilteredOrders(newFilteredOrders);
        }
    }, [orders]);

    return (
        <>  
            <Filter>
                {orderStatusOptions.map((status) => (
                    <FilterOptions 
                        key={status.id} 
                        onClick={() => {handleStatus(status)}}
                        $isActiveStatus={activeStatus === status.id}
                        >
                        {status.label}
                    </FilterOptions>
                ))}
                <></>
            </Filter>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell align="right">Clientes</TableCell>
                            <TableCell align="right">Data do pedido</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredOrders.map((row) => (
                            <Row 
                            key={row.orderId} row={row} 
                            orders={orders} setOrders={setOrders}   
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}