import { defineStore } from 'pinia'

export const AuthStore = defineStore('auth', {
    state: () => ({
        account: null as string | null,
        authed: false as boolean,
    }),

    actions: {
        login(account: string) {
            this.account = account;
            this.authed = true;
        },
        logout() {
            this.account = null;
            this.authed = false;
        }
    }
})
