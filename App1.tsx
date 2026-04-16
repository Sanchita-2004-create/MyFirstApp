import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';

const SERVICES = [
  { name: 'Topup', icon: require('./assets/topup.png') },
  { name: 'Electricity', icon: require('./assets/electricity.png') },
  { name: 'Internet', icon: require('./assets/internet.png') },
  { name: 'Waste', icon: require('./assets/waste.png') },
  { name: 'Water', icon: require('./assets/water.png') },
  { name: 'Flight', icon: require('./assets/flight.png') },
  { name: 'Government Payment', icon: require('./assets/government.png') },
  { name: 'Telephone', icon: require('./assets/telephone.png') },
];

const QUICK_ACTIONS = ['Load Money', 'Send Money', 'Bank Transfer'];

const MyDash = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userText}>Hello user!!</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('./assets/notification.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/search.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      

      <ScrollView style={styles.scrollContainer}>
        
        {/* Account Info */}
        <View style={styles.accountCard}>
          <Text>FamLink Account</Text>
          <Text>NPR XXXXX</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          {QUICK_ACTIONS.map((action, index) => (
            <TouchableOpacity key={index} style={styles.actionButton}>
              <Text>{action}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Services Grid */}
        <FlatList
          data={SERVICES}
          keyExtractor={(item) => item.name}
          numColumns={4}
          columnWrapperStyle={styles.serviceRow}
          renderItem={({ item }) => (
            <View style={styles.serviceItem}>
              <Image source={item.icon} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>{item.name}</Text>
            </View>
          )}
        />

        {/* View Buttons */}
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Statement</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Offers and Promos</Text>
          <TouchableOpacity>
            <Text style={styles.cardLink}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Help and Support</Text>
          <TouchableOpacity>
            <Text style={styles.cardLink}>View</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Child Wallet</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/home.png')} style={styles.navIcon} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/payments.png')} style={styles.navIcon} />
          <Text>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/qr.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/children.png')} style={styles.navIcon} />
          <Text>Children</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/setting.png')} style={styles.navIcon} />
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#00a0c1' },
  scrollContainer: { flex: 1, padding: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  userText: { fontSize: 18, color: 'white', fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row' },
  icon: { width: 24, height: 24, marginLeft: 10 },
  accountCard: { backgroundColor: 'white', padding: 10, borderRadius: 10, marginBottom: 10 },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  actionButton: { backgroundColor: 'white', padding: 10, borderRadius: 8, flex: 1, margin: 2, alignItems: 'center' },
  serviceRow: { justifyContent: 'space-between', marginBottom: 10 },
  serviceItem: { backgroundColor: 'white', flex: 1, margin: 2, borderRadius: 8, alignItems: 'center', padding: 10 },
  serviceIcon: { width: 30, height: 30, marginBottom: 5 },
  serviceText: { fontSize: 12, textAlign: 'center' },
  viewButton: { backgroundColor: '#007a9c', padding: 12, borderRadius: 10, alignItems: 'center', marginVertical: 5 },
  viewButtonText: { color: 'white', fontWeight: 'bold' },
  card: { backgroundColor: 'white', padding: 10, borderRadius: 10, marginVertical: 5 },
  cardTitle: { fontWeight: 'bold', marginBottom: 5 },
  cardLink: { color: '#007a9c' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#00a0c1', paddingVertical: 10 },
  navItem: { alignItems: 'center' },
  navIcon: { width: 24, height: 24, marginBottom: 2 },
});

export default MyDash;