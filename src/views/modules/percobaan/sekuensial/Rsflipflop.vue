<template>
  <div class="my-2">
    Modul 4 - Percobaan 2 - RS Flip-Flop
    <v-row>
      <v-col class="grid">
        <v-row>
          <v-col>
            <v-btn @click="switch1('0')" color="primary" elevation="2" icon>0</v-btn>
            <v-btn @click="switch1('1')" color="primary" elevation="2" icon>1</v-btn>
            <v-col>
              <v-btn color="primary" elevation="2" icon>{{input1}}</v-btn>
            </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="switch2('0')" color="primary" elevation="2" icon>0</v-btn>
            <v-btn @click="switch2('1')" color="primary" elevation="2" icon>1</v-btn>
            <v-col>
              <v-btn color="primary" elevation="2" icon>{{input2}}</v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="mx-auto grid">
        <v-img
          max-height="1500"
          max-width="250"
          :src="require('../../../../assets/RS.png')"
        ></v-img>
      </v-col>

      <v-col class="grid">
        <v-row>
          <v-col>
            <v-btn @click="get" color="primary" elevation="2" icon>get</v-btn>
            <v-btn elevation="2" icon disabled outlined>{{output || '0'}}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row>
      <v-col class="grid">
        <v-img
          max-height="150"
          max-width="250"
          :src="require('../../../../assets/land.jpg')"
          class="mx-auto"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import Socket from '../../../../socket';

export default {
  name: "And",
  data() {
    return {
      input1: '0',
      input2: '0',
      temp1: '0',
      temp2: '0',
      output: '',
      state: false
    };
  },
/*  mounted() {
    // Connected 
    Socket.$on("connected", () => {
      this.ws.connected = true;
    })
    // Disconnected
    Socket.$on("message", (json) => {
      this.ws.connected = false;
    })
  },*/
  methods: {
    switch1(number) {
      if (this.state) {
        this.input1 = '0';
        this.state = false;
      }
      this.input1 = `${number}`;
      this.temp1 = `${number}`
    },
    switch2(number) {
      if (this.state) {
        this.input2 = '0';
        this.state = false;
      }
      this.input2 = `${number}`;
      this.temp2 = `${number}`
    },
    get() {
      if (this.temp1 === '0' && this.temp2 === '0'){
        this.output = '0';
      }
      if (this.temp1 === '0' && this.temp2 === '1'){
        this.output = '0';
      }
      if (this.temp1 === '1' && this.temp2 === '0'){
        this.output = '0';
      }
      if (this.temp1 === '1' && this.temp2 === '1'){
        this.output = '1';
      }
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  place-items: center;
}
</style>
