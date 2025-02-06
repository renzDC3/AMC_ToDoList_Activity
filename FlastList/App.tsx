import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Taking Bath',
  },
  {
    id: '2',
    title: 'Coffee and Breakfast',
  },
  {
    id: '3',
    title: 'Toothbrush',
  },
  {
    id: '4',
    title: 'Wear shoes',
  },
  {
    id: '5',
    title: 'Larga',
  },
];

const DATA1 = [
  {
    id: '6',
    title: 'Lunch',
  },
  {
    id: '7',
    title: 'Watching TV',
  },
  {
    id: '8',
    title: 'Taking Rest',
  },
  {
    id: '9',
    title: 'chat',
  },
  {
    id: '10',
    title: 'Larga',
  },
];
const DATA2 = [
  {
    id: '11',
    title: 'Meryenda',
  },
  {
    id: '12',
    title: 'learning guitar',
  },
  {
    id: '13',
    title: 'listening music',
  },
  {
    id: '14',
    title: 'study',
  },
  {
    id: '15',
    title: 'taking rest',
  },
];
const DATA3 = [
  {
    id: '16',
    title: 'Dinner',
  },
  {
    id: '17',
    title: 'Toothbrush',
  },
  {
    id: '18',
    title: 'Playing online games',
  },
  {
    id: '19',
    title: 'Listening music',
  },
  {
    id: '20',
    title: 'Sleep',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Morning</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />

        <Text style={styles.heading}>Noon</Text>
        <FlatList
          data={DATA1}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />

        <Text style={styles.heading}>After Noon</Text>
        <FlatList
          data={DATA2}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <Text style={styles.heading}>Evening</Text>
        <FlatList
          data={DATA3}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 36,
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
