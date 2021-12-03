<template>
  <div class="my-2">
    <h1 class="header">
      Percobaan 2 - Operasi OR
    </h1>
    <v-row>
      <v-col class="grid">
        <v-row>
          <v-col>
            <v-btn @click="switch1('0'); ledOff1()" color="primary" elevation="2" >OFF</v-btn>
            <v-btn @click="switch1('1'); ledOn1()" color="primary" elevation="2" >ON</v-btn>
            <v-btn color="primary" elevation="2" disabled outlined icon class="mx-4">{{input1}}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="switch2('0'); ledOff2()" color="primary" elevation="2" >OFF</v-btn>
            <v-btn @click="switch2('1'); ledOn2()" color="primary" elevation="2" >ON</v-btn>
            <v-btn color="primary" elevation="2" disabled outlined icon class="mx-4">{{input2}}</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="mx-auto grid">
        <v-img
          height="179"
          width="623"
          :src="require('../../../../assets/AND.png')"
        ></v-img>
      </v-col>

      <v-col class="grid">
        <v-row>
          <v-col>
            <v-btn @click="get" color="primary" elevation="2">get</v-btn>
            <v-btn elevation="2" icon disabled outlined class="mx-4">{{output || '0'}}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <v-row class="my-10">
      <v-col class="grid">
        <v-img
          max-height="150"
          max-width="250"
          :src="require('../../../../assets/nothing.png')"
          class="mx-auto"
        ></v-img>
      </v-col>
    </v-row>

    <br>
    <br>
    <br>
    <br>
  </div>
  
</template>

<script>
export default {
  name: "Or",
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
        this.output = '1';
      }
      if (this.temp1 === '1' && this.temp2 === '0'){
        this.output = '1';
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

.header {
  padding: 60px;
  text-align: center;
  font-size: 30px;
}
</style>
