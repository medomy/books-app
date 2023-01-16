import { ListRenderItem, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useSelector } from 'react-redux'
import { RootState } from '../store/store';
import Book from '../types/book';
import BookCard from '../components/bookCard/bookCard';
export default function TabTwoScreen() {
  const favs = useSelector((state: RootState) => state.favourites.favouriteBooks);
  const flatListRenderer: ListRenderItem<Book> = ({ item }) => (<BookCard book={item} />);
  return (
    <View style={styles.container}>
      <FlatList
        data={favs}
        renderItem={flatListRenderer}
        keyExtractor={(b) => b.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
