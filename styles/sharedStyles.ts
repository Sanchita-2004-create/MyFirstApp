import { StyleSheet } from 'react-native';

export const TEAL = '#1A9BAB';

export const shared = StyleSheet.create({
  screen: { flex: 1, backgroundColor: TEAL },

  // Header
  header: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerRight: { flexDirection: 'row', gap: 14 },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0d7a88',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  greeting: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  headerIcon: { fontSize: 20, color: 'white' },

  // Big button
  bigBtn: {
    backgroundColor: TEAL,
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  bigBtnText: { color: 'white', fontSize: 15, fontWeight: 'bold' },

  // Info cards
  infoCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  infoTitle: { fontSize: 13, color: TEAL, fontWeight: 'bold', marginBottom: 2 },
  infoLink: { fontSize: 14, color: '#333' },

  // Bottom nav
  bottomNav: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navBtn: { alignItems: 'center' },
  qrBtn: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#eee',
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  navIcon: { fontSize: 20 },
  navLabel: { fontSize: 10, color: '#aaa', marginTop: 2 },
  navLabelActive: { color: TEAL, fontWeight: 'bold' },
});
