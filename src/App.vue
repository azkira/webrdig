<template>
  <v-app>

    <!-- Left Navigation Menu -->
    <v-navigation-drawer
      app
      permanent
      width="%"
      dark
      color="#013880"
    >
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon
            class="mx-3"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
      app
      clipped-right
      elevation="4"
    >
      <v-list-item>
        <v-toolbar-title>Web Praktikum Rangkaian Digital</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-title>07211840000072</v-toolbar-title>
        
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-app-bar>

    <!-- Right Navigation Menu -->
    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover
    >
      <v-list-item
        v-for="rightnav in rightnavs"
        :key="rightnav.title"
        :to="rightnav.link"
      >
        <v-list-item-title class="text-h6">
            {{rightnav.title}}
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main class="grey lighten-3">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view class="mx-2"></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      items: [
          { title: 'Home', icon: 'mdi-home', link: '/' },
          { title: 'Recent', icon: 'mdi-history', link: '/recent' },
          { title: 'My Account', icon: 'mdi-account-group-outline', link: '/teams' },
          { title: 'Users', icon: 'mdi-calendar', link: '/schedule' },
        ],
      rightnavs: [
        {title: 'Modul 1', link: '/modul1'},
        {title: 'Modul 2', link: '/modul2'},
        {title: 'Modul 3', link: '/modul3'},
        {title: 'Modul 4', link: '/modul4'},
        {title: 'Modul 5', link: '/modul5'},
      ]
    };
  },
};
</script>
