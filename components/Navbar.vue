<template>
    <nav class="w-full fixed top-4 left-0 z-50 px-4">
        <div class="max-w-4xl border border-white/10 flex items-center p-3 px-4 rounded-lg m-auto bg-dark bg-opacity-50 backdrop-blur-md justify-between">
            <NuxtLink to="/"><img src="@/assets/images/logo.png" width="60" class="rounded-lg" alt="Rust logo"></NuxtLink>
            <ul class="flex items-center text-white/80 540px:hidden">
                <li><NuxtLink class="text-lg ml-9" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="text-lg ml-9" to="/rules">Rules</NuxtLink></li>
                <li><NuxtLink class="text-lg ml-9" to="/stats">Stats</NuxtLink></li>
                <li><NuxtLink class="text-lg ml-5 bg-rust py-2 px-5 rounded-sm" to="steam://connect/194.29.100.247:28015">Connect</NuxtLink></li>
            </ul>
            <div class="hidden 540px:flex" @click="toggle = !toggle">
                <img src="https://api.iconify.design/tabler:align-right.svg?color=%23ffffff" width="45" alt="Burger Icon">
            </div>
        </div>
    </nav>
    <div @click.self="toggle = !toggle" v-if="toggle" class="fixed 540px:flex top-0 left-0 bg-dark bg-opacity-80 backdrop-blur-lg flex items-center justify-center w-full h-screen z-40">
        <ul class="flex flex-col text-center">
            <li class="my-3"><NuxtLink class="text-lg text-white" to="/">Home</NuxtLink></li>
            <li class="my-3"><NuxtLink class="text-lg text-white" to="/rules">Rules</NuxtLink></li>
            <li class="my-3"><NuxtLink class="text-lg text-white" to="/stats">Stats</NuxtLink></li>
            <li class="my-3"><NuxtLink class="text-lg text-white bg-rust py-2 px-5 rounded-sm" to="steam://connect/194.29.100.247:28015">Connect</NuxtLink></li>
        </ul>
    </div>
    
</template>

<script setup>
    const toggle = ref(false)
</script>