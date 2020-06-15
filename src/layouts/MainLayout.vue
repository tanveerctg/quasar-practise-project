

<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height:100vh" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="hamburgerIcon"/>  
          <q-toolbar-title>Header</q-toolbar-title>
                  <div>
         <q-icon name="account_circle" style="font-size: 2em;color:black;"/>
         Abdullah
        <q-menu>
          <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section style="color:black">Open...</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section  style="color:black">New</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section  style="color:black">Preferences</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>

              <q-menu anchor="top right" self="top left">
                <q-list>
                  <q-item
                    v-for="n in 3"
                    :key="n"
                    dense
                    clickable
                  >
                    <q-item-section >Submenu Label</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                    <q-menu auto-close anchor="top right" self="top left">
                      <q-list>
                        <q-item
                          v-for="n in 3"
                          :key="n"
                          dense
                          clickable
                        >
                          <q-item-section>3rd level Label</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                </q-list>
              </q-menu>

            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section  style="color:black">Quit</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item  :active="link === 'dashboard'"
                     @click="link = 'dashboard'" 
                     clickable v-ripple>
              <q-item-section>
                Dashboard
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
            </q-item>
            <q-item 
            :active="link === 'customers'"
            @click="link = 'customers'" 
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="people" />
              </q-item-section>

              <q-item-section>
               Customers
              </q-item-section>
            </q-item>

            <router-link
              to="/supplier"
              active-class="active"
              exact
              style="text-decoration:none;color:white;"
            >
            <q-item 
            :active="link === 'supplier'"
            @click="link = 'supplier'" 
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="local_shipping" />
              </q-item-section>

              <q-item-section>
               Supplier List
              </q-item-section>
            </q-item>
            </router-link>
            
            <q-separator />
            <router-link
              name='products'
              to="/products"
              active-class="active"
              exact
              style="text-decoration:none;color:white;"
            >
            <q-item 
            :active="link === 'products'"
            @click="link = 'products'" 
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="redeem" />
              </q-item-section>

              <q-item-section >

               Products
             
              </q-item-section>
            </q-item>
            </router-link>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { fasFont } from '@quasar/extras/fontawesome-v5'
export default {
  data () {
    return {
      drawer: false,
      miniState: true,
      link: 'inbox'
    }
  },
  created(){
    this.fasFont = fasFont
  }
}
</script>
<style>
.q-icon{
  color:white;
}
.bg-grey-3 {
  background: #6B296A !important;
}
.q-item__section--main{
  color:white;
}
.bg-black {
  background:white !important;
  color:black;
}
.hamburgerIcon i{
  color:black !important;
}
.q-pa-md{
  padding:0;
}
.usermenu .q-item__section--main{
  color:black !important;
}
.q-item--active {
    background: #824E81 ;
}
.router-link-exact-active,.router-link-active{
 text-decoration:none;
 color:white;
}
</style>