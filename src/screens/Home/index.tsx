import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native'
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { FlatList } from "react-native-gesture-handler";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { useNavigation } from "@react-navigation/native";

export function Home() {

  const navigation = useNavigation()

  const [ category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  return(
    <View>
      <View style={styles.header}>
      <Profile />
      <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader 
            title='Partidas Agendadas'
            subtitle='Total 6'
          />
          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({item }) => (
              <Appointment 
                data={item} 
                onPress={handleAppointmentDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
    </View>
  )
}