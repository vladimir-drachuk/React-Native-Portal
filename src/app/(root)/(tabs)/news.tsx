import { useAuth } from '@/auth';
import { Button } from '@/components/atomic/Button';
import { Text } from '@/components/atomic/Text';
import { View } from '@/components/atomic/View';

export default () => {
  const { logIn, isLoading } = useAuth()
  console.log({ isLoading });
  return (
    <View>
      <Text>News</Text>
      <Button
        title="Sign Up"
        color="red"
        onPress={logIn}
      />
    </View>
  )
}