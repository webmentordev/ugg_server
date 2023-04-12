// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
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
