<template>
    <nav class="w-full fixed top-4 left-0 z-50 px-4">
        <div class="max-w-4xl border border-white/10 flex items-center p-3 px-4 rounded-lg m-auto bg-dark bg-opacity-50 backdrop-blur-md justify-between">
            <NuxtLink to="/"><img src="@/assets/images/logo.png" width="40" alt="Rust logo"></NuxtLink>
            <ul class="flex items-center text-white/80">
                <li><NuxtLink class="text-lg ml-9" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="text-lg ml-9" to="/rules">Rules</NuxtLink></li>
                <li><NuxtLink class="text-lg ml-9" to="/stats">Stats</NuxtLink></li>
                <li><NuxtLink class="text-lg ml-5 bg-rust py-2 px-5 rounded-sm" to="https://app.gpay.io/store/uggrust/14032" target="_blank" rel="nofollow">Store</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>