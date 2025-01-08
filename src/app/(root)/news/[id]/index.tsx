import { withAuthorization } from '@/auth';
import { Text } from '@/components/atomic/text';

export default withAuthorization(() => <Text>News</Text>);