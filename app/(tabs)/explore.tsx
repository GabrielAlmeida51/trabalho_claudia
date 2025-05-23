import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Regras</ThemedText>
      </ThemedView>

      <ThemedView style={styles.textContainer}>
        <ThemedText>
          Bem-vindo à tela de regras do contador inteligente! Aqui está tudo que você precisa saber para usá-lo:
        </ThemedText>

        <ThemedText style={styles.spacing}>
          📌 O contador começa no número 0 por padrão. Você pode aumentá-lo ou diminuí-lo clicando nos botões correspondentes.
        </ThemedText>

        <ThemedText style={styles.spacing}>
          ✅ Ao atingir um número múltiplo de 10 (como 10, 20, 30...), o sistema exibirá uma mensagem especial de paz e harmonia. Isso serve como uma forma de incentivo e reflexão positiva durante o uso.
        </ThemedText>

        <ThemedText style={styles.spacing}>
          🔁 O botão de "Resetar" zera o valor do contador a qualquer momento, permitindo que você recomece do início.
        </ThemedText>

        <ThemedText style={styles.spacing}>
          🎯 Use o contador para se divertir, se organizar, registrar cliques ou até como ferramenta de foco! Cada número alcançado representa um pequeno progresso.
        </ThemedText>

        <ThemedText style={styles.spacing}>
          💡 Dica: tente atingir múltiplos de 10 para ver mensagens motivacionais e manter sua jornada mais inspiradora!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    gap: 10,
  },
  spacing: {
    marginTop: 12,
  },
});
