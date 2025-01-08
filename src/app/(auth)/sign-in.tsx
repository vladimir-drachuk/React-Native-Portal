import { withAuthorization } from '@/auth';
import { SignInScreen } from '@/screens/auth/sign-in';

export default withAuthorization(SignInScreen, 'authorization-screen');
