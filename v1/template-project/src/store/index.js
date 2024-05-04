import { createStore } from 'vuex'

import { appModule } from '@/store/modules/app-module.js'
import { userModule } from '@/store/modules/user-module.js'
import { accountModule } from '@/store/modules/account-module.js'
import { mainModule } from "@/store/modules/main-module.js"
import { booksModule } from "@/store/modules/books-module.js"

const store = createStore({
    modules: {
        appModule,
        userModule,
        accountModule,
        mainModule,
        booksModule
    }
})

store.dispatch('userModule/fetch')

store.subscribe((mutation) => {
    if (mutation.type.startsWith('userModule/')) {
        store.dispatch('userModule/update')
    }
})

export default store
