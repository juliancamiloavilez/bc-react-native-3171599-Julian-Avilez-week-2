import { View, Text, StyleSheet } from 'react-native';

import { ArcadeMachine } from '../types';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

interface Props {
  item: ArcadeMachine;
}

export const ItemCard = ({ item }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>

      <Text style={styles.text}>
        🎮 Juego: {item.game}
      </Text>

      <Text style={styles.text}>
        🪙 Tokens: {item.tokensRequired}
      </Text>

      <Text style={styles.text}>
        👥 Jugadores: {item.players}
      </Text>

      <Text
        style={[
          styles.status,
          {
            color:
              item.status === 'Disponible'
                ? COLORS.success
                : COLORS.danger,
          },
        ]}
      >
        {item.status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 12,
  },

  title: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.subtitle,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },

  text: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
    marginBottom: SPACING.xs,
  },

  status: {
    marginTop: SPACING.sm,
    fontWeight: 'bold',
  },
});