// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image-edge'
    ],
    image: {
        domains: [
            'discordapp.com',
            'cdn.discordapp.com'
        ]  
    },
    app: {
        head: {
            title: "UGG Rust Servers",
            meta: [
                {
                    name: "description",
                    content: "UGG Rust Servers"
                }
            ],
            link: [
                {
                    rel: "shortcut icon",
                    href: "/favicon.png"
                }
            ]
        }
    }
})
