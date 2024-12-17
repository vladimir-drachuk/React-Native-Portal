import { useAuth } from '@/auth';
import { Button } from '@/components/atomic/button';
import { Text } from '@/components/atomic/text';
import { View } from '@/components/atomic/view';
import { useGetUserQuery } from '@/rest/query';

export default () => {
  const { logIn, isLoading } = useAuth();
  const { data } = useGetUserQuery();
  
  console.log({ data });
  return (
    <View>
      <Text>News</Text>
      <Button
        title="Sign Up"
        color="red"
        onPress={async () => {
          await logIn()
        }}
      />
    </View>
  )
}