import { StyleSheet, ActivityIndicator, FlatList, ListRenderItem } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useGetBooksBySearchQuery } from '../store/api_slices/getSearchedBooks';
import { useState } from 'react';
import SearchForm from '../components/searchForm/searchForm';
import TabsContainer from '../components/tabsContainer/tabsContainer';
import NoSearchYet from '../components/notSearchedYet/noSearchYet';
import Book from '../types/book';
import BookCard from '../components/bookCard/bookCard';
import { convertGoogle, convertOpenLibrary } from '../utils/convertData';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [chosenLibrary, setChosenLibrary] = useState<"google" | "open">("google");
  const { data, error, isLoading } = useGetBooksBySearchQuery(searchQuery);
  console.log(data);
  console.log(error);
  console.log(isLoading);
  const setSearchVal = (val: string) => {
    setSearchQuery(val);
  }
  const setLibrary = (val: "google" | "open") => {
    setChosenLibrary(val);
  }
  const flatlistRenderer: ListRenderItem<Book> = ({ item }) => (<BookCard book={item} />);
  return (
    <View style={styles.container}>
      <SearchForm getSearchVal={setSearchVal} />
      <TabsContainer transferLibrary={setLibrary} />
      {searchQuery === "" ? <NoSearchYet /> :
        data.errors && searchQuery !== "" ? <ActivityIndicator style={styles.loadingSpinner} /> :
          <FlatList
            data={chosenLibrary === "google" ? convertGoogle(data.data) : convertOpenLibrary(data.data)}
            renderItem={flatlistRenderer}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false} />
      }
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
  loadingSpinner: {
    marginTop: 6,
    width: 25
  }
});
