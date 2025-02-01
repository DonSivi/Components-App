import { Href, router } from 'expo-router'
import { View, Pressable } from 'react-native'
import ThemedText from '../shared/ThemedText'
import { FontAwesome } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props {
    title: string
    icon: keyof typeof FontAwesome.glyphMap
    name: string
    isFirst?: boolean
    isLast?: boolean
}

const MenuItem = ({ title, icon, name, isFirst=false, isLast=false }:Props) => {
    const primaryColor = useThemeColor({}, 'primary')
    const [routeName] = name.split('/')

  return (
    <Pressable 
        onPress={() => router.push(routeName as Href)} 
        className='bg-white dark:bg-black/15 px-5 py-2'
        style={{
            ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
            ...(isLast && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingBottom: 10 }),
        }}
    >
        <View className='flex-row items-center'>
            <FontAwesome name={icon} size={30} color={primaryColor} className="mr-5" />
            <ThemedText type='h2'>{ title }</ThemedText>
        </View>
      
    </Pressable>
  )
}

export default MenuItem