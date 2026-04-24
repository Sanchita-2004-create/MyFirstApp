import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import AuthScreen from './screens/AuthScreen';
import MyDash from './MyDash';
import { TEAL } from './styles/sharedStyles';

const RootApp = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: TEAL }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (!user) {
    return <AuthScreen onAuthSuccess={() => {}} />;
  }

  return <MyDash user={user} onLogout={() => setUser(null)} />;
};

export default RootApp;
