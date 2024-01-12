import {create} from 'zustand'

export const useStore = create((set: any) => ({
    access_token: "",
    refresh_token: "",
    setAccess_token: (access: string) => set((state: any) => ({access_token: access})), 
    setRefresh_token: () => set((state: any) => ({access_token: state.refresh_token})), 
}))