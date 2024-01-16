import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type useStoreTypes = {
    access_token: string
    name: string
    refresh_token: string
    setAccess_token: (access: string) => void
    setRefresh_token: () => void
    newName: (name: string) => void
}

export const useLoginStore = create<useStoreTypes>()((set) => ({
    access_token: "",
    name: 'No name',
    refresh_token: "",
    setAccess_token: (access: string) => set((state: any) => ({access_token: access})), 
    setRefresh_token: () => set((state: any) => ({access_token: state.refresh_token})), 
    newName: (name: string) => {set( (state) => ({name}))},
  }))
  