import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { shared } from '../styles/sharedStyles';

const TABS = [
  { name: 'Home', icon: '🏠' },
  { name: 'Payments', icon: '📄' },
  { name: 'QR', icon: '⊞' },
  { name: 'Children', icon: '👶' },
  { name: 'Setting', icon: '⚙️' },
];

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav = ({ activeTab, setActiveTab }: Props) => (
  <View style={shared.bottomNav}>
    {TABS.map((tab) => (
      <TouchableOpacity
        key={tab.name}
        style={[shared.navBtn, tab.name === 'QR' && shared.qrBtn]}
        onPress={() =>
          tab.name === 'QR' ? Alert.alert('QR Scanner') : setActiveTab(tab.name)
        }
      >
        <Text style={shared.navIcon}>{tab.icon}</Text>
        <Text style={[shared.navLabel, activeTab === tab.name && shared.navLabelActive]}>
          {tab.name}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default BottomNav;
