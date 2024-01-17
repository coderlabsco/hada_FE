import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type useStoreTypes = {
    access_token: string
    refresh_token: string
    name: string
    email: string
    setAccess_token: (access: string) => void
    setRefresh_token: (refresh: string) => void
    setName: (name: string) => void
    setEmail: (email: string) => void
}

export const useLoginStore = create( 
    persist<useStoreTypes>(
    (set) => ({
    access_token: "",
    refresh_token: "",
    name: "",
    email: "",
    setAccess_token: (access: string) => set((state: any) => ({access_token: access})), 
    setRefresh_token: (refresh: string) => set((state: any) => ({refresh_token: refresh})), 
    setName: (name: string) => set((state: any) => ({name: name})),
    setEmail: (email: string) => set((state: any) => ({email: email})),
  }), {
    name: 'credentials',
    skipHydration: true
  })
  )
  