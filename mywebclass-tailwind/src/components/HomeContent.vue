<script>
export default {
  name: "HomeContent",
};
</script>
<template>
  <main>
    <div class="container my-5">
      <div
        class="row p-4 pb-0 pe-lg-0 pt-lg-0 items-center rounded-3 border shadow-lg"
      >
        <div class="col-lg-7 p-3 p-lg-3 pt-lg-1">
          <h1 class="text-3xl font-bold leading-tight">
            Revolutionize your teaching
          </h1>
          <p class="text-xl leading-relaxed">
            Empower your students with cutting-edge software engineering skills.
            Join MyWebClass and discover advanced technologies that will
            transform your teaching and their learning journey.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <button
              type="button"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg"
            >
              Start Here
            </button>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg img-fluid"
            src="../assets/teacher.gif"
            alt="a teacher with students"
            width="720"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Add Tailwind CSS styles */
</style>
