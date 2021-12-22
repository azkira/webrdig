<template>
  <div class="my-2">
    <h1 class="header">Percobaan 1 - Operasi AND</h1>
    <v-row>
      <v-col class="grid">
        <v-row>
          <v-col>
            <v-btn
              v-if="inArray[0] == '1'"
              @click="led1('0')"
              color="primary"
              elevation="2"
              >OFF</v-btn
            >
            <v-btn
              v-if="inArray[0] == '0'"
              @click="led1('1')"
              color="primary"
              elevation="2"
              >ON</v-btn
            >
            <v-btn
              v-if="inArray[0] == null"
              @click="led1('1')"
              color="primary"
              elevation="2"
              disabled
              >ON</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              disabled
              outlined
              icon
              class="mx-4"
              >{{ inArray[0] }}</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              v-if="inArray[1] == '1'"
              @click="led2('0')"
              color="primary"
              elevation="2"
              >OFF</v-btn
            >
            <v-btn
              v-if="inArray[1] == '0'"
              @click="led2('1')"
              color="primary"
              elevation="2"
              >ON</v-btn
            >
            <v-btn
              v-if="inArray[1] == null"
              @click="led1('1')"
              color="primary"
              elevation="2"
              disabled
              >ON</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              disabled
              outlined
              icon
              class="mx-4"
              >{{ inArray[1] }}</v-btn
            >
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
        @click="
          get;
          kirim();
        "
        color="primary"
        elevation="2"
        disabled
        >get</v-btn
      >
    </v-row>
    <br />
    <v-divider></v-divider>

    <v-spacer></v-spacer>
    <v-row class="my-10">
      <v-col class="grid">
        <v-sheet height="300" width="500" outlined>
          <img
            max-height="300"
            max-width="500"
            v-if="dataimage64 != null"
            :src="dataUrl"
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
      //set for indicator input value in light switch // 0 means off
      inDisplay: "0",
      _inDisplay: "0",

      output: null,
      dataimage64: null,
      state: false,

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
    this.sub_topic = "image64";
    this.$mqtt.on("connect", () => {
      //null refers to unused button, if connected this will set button to zero
      this.inArray[0] == "0";
      this.inArray[1] == "0";
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
        this.inArray[0] = "0";
        this.state = false;
      }
      this.inArray[0] = `${number}`;
      this.inDisplay = `${number}`;
    },
    switch2(number) {
      if (this.state) {
        this.inArray[1] = "0";
        this.state = false;
      }
      this.inArray[1] = `${number}`;
      this._inDisplay = `${number}`;
    },
    get() {
      if (this.inDisplay === "0" && this._inDisplay === "0") {
        this.output = "0";
      }
      if (this.inDisplay === "0" && this._inDisplay === "1") {
        this.output = "0";
      }
      if (this.inDisplay === "1" && this._inDisplay === "0") {
        this.output = "0";
      }
      if (this.inDisplay === "1" && this._inDisplay === "1") {
        this.output = "1";
      }
    },
    led1(state) {
      this.$mqtt.publish("and-input-active-1", state, (err) => {
        if (err) {
          console.log(err);
          //alert("Berhasil Memberi Minum");
        }
      });
    },
    led2(state) {
      this.$mqtt.publish("and-input-active-2", state, (err) => {
        if (err) {
          console.log(err);
          //alert("Berhasil Memberi Minum");
        }
      });
    },
    kirim() {
      this.$mqtt.publish("active", "true", (err) => {
        if (!err) {
          this.state = "Berhasil Mengambil ";
          //alert("Berhasil Memberi Minum");
        }
      });
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
