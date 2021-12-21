<template>
  <div class="my-2">
    <h1 class="header">
      Percobaan 1 - Operasi AND
    </h1>
    <v-row>
      <v-col class="grid">
        <v-row>
          <v-col>
            <v-btn v-if="input1=='1'" @click="led1('0')" color="primary" elevation="2" >OFF</v-btn>
            <v-btn v-if="input1=='0'" @click="led1('1')" color="primary" elevation="2" >ON</v-btn>
            <v-btn color="primary" elevation="2" disabled outlined icon class="mx-4">{{input1}}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn v-if="input2=='1'" @click="led2('0')" color="primary" elevation="2" >OFF</v-btn>
            <v-btn v-if="input2=='0'" @click="led2('1')" color="primary" elevation="2" >ON</v-btn>
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
            <v-btn v-if="output!==null" @click="get; kirim()" color="primary" elevation="2">get</v-btn>
            <v-btn elevation="2" icon disabled outlined class="mx-4">{{output}}</v-btn>
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
        <img
          v-if="dataimage64!=null"
          :src="dataUrl"
          class="mx-auto"
      >
      </v-col>
    </v-row>

    <br>
    <br>
    <br>
    <br>
  </div>
  
</template>

<script>
//import Socket from '../../../../socket';

  export default {
    name: "And",
    data() {
      return {
        input1: null,
        input2: null,
        temp1: '0',
        temp2: '0',
        output: null,
        dataimage64: null,
        state: false
      };
    },
    computed : {
    dataUrl(){
        return 'data:image/jpeg;base64,' + btoa(
            new Uint8Array(this.dataimage64)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }
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
    async mounted() {    
        this.sub_topic = 'image64';       
        this.$mqtt.on('connect', () => {  
            this.$mqtt.subscribe(this.sub_topic, (err) => {
              if(err){
                  console.log(err);
              }
              else{
                  console.log("success subscribe " + this.sub_topic);
                  this.state = "connected " + this.sub_topic;
              }
            });
            this.$mqtt.subscribe("mikro2client_input1active", (err) => {
              if(err){
                  console.log(err);
              }
              else{
                  console.log("success subscribe " + "mikro2client_input1active");
                  this.state = "connected" + "pubinputactive1";
              }
            });
            this.$mqtt.subscribe("mikro2client_input2active", (err) => {
              if(err){
                  console.log(err);
              }
              else{
                  console.log("success subscribe " + "mikro2client_input2active");
                  this.state = "connected " + "mikro2client_input2active";
              }
            });
            this.$mqtt.subscribe("and-output-active-3", (err) => {
              if(err){
                  console.log(err);
              }
              else{
                  console.log("success subscribe " + "and-output-active-3");
                  this.state = "connected " + "and-output-active-3";
              }
            });
    });
        this.$mqtt.on('message', (topic, message) =>{
          console.log(message);
          if(topic== 'image64'){
            this.dataimage64 = message;
        }else if(topic == 'mikro2client_input1active'){
          this.input1 = message;
        }else if(topic == 'mikro2client_input2active'){
          this.input2 = message;
        }else if(topic == 'and-output-active-3'){
          this.output = message;
        }
      })
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
          this.output = '0';
        }
        if (this.temp1 === '1' && this.temp2 === '0'){
          this.output = '0';
        }
        if (this.temp1 === '1' && this.temp2 === '1'){
          this.output = '1';
        }
      },
      led1(state){
        this.$mqtt.publish('and-input-active-1', state, (err) => {
        if(err){
          console.log(err)
          //alert("Berhasil Memberi Minum");
            }
          })
        },
      led2(state){
        this.$mqtt.publish('and-input-active-2', state, (err) => {
        if(err){
          console.log(err);
          //alert("Berhasil Memberi Minum");
            }
          })
        },
      kirim(){
        this.$mqtt.publish('active', 'true', (err) => {
        if(!err){
          this.state = "Berhasil Mengambil ";
          //alert("Berhasil Memberi Minum");
            }
          })
      }  
    }
    

  }
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
