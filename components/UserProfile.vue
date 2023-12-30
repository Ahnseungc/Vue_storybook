<template>
  <div>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async fetchUser() {
      const response = await axios.get("/users/1");
      this.user = response.data;
    },
  },

  //컴포넌트 생성되지 마자 실행
  created() {
    this.fetchUser();
  },
};
</script>
