import { withAuthorization } from '@/auth';
import { SignUpScreen } from '@/screens/auth/sign-up';

export default withAuthorization(SignUpScreen, 'authorization-screen');
