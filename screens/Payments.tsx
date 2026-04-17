import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import { shared } from '../styles/sharedStyles';
import BottomNav from '../components/BottomNav';

const PAYMENT_CATEGORIES = [
  { id: '1', label: 'Electricity', icon: '⚡' },
  { id: '2', label: 'Water', icon: '💧' },
  { id: '3', label: 'Internet', icon: '📶' },
  { id: '4', label: 'Telephone', icon: '📞' },
  { id: '5', label: 'TV Cable', icon: '📺' },
  { id: '6', label: 'Insurance', icon: '🛡' },
  { id: '7', label: 'EMI', icon: '🏦' },
  { id: '8', label: 'More', icon: '⊕' },
];

const RECENTLY_PAID = [
  { id: '1', name: 'NEA', icon: '⚡' },
  { id: '2', name: 'Worldlink', icon: '📶' },
  { id: '3', name: 'KUKL', icon: '💧' },
  { id: '4', name: 'NTC', icon: '📞' },
];

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Payments = ({ activeTab, setActiveTab }: Props) => (
  <View style={shared.screen}>

    {/* Header */}
    <View style={shared.header}>
      <View style={shared.headerLeft}>
        <View style={shared.avatar}>
          <Text style={shared.avatarText}>U</Text>
        </View>
        <Text style={shared.greeting}>Payments</Text>
      </View>
      <View style={shared.headerRight}>
        <TouchableOpacity onPress={() => Alert.alert('Notifications')}>
          <Text style={shared.headerIcon}>🔔</Text>
        </TouchableOpacity>
      </View>
    </View>

    <ScrollView style={{ flex: 1 }}>

      {/* Search Bar */}
      <View style={styles.searchCard}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search service"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Payment Categories */}
      <View style={styles.categoryGrid}>
        <Text style={styles.sectionTitle}>Pay Bills</Text>
        <FlatList
          data={PAYMENT_CATEGORIES}
          keyExtractor={(item) => item.id}
          numColumns={4}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => Alert.alert(item.label)}
            >
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Recently Paid */}
      <View style={styles.recentCard}>
        <Text style={styles.sectionTitle}>Recently Paid</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {RECENTLY_PAID.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.recentItem}
              onPress={() => Alert.alert(item.name)}
            >
              <View style={styles.recentAvatar}>
                <Text style={{ fontSize: 20 }}>{item.icon}</Text>
              </View>
              <Text style={styles.recentLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

    </ScrollView>

    <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
  </View>
);

const styles = StyleSheet.create({
  searchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#333' },

  categoryGrid: {
    backgroundColor: '#d9f2f5',
    marginHorizontal: 12,
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  categoryBtn: {
    flex: 1,
    backgroundColor: 'white',
    margin: 4,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  categoryIcon: { fontSize: 20, marginBottom: 4 },
  categoryLabel: { fontSize: 9, color: '#333', textAlign: 'center' },

  recentCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 14,
    marginBottom: 24,
  },
  recentItem: { alignItems: 'center', marginRight: 16 },
  recentAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#d9f2f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  recentLabel: { fontSize: 11, color: '#333' },
});

export default Payments;
