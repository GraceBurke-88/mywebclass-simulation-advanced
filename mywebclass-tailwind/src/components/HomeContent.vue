<script>
export default {
  name: "HomeContent",
};
</script>
<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="md:flex hero-card rounded-lg px-6">
      <div class="p-24">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          <h1 class="hero-title">Revolutionize your teaching</h1>
        </div>
        <a
          href="#"
          class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >Empower your students with cutting-edge software engineering skills.
          Join MyWebClass and discover advanced technologies that will transform
          your teaching and their learning journey.</a
        >
        <div class="mt-2">
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Start Here
          </button>
        </div>
      </div>
      <div class="md:flex-shrink-0">
        <img
          class="md:w-64 md:h-full md:object-cover object-right-top"
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

.hero-title {
  font-size: 2rem;
}

.hero-card {
  width: 90%;
  margin: 5% auto;
  box-shadow: 5px 5px 8px 8px grey;
}
</style>
