<template>
  <div>
    <p class="text-3xl font-bold underline">{{ message }}</p>
    <button @click="reverse">메시지 뒤집기</button>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "안녕하세요! Vue.js",
    };
  },

  methods: {
    reverse: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>
