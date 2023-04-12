<template>
    <section class="w-full">
        <div class="max-w-4xl px-4 py-12 m-auto mt-[60px]">
            <div class="w-full" v-if="!pending">
                <h2 class="text-gray-300 text-4xl border-b border-white/10 py-2 mb-6">Our Servers Stats</h2>
                <div class="grid grid-cols-2 gap-6">
                    <div class="rounded-lg overflow-hidden relative">
                        <NuxtLink to="steam://connect/194.29.100.247:28015" rel="nofollow" class="py-1 px-3 text-white rounded-sm bg-rust absolute left-2 top-2 z-10">Connect</NuxtLink>
                        <span  class="absolute right-2 top-0 z-10"><img :src='`https://www.countryflagicons.com/FLAT/64/${stats.attributes.country}.png`' width="40" alt="Country Icons"></span>
                        <nuxt-img width="500" quality="30" :src="stats.attributes.details.rust_headerimage" />
                        <div class="p-4 bg-white/10">
                            <h2 class="text-white text-2xl mb-2">{{ stats.attributes.name }}</h2>
                            <div class="w-full h-[25px] rounded-lg bg-white/10 overflow-hidden relative mb-4">
                                <div class="h-full bg-rust rounded-lg" :style="{ width: `${stats.attributes.players / stats.attributes.maxPlayers}%` }"></div>
                                <span class="absolute left-[45%] top-0 text-white z-10">{{ stats.attributes.players }} / {{ stats.attributes.maxPlayers }}</span>
                            </div>
                            <div class="flex justify-around text-white p-3 bg-white/10 rounded-lg">
                                <h3 class="text-xl">LastWipe:<span class="mx-3">25/12</span></h3>
                                <span>|</span>
                                <h3 class="text-xl">NextWipe:<span class="mx-3">25/12</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p v-else class="text-center text-white mb-6 flex items-center justify-center"><img src="https://api.iconify.design/svg-spinners:ring-resize.svg?color=%23ffffff" width="30" alt="Loading Icon"> <span class="text-lg ml-3">Loading stats...</span></p>
        </div>
    </section>
</template>

<script setup>
    const stats = ref({});
    const pending = ref(true);
    useFetch('/api/stats').then((result) => {
        stats.value = result.data.value.data;
        pending.value = false;
    });
</script>