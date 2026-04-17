import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { shared, TEAL } from '../styles/sharedStyles';
import BottomNav from '../components/BottomNav';

const CONFIG_ITEMS = [
  { id: '1', label: 'Personal Information' },
  { id: '2', label: 'Security & PIN' },
  { id: '3', label: 'Notifications' },
  { id: '4', label: 'Language' },
  { id: '5', label: 'Help & Support' },
  { id: '6', label: 'Terms & Conditions' },
];

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Setting = ({ activeTab, setActiveTab }: Props) => (
  <View style={shared.screen}>

    {/* Header */}
    <View style={shared.header}>
      <View style={shared.headerLeft}>
        <View style={shared.avatar}>
          <Text style={shared.avatarText}>U</Text>
        </View>
        <Text style={shared.greeting}>Settings</Text>
      </View>
    </View>

    <ScrollView style={{ flex: 1 }}>

      {/* Profile Header */}
      <View style={styles.profileCard}>
        <View style={styles.profileAvatarWrapper}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>U</Text>
          </View>
          <TouchableOpacity
            style={styles.editBadge}
            onPress={() => Alert.alert('Edit Profile')}
          >
            <Text style={styles.editBadgeText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>FamLink User</Text>
        <Text style={styles.profileEmail}>user@famlink.np</Text>
      </View>

      {/* Configuration List */}
      {CONFIG_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.configRow}
          onPress={() => Alert.alert(item.label)}
        >
          <Text style={styles.configLabel}>{item.label}</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      ))}

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutCard}
        onPress={() =>
          Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', style: 'destructive', onPress: () => {} },
          ])
        }
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>

    <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
  </View>
);

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  profileAvatarWrapper: { position: 'relative', marginBottom: 12 },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#0d7a88',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileAvatarText: { color: 'white', fontSize: 30, fontWeight: 'bold' },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: -4,
    backgroundColor: TEAL,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  editBadgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  profileName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  profileEmail: { fontSize: 13, color: '#666', marginTop: 2 },

  configRow: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 16,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  configLabel: { fontSize: 14, color: '#333' },
  chevron: { fontSize: 20, color: '#aaa' },

  logoutCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  logoutText: { fontSize: 14, color: '#e53935', fontWeight: 'bold' },
});

export default Setting;
