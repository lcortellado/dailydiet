import AsyncStorage from "@react-native-async-storage/async-storage"
import { SNACK_LIST } from "./storageConfig"
import { SnackProps } from "@interfaces/interface"
import { snackGetAll } from "./snacksGetAll"

export async function snackCreate(newSnacks: SnackProps) {
   try {
      const storedGroups = await snackGetAll()

      const storage = JSON.stringify([...storedGroups, newSnacks])
      
     await AsyncStorage.setItem(SNACK_LIST, storage)
    
   } catch (error) {
    throw error
   } 
}