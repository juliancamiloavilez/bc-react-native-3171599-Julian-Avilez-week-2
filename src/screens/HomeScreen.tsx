import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListRenderItem,
} from 'react-native';

import { useCallback, useMemo, useState } from 'react';

import { arcadeMachines } from '../data/mockData';
import { ArcadeMachine } from '../types';

import { ItemCard } from '../components/ItemCard';

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '../theme';

export const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const filteredMachines = useMemo(() => {
    return arcadeMachines.filter((machine) =>
      machine.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const renderItem: ListRenderItem<ArcadeMachine> =
    useCallback(({ item }) => {
      return <ItemCard item={item} />;
    }, []);

  const emptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No se encontraron máquinas 🎮
        </Text>
      </View>
    );
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >
      <Text style={styles.header}>
        🎮 Sala Arcade
      </Text>

      <TextInput
        placeholder="Buscar máquina..."
        placeholderTextColor={COLORS.muted}
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <FlatList
        data={filteredMachines}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={emptyComponent}
        ItemSeparatorComponent={() => (
          <View style={{ height: SPACING.md }} />
        )}
        contentContainerStyle={styles.list}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
    paddingHorizontal: SPACING.md,
  },

  header: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.title,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },

  input: {
    backgroundColor: COLORS.card,
    color: COLORS.text,
    borderRadius: 10,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },

  list: {
    paddingBottom: SPACING.lg,
  },

  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },

  emptyText: {
    color: COLORS.muted,
    fontSize: TYPOGRAPHY.body,
  },
});