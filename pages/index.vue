<template>
    <header>
        <div class="h-full min-w-full absolute top-0 left-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <div class="relative z-10 h-full w-full flex items-center text-white max-w-4xl m-auto px-4">
            <div class="flex flex-col max-w-3xl">
                <h1 class="text-[7.4rem] leading-[120px] mb-2 540px:text-[20vw] 400px:text-[20vw] 400px:leading-[90px]">Farm<br>Fight<br>Conquer</h1>
                <span class="text-gray-200 text-2xl head">Hope This Doesn't Wake Ya</span>
                <NuxtLink to="steam://connect/194.29.100.247:28015" class="py-2 px-4 inline-block mt-3 bg-rust w-fit text-2xl rounded-sm hover:bg-dark">3X Connect</NuxtLink>
            </div>
        </div>
    </header>
    <section class="bg-dark w-full">
        <div class="max-w-4xl m-auto py-12 px-4 grid grid-cols-2 620px:flex 620px:flex-col gap-6 items-center">
            <div class="py-6 pl-8 border-l border-white/10 620px:border-none 620px:pl-0 620px:order-2">
                <h2 class="text-4xl text-white mb-3 flex items-center">Store</h2>
                <p class="text-white/80 text-sm leading-7 mb-3">Enhance your Rust gaming endeavor with our esteemed store's VIP membership, providing you with exclusive in-game merchandise such as items, weapons, and skins. Elevate your gameplay experience and embark on the ultimate Rust adventure by becoming a VIP member today</p>
                <NuxtLink to="https://app.gpay.io/store/uggrust/14032" rel="nofollow" target="_blank" class="bg-white py-2 px-4 inline-block">Go Shopping</NuxtLink>
            </div>
            <img src="@/assets/images/store.webp" class="w-full 620px:order-1" alt="Rust Scientist">
        </div>
    </section>
</template>