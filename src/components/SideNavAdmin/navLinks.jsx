import { ListIcon, ListPlusIcon, ReceiptIcon } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icons: <ReceiptIcon />
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icons: <ListIcon />
    },
    {
        id: 3,
        label: 'Adicionar Produto',
        path: '/admin/novo-produto',
        icons: <ListPlusIcon />
    }
]