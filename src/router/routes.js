
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'products',path: '/products', component: () => import('pages/Products.vue'),
        children:[{ path: 'allproducts', component: () => import('pages/AllProduct.vue') },{ path: 'addproducts', component: () => import('pages/AddProduct.vue') }]
     
      },
      { path: 'supplier', component: () => import('pages/Supplier.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes;
