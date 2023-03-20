import { getApps, initializeApp } from 'firebase/app';
import getConfig from 'next/config';
import { Auth, getAuth } from 'firebase/auth';

const { publicRuntimeConfig } = getConfig();

const FirebaseCredential = {
  apiKey: publicRuntimeConfig.apiKey,
  authDomain: publicRuntimeConfig.authDomain,
  projectId: publicRuntimeConfig.projectId,
};

export default class FirebaseClient {
  private static instance: FirebaseClient;

  private auth: Auth;

  public constructor() {
    const apps = getApps();
    if (apps.length === 0) {
      console.info('firebase client init start');
      initializeApp(FirebaseCredential);
    }
    this.auth = getAuth();
    console.info('firebase auth');
  }

  public static getInstance(): FirebaseClient {
    if (
      FirebaseClient.instance === undefined ||
      FirebaseClient.instance === null
    ) {
      FirebaseClient.instance = new FirebaseClient();
    }
    return FirebaseClient.instance;
  }

  public get Auth(): Auth {
    return this.auth;
  }
}
