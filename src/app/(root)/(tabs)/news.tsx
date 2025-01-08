import { withAuthorization } from '@/auth';
import { NewsScreen } from '@/screens/root/news/news';

export default withAuthorization(NewsScreen);