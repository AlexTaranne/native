import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView >
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
      <Image
  source={require('@/assets/images/pokeball.png')} 
  style={{ width: 24, height: 24, marginRight: 8 }}
/>

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
  },
  content: {

    marginLeft: 24,
    alignItems:"center"
  },
  
});
