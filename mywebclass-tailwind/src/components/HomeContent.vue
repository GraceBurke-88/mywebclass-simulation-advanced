<script>
export default {
  name: "HomeContent",
};
</script>
<template>
  <div class="h-full bg-white rounded-lg shadow-md overflow-hidden">
    <div class="md:flex hero-card rounded-lg">
      <div class="flex-initial w-4/6 p-24">
        <div class="tracking-wide text-black-500 font-bold">
          <h1 class="text-5xl hero-title">Revolutionize your teaching</h1>
        </div>
        <a
          href="#"
          class="block mt-4 md:w-4/6 leading-7 text-lg font-medium text-black hover:underline"
          >Empower your students with cutting-edge software engineering skills.
          Join MyWebClass and discover advanced technologies that will transform
          your teaching and their learning journey.</a
        >
        <div class="mt-4">
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Start Here
          </button>
        </div>
      </div>
      <div class="w-2/6">
        <img
          class="object-cover"
          src="../assets/teacher.gif"
          alt="a teacher with students"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
.hero-card {
  width: 90%;
  margin: 5% auto;
  box-shadow: 5px 5px 8px 8px lightgrey;
}
</style>
