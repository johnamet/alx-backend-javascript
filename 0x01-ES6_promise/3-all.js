import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photoRes, userRes] = values;
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
