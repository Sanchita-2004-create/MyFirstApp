import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  ScrollView,
  Alert,
  FlatList,
  StyleSheet,
} from 'react-native';
import { shared, TEAL } from './styles/sharedStyles';
import BottomNav from './components/BottomNav';
import Payments from './screens/Payments';
import Children from './screens/Children';
import Setting from './screens/Setting';

const SERVICES = [
  { id: '1', label: 'Topup', icon: '▣' },
  { id: '2', label: 'Electricity', icon: '◎' },
  { id: '3', label: 'Internet', icon: '◈' },
  { id: '4', label: 'Waste', icon: '▦' },
  { id: '5', label: 'Water', icon: '◉' },
  { id: '6', label: 'Flight', icon: '➤' },
  { id: '7', label: 'Government\nPayment', icon: '▤' },
  { id: '8', label: 'Telephone', icon: '◌' },
];

const MyDash = () => {
  const [activeTab, setActiveTab] = useState('Home');

  if (activeTab === 'Payments') {
    return <Payments activeTab={activeTab} setActiveTab={setActiveTab} />;
  }
  if (activeTab === 'Children') {
    return <Children activeTab={activeTab} setActiveTab={setActiveTab} />;
  }
  if (activeTab === 'Setting') {
    return <Setting activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  // Home screen
  return (
    <View style={shared.screen}>

      {/* Header */}
      <View style={shared.header}>
        <View style={shared.headerLeft}>
          <View style={shared.avatar}>
            <Text style={shared.avatarText}>U</Text>
          </View>
          <Text style={shared.greeting}>Hello user!!</Text>
        </View>
        <View style={shared.headerRight}>
          <TouchableOpacity onPress={() => Alert.alert('Notifications')}>
            <Text style={shared.headerIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Search')}>
            <Text style={shared.headerIcon}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scroll}>

        {/* Account Card */}
        <View style={styles.accountCard}>
          <Text style={styles.accountName}>FamLink Account</Text>
          <Text style={styles.accountNumber}>NPR XXXXX</Text>
        </View>

        {/* Quick Action Buttons */}
        <View style={styles.actionRow}>
          <View style={styles.actionBtn}>
            <Button title="Load Money" color={TEAL} onPress={() => Alert.alert('Load Money')} />
          </View>
          <View style={styles.actionBtn}>
            <Button title="Send Money" color={TEAL} onPress={() => Alert.alert('Send Money')} />
          </View>
          <View style={styles.actionBtn}>
            <Button title="Bank Transfer" color={TEAL} onPress={() => Alert.alert('Bank Transfer')} />
          </View>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          <FlatList
            data={SERVICES}
            keyExtractor={(item) => item.id}
            numColumns={4}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.serviceBtn}
                onPress={() => Alert.alert(item.label.replace('\n', ' '))}
              >
                <Text style={styles.serviceIcon}>{item.icon}</Text>
                <Text style={styles.serviceLabel}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* View Statement */}
        <TouchableHighlight
          style={shared.bigBtn}
          underlayColor="#0d7a88"
          onPress={() => Alert.alert('View Statement')}
        >
          <Text style={shared.bigBtnText}>View Statement</Text>
        </TouchableHighlight>

        {/* Info Cards */}
        <TouchableOpacity style={shared.infoCard} onPress={() => Alert.alert('Offers and Promos')}>
          <Text style={shared.infoTitle}>Offers and Promos</Text>
          <Text style={shared.infoLink}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={shared.infoCard} onPress={() => Alert.alert('Help and Support')}>
          <Text style={shared.infoTitle}>Help and Support</Text>
          <Text style={shared.infoLink}>View</Text>
        </TouchableOpacity>

        {/* View Child Wallet */}
        <TouchableHighlight
          style={[shared.bigBtn, { marginBottom: 24 }]}
          underlayColor="#0d7a88"
          onPress={() => setActiveTab('Children')}
        >
          <Text style={shared.bigBtnText}>View Child Wallet</Text>
        </TouchableHighlight>

      </ScrollView>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: { flex: 1 },

  // Account card
  accountCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  accountName: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  accountNumber: { fontSize: 13, color: '#666' },

  // Quick action buttons
  actionRow: { flexDirection: 'row', marginHorizontal: 12, gap: 8, marginBottom: 10 },
  actionBtn: { flex: 1, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' },

  // Services grid
  servicesGrid: {
    backgroundColor: '#d9f2f5',
    marginHorizontal: 12,
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
  },
  serviceBtn: {
    flex: 1,
    backgroundColor: 'white',
    margin: 4,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  serviceIcon: { fontSize: 20, color: '#333', marginBottom: 4 },
  serviceLabel: { fontSize: 9, color: '#333', textAlign: 'center', lineHeight: 12 },
});

export default MyDash;
