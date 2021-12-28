<template>
  <div class="my-2">
    <h1 class="header">Percobaan 1 - Operasi AND</h1>
    <v-row>
      <v-col class="grid">
        <v-row>
          <v-col>
            <!-- button 1 - 1 -->
            <v-btn
              @click="switch1('0')"
              color="primary"
              elevation="2"
              class="mx-2"
              >OFF</v-btn
            >
            <!-- button 1 - 2 -->
            <v-btn
              @click="switch1('1')"
              color="primary"
              elevation="2"
              class="mx-2"
              >ON</v-btn
            >
            <!-- button 1 - 3 -->
            <v-btn color="primary" elevation="2" icon>{{ input1 }}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- button 2 - 1 -->
            <v-btn
              @click="switch2('0')"
              color="primary"
              elevation="2"
              class="mx-2"
              >OFF</v-btn
            >
            <!-- button 2 - 2 -->
            <v-btn
              @click="switch2('1')"
              color="primary"
              elevation="2"
              class="mx-2"
              >ON</v-btn
            >
            <!-- button 2 - 3 -->
            <v-btn color="primary" elevation="2" icon>{{ input2 }}</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="mx-auto grid">
        <v-img
          height="179"
          width="623"
          :src="require('../../../../assets/AND.png')"
        ></v-img>
        <v-divider></v-divider>
      </v-col>

      <!-- Get Button -->
      <v-col class="grid">
        <v-row>
          <v-col>
            <v-btn elevation="2" icon disabled outlined class="mx-4">{{
              output
            }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <br />

    <v-row justify="center" align="center">
      <v-btn @click="get()" color="primary" elevation="2">get</v-btn>
      <!-- 
      <v-btn
        v-if="output !== null"
        @click="
          get;
          kirim();
        "
        color="primary"
        elevation="2"
        >get</v-btn
      >
      <v-btn
        v-if="output == null"
        @click="
          get;
          kirim();
        "
        color="primary"
        elevation="2"
        disabled
        >get</v-btn
      >
      -->
    </v-row>
    <br />
    <v-divider></v-divider>

    <v-spacer></v-spacer>
    <v-row class="my-10">
      <v-col class="grid">
        <v-sheet height="300" width="500" outlined>
          <img
            height="300"
            width="500"
            :src="dataUrl"
            @error="
              $event.target.src = require('../../../../assets/default-out.jpg')
            "
            class="mx-auto"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "And",
  data() {
    return {
      output: null,
      dataimage64: null,
      state: false,
      input1: "0",
      input2: "0",
      temp1: "0x",
      temp2: "0y",
      //set for indicator input value in light switch // 0 means off
      inDisplay: [null, null, "0", "0", "0", "0", "0", "0"],
      //array for 8bit input  //set null for the array in use
      inArray: [null, null, "0", "0", "0", "0", "0", "0"],
    };
  },
  computed: {
    dataUrl() {
      return (
        "data:image/jpeg;base64," +
        btoa(
          new Uint8Array(this.dataimage64).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )
      );
    },
  },
  async mounted() {
    console.log(this.inArray.toString());
    this.inArray[0] == "0";
    this.inArray[1] == "0";
    this.inDisplay[0] == "0";
    this.inDisplay[1] == "0";
    this.sub_topic = "image64";
    this.$mqtt.on("connect", () => {
      //null refers to unused button, if connected this will set button to zero
      console.log('masuk');
      this.$mqtt.subscribe(this.sub_topic, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success subscribe " + this.sub_topic);
          this.state = "connected " + this.sub_topic;
        }
      });
      this.$mqtt.subscribe("mikro2client_input1active", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success subscribe " + "mikro2client_input1active");
          this.state = "connected" + "pubinputactive1";
        }
      });
      this.$mqtt.subscribe("mikro2client_input2active", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success subscribe " + "mikro2client_input2active");
          this.state = "connected " + "mikro2client_input2active";
        }
      });
      this.$mqtt.subscribe("and-output-active-3", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success subscribe " + "and-output-active-3");
          this.state = "connected " + "and-output-active-3";
        }
      });
    });
    this.$mqtt.on("message", (topic, message) => {
      console.log(message);
      if (topic == "image64") {
        this.dataimage64 = message;
      } else if (topic == "mikro2client_input1active") {
        this.inArray[0] = message;
      } else if (topic == "mikro2client_input2active") {
        this.inArray[1] = message;
      } else if (topic == "and-output-active-3") {
        this.output = message;
      }
    });
  },

  methods: {
    switch1(number) {
      if (this.state) {
        this.input1 = "0";
        this.state = false;
      }
      this.input1 = `${number}`;
      this.temp1 = `${number}x`;
    },
    switch2(number) {
      if (this.state) {
        this.input2 = "0";
        this.state = false;
      }
      this.input2 = `${number}`;
      this.temp2 = `${number}y`;
    },
    get() {
      if (this.temp1 === "0x" && this.temp2 === "0y") {
        //this.output = "0";
        this.$mqtt.publish("and-input-active-1", this.temp1, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
        this.$mqtt.publish("and-input-active-2", this.temp2, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
      }
      if (this.temp1 === "0x" && this.temp2 === "1y") {
        //this.output = "0";
        this.$mqtt.publish("and-input-active-1", this.temp1, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
        this.$mqtt.publish("and-input-active-2", this.temp2, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
      }
      if (this.temp1 === "1x" && this.temp2 === "0y") {
        //this.output = "0";
        this.$mqtt.publish("and-input-active-1", this.temp1, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
        this.$mqtt.publish("and-input-active-2", this.temp2, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
      }
      if (this.temp1 === "1x" && this.temp2 === "1y") {
        //this.output = "1";
        this.$mqtt.publish("and-input-active-1", this.temp1, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
        this.$mqtt.publish("and-input-active-2", this.temp2, (err) => {
          if (err) {
            console.log(err);
            //alert("Berhasil Memberi Minum");
          }
        });
      }
      this.$mqtt.publish('active', 'true', (err) => {
        if(!err){
          this.state = "Berhasil Mengambil ";
          //alert("Berhasil Memberi Minum");
            }
          })
    },
  },
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
