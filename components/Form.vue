<template>
  <div>
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic" v-if="errorMsg">
            {{ errorMsg }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            @click.prevent="onSubmit"
          >
            <span v-if="isLoading">Loading...</span>
            <span v-else>Sign In</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const auth = useAuth();
const errorMsg = ref(null);
const password = ref("");
const isLoading = ref(false);
const url = "https://reqres.in/api/login";
const onSubmit = async () => {
  if (isLoading.value) {
    return;
  } else {
    isLoading.value = true;

    const form = {
      email: email.value,
      password: password.value,
    };
    const { data, error } = await useFetch(url, {
      method: "post",
      body: form,
    });

    isLoading.value = false;

    if (error.value) {
      errorMsg.value = error.value.data.error;
      return;
    }

    auth.value.isAuthenticated = true;
    navigateTo("/");
  }
};
</script>
