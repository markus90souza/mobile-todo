import  { FC } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';

export const Home: FC = () => {
  const { styles } = useStyles(stylesheet)
  return <View style={styles.container}  />;
}
