import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {

  if (!history || !history.length) return  <Text style={styles.title}> Focus on something new today! </Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item} </Text>;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we've focused on: </Text>
      <FlatList data={history} renderItem={renderItem}/>
    </View> 
  );
};


const styles = StyleSheet.create ({
  container: {
    padding: spacing.lg,
    flex: 1,
  },
  title: {
    color: colors.mainFontColor,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingBottom: spacing.md,
    paddingTop: spacing.lg,
    paddingLeft: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.mainFontColor,
    paddingTop: spacing.sm,
  }
})


    