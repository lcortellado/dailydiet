import AsyncStorage from "@react-native-async-storage/async-storage"
import { SNACK_LIST } from "./storageConfig"
import { SnackProps } from "@interfaces/interface"

export async function snackGetAll() {
   try {
   const storage = await AsyncStorage.getItem(SNACK_LIST)

   const snacksList: SnackProps[] = storage ? JSON.parse(storage) : []
console.log(snacksList, 'snackList')
   return snacksList
    
   } catch (error) {
    throw error
   } 
}