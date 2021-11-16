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

    <!-- Right Navigation Menu Home -->
    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover

      v-if="!$route.meta.hideHome"
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

    <!-- Right Navigation Menu Modul 1 -->
    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover

      v-if="$route.meta.navMod1"
    >
      <v-list-item
        v-for="itemModul1 in itemsModul1"
        :key="itemModul1.title"
        :to="itemModul1.link"
      >
        <v-list-item-title class="text-h6">
            {{itemModul1.title}}
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Right Navigation Menu Modul 2 -->
    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover

      v-if="$route.meta.navMod2"
    >
      <v-list-item
        v-for="itemModul2 in itemsModul2"
        :key="itemModul2.title"
        :to="itemModul2.link"
      >
        <v-list-item-title class="text-h6">
            {{itemModul2.title}}
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Right Navigation Menu Modul 3 -->
    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover

      v-if="$route.meta.navMod3"
    >
      <v-list-item
        v-for="itemModul3 in itemsModul3"
        :key="itemModul3.title"
        :to="itemModul3.link"
      >
        <v-list-item-title class="text-h6">
            {{itemModul3.title}}
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Right Navigation Menu Modul 4 -->
    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover

      v-if="$route.meta.navMod4"
    >
      <v-list-item
        v-for="itemModul4 in itemsModul4"
        :key="itemModul4.title"
        :to="itemModul4.link"
      >
        <v-list-item-title class="text-h6">
            {{itemModul4.title}}
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Right Navigation Menu Modul 5 -->
    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover

      v-if="$route.meta.navMod5"
    >
      <v-list-item
        v-for="itemModul5 in itemsModul5"
        :key="itemModul5.title"
        :to="itemModul5.link"
      >
        <v-list-item-title class="text-h6">
            {{itemModul5.title}}
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
      ],
      itemsModul1: [
        {title: 'Percobaan 1', link: '/modul1'},
        {title: 'Percobaan 2', link: '/modul1'},
        {title: 'Percobaan 3', link: '/modul1'},
        {title: 'Percobaan 4', link: '/modul1'},
        {title: 'Percobaan 5', link: '/modul1'},
      ],
      itemsModul2: [
        {title: 'Percobaan 1', link: '/modul2'},
        {title: 'Percobaan 2', link: '/modul2'},
        {title: 'Percobaan 3', link: '/modul2'},
        {title: 'Percobaan 4', link: '/modul2'},
        {title: 'Percobaan 5', link: '/modul2'},
      ],
      itemsModul3: [
        {title: 'Percobaan 1', link: '/modul3'},
        {title: 'Percobaan 2', link: '/modul3'},
        {title: 'Percobaan 3', link: '/modul3'},
        {title: 'Percobaan 4', link: '/modul3'},
        {title: 'Percobaan 5', link: '/modul3'},
      ],
      itemsModul4: [
        {title: 'Percobaan 1', link: '/modul4'},
        {title: 'Percobaan 2', link: '/modul4'},
        {title: 'Percobaan 3', link: '/modul4'},
        {title: 'Percobaan 4', link: '/modul4'},
        {title: 'Percobaan 5', link: '/modul4'},
      ],
      itemsModul5: [
        {title: 'Percobaan 1', link: '/modul5'},
        {title: 'Percobaan 2', link: '/modul5'},
        {title: 'Percobaan 3', link: '/modul5'},
        {title: 'Percobaan 4', link: '/modul5'},
        {title: 'Percobaan 5', link: '/modul5'},
      ],
    };
  },
};
</script>
