<template>
    <section class="bg-dark">
        <div class="max-w-4xl m-auto px-4 py-[150px]">
            <h1 class="text-4xl text-white mb-4">Our Server Rules</h1>
            <div v-for="(rule, index) in rules" :key="index" class="border border-white/10 mb-6 flex">
                <span class=" text-white bg-white/10 p-3 w-fit">
                    {{ index + 1 }}
                </span>
                <p class="p-6 w-full text-light font-light text-s">{{ rule }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
    const rules = ref([]);

    useHead({
        title: "UGG Rust Servers - Rules"
    });

    $fetch('/api/rules').then((result) => {;
        rules.value = result
    });

    
</script>