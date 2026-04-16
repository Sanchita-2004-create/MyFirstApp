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
  StyleSheet
} from 'react-native';


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

const TEAL = '#1A9BAB';

const MyDash = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.screen}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>
          <Text style={styles.greeting}>Hello user!!</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => Alert.alert('Notifications')}>
            <Text style={styles.headerIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Search')}>
            <Text style={styles.headerIcon}>🔍</Text>
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
          style={styles.bigBtn}
          underlayColor="#0d7a88"
          onPress={() => Alert.alert('View Statement')}
        >
          <Text style={styles.bigBtnText}>View Statement</Text>
        </TouchableHighlight>

        {/* Info Cards */}
        <TouchableOpacity style={styles.infoCard} onPress={() => Alert.alert('Offers and Promos')}>
          <Text style={styles.infoTitle}>Offers and Promos</Text>
          <Text style={styles.infoLink}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoCard} onPress={() => Alert.alert('Help and Support')}>
          <Text style={styles.infoTitle}>Help and Support</Text>
          <Text style={styles.infoLink}>View</Text>
        </TouchableOpacity>

        {/* View Child Wallet */}
        <TouchableHighlight
          style={[styles.bigBtn, { marginBottom: 24 }]}
          underlayColor="#0d7a88"
          onPress={() => Alert.alert('View Child Wallet')}
        >
          <Text style={styles.bigBtnText}>View Child Wallet</Text>
        </TouchableHighlight>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: '🏠' },
          { name: 'Payments', icon: '📄' },
          { name: 'QR', icon: '⊞' },
          { name: 'Children', icon: '👶' },
          { name: 'Setting', icon: '⚙️' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={[styles.navBtn, tab.name === 'QR' && styles.qrBtn]}
            onPress={() => setActiveTab(tab.name)}
          >
            <Text style={styles.navIcon}>{tab.icon}</Text>
            <Text style={[styles.navLabel, activeTab === tab.name && styles.navLabelActive]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: TEAL },
  scroll: { flex: 1 },

  // Header
  header: { 
    marginTop: 55, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingBottom: 12 
  },

  headerLeft: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8 
  },

  avatar: { 
    width: 34, 
    height: 34, 
    borderRadius: 17, 
    backgroundColor: '#0d7a88', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  avatarText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  greeting: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },

  headerRight: { 
    flexDirection: 'row', 
    gap: 14 
  },

  headerIcon: { 
    fontSize: 20, 
    color: 'white' 
  },

  // Account card
  accountCard: { 
    backgroundColor: 'white', 
    marginHorizontal: 12, 
    borderRadius: 10, 
    padding: 12, 
    marginBottom: 10 
  },

  accountName: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#333' 
  },

  accountNumber: { 
    fontSize: 13, 
    color: '#666' 
  },

  // Quick action buttons
  actionRow: { flexDirection: 'row', 
  marginHorizontal: 12, 
  gap: 8, 
  marginBottom: 10 
},

  actionBtn: { 
    flex: 1, 
    backgroundColor: 'white', 
    borderRadius: 10, 
    overflow: 'hidden' 
  },

  // Services grid
  servicesGrid: { 
    backgroundColor: '#d9f2f5', 
    marginHorizontal: 12, 
    borderRadius: 14, 
    padding: 10, 
    marginBottom: 10 
  },

  serviceBtn: { 
    flex: 1, 
    backgroundColor: 'white', 
    margin: 4,
    borderRadius: 10, 
    paddingVertical: 10, 
    alignItems: 'center' 
  },

  serviceIcon: { 
    fontSize: 20, 
    color: '#333', 
    marginBottom: 4 
  },

  serviceLabel: { 
    fontSize: 9, 
    color: '#333', 
    textAlign: 'center', 
    lineHeight: 12 
  },

  // Big buttons
  bigBtn: { 
    backgroundColor: TEAL, 
    marginHorizontal: 12, 
    borderRadius: 10, 
    padding: 16, 
    alignItems: 'center', 
    marginBottom: 10, 
    borderWidth: 2, 
    borderColor: 'white' 
  },
  bigBtnText: { 
    color: 'white', 
    fontSize: 15, 
    fontWeight: 'bold' 
  },

  // Info cards
  infoCard: { 
    backgroundColor: 'white', 
    marginHorizontal: 12, 
    borderRadius: 10, 
    padding: 14, 
    marginBottom: 10 
  },

  infoTitle: { 
    fontSize: 13, 
    color: TEAL, 
    fontWeight: 'bold', 
    marginBottom: 2 
  },

  infoLink: { 
    fontSize: 14, 
    color: '#333' 
  },

  // Bottom nav
  bottomNav: { 
    backgroundColor: 'white', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    paddingVertical: 10, 
    borderTopWidth: 1, 
    borderTopColor: '#eee' 
  },

  navBtn: { 
    alignItems: 'center' 
  },

  qrBtn: { 
    backgroundColor: 'white', 
    borderRadius: 30, 
    borderWidth: 2, 
    borderColor: '#eee', 
    width: 52, 
    height: 52, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: -20 
  },

  navIcon: { 
    fontSize: 20 
  },

  navLabel: { 
    fontSize: 10, 
    color: '#aaa', 
    marginTop: 2 
  },

  navLabelActive: { 
    color: TEAL, 
    fontWeight: 'bold' 
  },
  
});

export default MyDash;