<template>
  <q-page class="page">
    <div class="wrapper">
       <h5>Products</h5>
       <div class="links">
       <router-link
              to="/products/allproducts"
              exact
            >
           All Product
       </router-link>
       <router-link
              to="/products/addproducts"
              exact
            >
           Add Product
       </router-link>
       </div>
       <router-view />
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Products',
  created(){
    console.log(this.$route)
  }
}
</script>

<style scoped>
  .page{
    background:#F6F6F6;
  }
  .wrapper{
    padding:20px 0 0 20px;
  }
  h5{
    margin:.5rem 0 0 0;
  }
  a{
    background:white;
    padding:5px 10px;
    color:#333333;
    text-decoration:none;
    margin-right:10px;
  }
  .router-link-exact-active, .router-link-active{
    background:#6B296A;
    padding:5px 10px;
    color:white;
    border-radius:5px;
  }
  .links{
    margin:25px 0;
  }
</style>