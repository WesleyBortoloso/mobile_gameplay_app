import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { GuildProps } from "../../components/Appointment";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelect}: Props) {

  const guilds =[
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    }
  ]

  return(
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  )
}