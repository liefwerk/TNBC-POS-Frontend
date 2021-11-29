import POSIndex from '@/views/admin/pos/index.vue'
import CustomerList from '@/views/admin/pos/CustomerList.vue'
import CustomerCreate from '@/views/admin/pos/CustomerCreate.vue'
import CustomerUpdate from '@/views/admin/pos/CustomerUpdate.vue'
import CouponList from '@/views/admin/pos/CouponList.vue'
import CouponCreate from '@/views/admin/pos/CouponCreate.vue'
import CouponUpdate from '@/views/admin/pos/CouponUpdate.vue'
import PointOfSale from '@/views/admin/pos/PointOfSale.vue'
import InvoiceList from '@/views/admin/sales/InvoiceList.vue'
import GeneratedQrCode from '@/views/admin/pos/GeneratedQrCode.vue'
import TransactionExplorer from '@/views/admin/pos/TransactionExplorer.vue'

const PointOfSaleRoutes = [
    {
        path: '/point-of-sale',
        name: 'POSIndex',
        component: POSIndex,
        meta: {
            layout: 'POSLayout',
            auth: true
        },
        children: [
            {
                path: 'customers-list',
                name: 'CustomerList',
                component: CustomerList,
            },
            {
                path: 'customers-create',
                name: 'CustomerCreate',
                component: CustomerCreate,
            },
            {
                path: 'customers-update/:id',
                name: 'CustomerUpdate',
                component: CustomerUpdate,
            },
            {
                path: 'coupons-list',
                name: 'CouponList',
                component: CouponList,
            },
            {
                path: 'coupons-create',
                name: 'CouponCreate',
                component: CouponCreate,
            },
            {
                path: 'coupons-update/:id',
                name: 'CouponUpdate',
                component: CouponUpdate,
            },
            {
                path: 'point-of-sale',
                name: 'PointOfSale',
                component: PointOfSale,
            },
            {
                path: 'invoices-list',
                name: 'InvoiceList',
                component: InvoiceList,
            },
            {
                path: 'generated-qr-code',
                name: 'GeneratedQrCode',
                component: GeneratedQrCode,
            },
            {
                path: 'transaction-explorer',
                name: 'TransactionExplorer',
                component: TransactionExplorer,
            },
        ]
    },
]

export default PointOfSaleRoutes
