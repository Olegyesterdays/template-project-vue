import { createStore } from 'vuex'

import { appModule } from '@/store/modules/app-module.js'
import { userModule } from '@/store/modules/user-module.js'
import { voteModule } from '@/store/modules/vote-module.js'
import { accountModule } from '@/store/modules/account-module.js'
import { listUsersModule } from '@/store/modules/list-users-module.js'
import { statisticsModule } from '@/store/modules/statistics-module.js'
import { createVoteModule } from '@/store/modules/create-vote-module.js'
import { userProfileModule } from '@/store/modules/user-profile-module.js'

const store = createStore({
  modules: {
    appModule,
    userModule,
    voteModule,
    accountModule,
    listUsersModule,
    statisticsModule,
    createVoteModule,
    userProfileModule
  }
})

store.dispatch('userModule/fetch')
store.dispatch('voteModule/fetch')

store.subscribe((mutation) => {
  if (mutation.type.startsWith('userModule/')) {
    store.dispatch('userModule/update')
  }

  if (mutation.type.startsWith('voteModule/')) {
    store.dispatch('voteModule/update')
  }
})

export default store
