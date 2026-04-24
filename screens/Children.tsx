import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { shared, TEAL } from '../styles/sharedStyles';
import BottomNav from '../components/BottomNav';

const CHILDREN_DATA = [
  { id: '1', name: 'Aarav', balance: 'NPR 2,500', initial: 'A' },
  { id: '2', name: 'Sneha', balance: 'NPR 1,800', initial: 'S' },
];

const ACTIVITY = [
  { id: '1', label: 'School Canteen', amount: '-NPR 150', date: 'Today' },
  { id: '2', label: 'Added by Parent', amount: '+NPR 500', date: 'Yesterday' },
  { id: '3', label: 'Stationery', amount: '-NPR 80', date: 'Apr 15' },
];

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Children = ({ activeTab, setActiveTab }: Props) => (
  <View style={shared.screen}>

    {/* Header */}
    <View style={shared.header}>
      <View style={shared.headerLeft}>
        <View style={shared.avatar}>
          <Text style={shared.avatarText}>U</Text>
        </View>
        <Text style={shared.greeting}>Children</Text>
      </View>
      <View style={shared.headerRight}>
        <TouchableOpacity onPress={() => Alert.alert('Add Child')}>
          <Text style={shared.headerIcon}>➕</Text>
        </TouchableOpacity>
      </View>
    </View>

    <ScrollView style={{ flex: 1 }}>

      {/* Balance Cards */}
      {CHILDREN_DATA.map((child) => (
        <View key={child.id} style={styles.balanceCard}>
          <View style={styles.childInfo}>
            <View style={styles.childAvatar}>
              <Text style={styles.childAvatarText}>{child.initial}</Text>
            </View>
            <View>
              <Text style={styles.childName}>{child.name}</Text>
              <Text style={styles.childBalance}>{child.balance}</Text>
            </View>
          </View>
          <TouchableHighlight
            style={shared.bigBtn}
            underlayColor="#0d7a88"
            onPress={() => Alert.alert(`Add Funds to ${child.name}`)}
          >
            <Text style={shared.bigBtnText}>Add Funds</Text>
          </TouchableHighlight>
        </View>
      ))}

      {/* Activity Feed */}
      <View style={styles.activityCard}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {ACTIVITY.map((item) => (
          <View key={item.id} style={styles.activityRow}>
            <View>
              <Text style={styles.activityLabel}>{item.label}</Text>
              <Text style={styles.activityDate}>{item.date}</Text>
            </View>
            <Text
              style={[
                styles.activityAmount,
                item.amount.startsWith('+') && styles.amountPositive,
              ]}
            >
              {item.amount}
            </Text>
          </View>
        ))}
      </View>

    </ScrollView>

    <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
  </View>
);

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  childInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  childAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#d9f2f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  childAvatarText: { fontSize: 18, fontWeight: 'bold', color: TEAL },
  childName: { fontSize: 15, fontWeight: 'bold', color: '#333' },
  childBalance: { fontSize: 13, color: '#666', marginTop: 2 },

  activityCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 14,
    marginBottom: 24,
  },
  sectionTitle: { fontSize: 13, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  activityLabel: { fontSize: 13, color: '#333' },
  activityDate: { fontSize: 11, color: '#aaa', marginTop: 2 },
  activityAmount: { fontSize: 13, fontWeight: 'bold', color: '#e53935' },
  amountPositive: { color: '#43a047' },
});

export default Children;
