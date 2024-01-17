import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type useStoreTypes = {
    access_token: string
    refresh_token: string
    setAccess_token: (access: string) => void
    setRefresh_token: () => void
}

export const useLoginStore = create( 
    persist<useStoreTypes>(
    (set) => ({
    access_token: "",
    refresh_token: "",
    setAccess_token: (access: string) => set((state: any) => ({access_token: access})), 
    setRefresh_token: () => set((state: any) => ({access_token: state.refresh_token})), 
  }), {
    name: 'credentials'
  })
  )
  