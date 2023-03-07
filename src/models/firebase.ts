import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const FirebaseCredential = {
  apiKey: publicRuntimeConfig.apiKey,
  authDomain: publicRuntimeConfig.authDomain,
  projectId: publicRuntimeConfig.projectId,
};
