import { Button } from '@/components/atomic/Button';
import { Text } from '@/components/atomic/Text';
import { View } from '@/components/atomic/View';
import { useAuth } from '@/auth';

export default () => {
  const { signUp, isLoading } = useAuth();
  
  const handleSignUp = async () => {
    await signUp('Denis2@gmail.com', '123456789');
  }

  return (
    <View>
      <Text>Sign Up</Text>
      <Button
        title="Sign Up"
        color="red"
        onPress={handleSignUp}
      />
    </View>
  )
}
