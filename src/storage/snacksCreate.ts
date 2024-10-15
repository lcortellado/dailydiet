import AsyncStorage from "@react-native-async-storage/async-storage"
import { SNACK_LIST } from "./storageConfig"
import { SnackProps } from "@interfaces/interface"
import { snackGetAll } from "./snacksGetAll"

export async function snackCreate(newSnacks: SnackProps) {
   try {
      const storedGroups = await snackGetAll()
console.log(storedGroups, 'storage group')
    const storage = JSON.stringify([...storedGroups, snackCreate])
     await AsyncStorage.setItem(SNACK_LIST, JSON.stringify(storage))
    
   } catch (error) {
    throw error
   } 
}