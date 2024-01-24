import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
export const Loading: FC = () => {
  const { styles, theme } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={theme.colors.brand['purple-dark']} />
    </View>
  )
}

