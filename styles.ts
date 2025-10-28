import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
},
header: {
  position: 'absolute', // fixes header at top
  top: 0,
  left: 0,
  right: 0,
  height: 130, // adjust as needed
  backgroundColor: '#242424ff',
  zIndex: 10, // ensures content scrolls under it
  paddingTop: 25, // for status bar / notch
  paddingHorizontal: 12,  
},
headerRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    gap: 25, 
},
title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#c68600ff', 
    textAlign: 'left', 
    marginBottom: 0, 
    flexShrink: 1, 
},
  cardsTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 6, 
    color: '#333', 
    textAlign: 'center', 
  },
  logoPlaceholder: { width: 80, height: 80, backgroundColor: '#c68600ff', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 0, marginRight: 12, },
  logoImage: { width: 80, height: 80, borderRadius: 40, },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 20, flexGrow: 1, justifyContent: 'flex-start', },
  imagesRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginBottom: 10, },
  placeholder: { backgroundColor: '#E8E8E8', flex: 1, height: 110, marginBottom: 6, borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 2, shadowOffset: { width: 0, height: 1 }, marginHorizontal: 2, padding: 6, },
  imageText: { fontSize: 13, marginBottom: 4, fontWeight: '400', },
  imageButton: { backgroundColor: '#c68600ff', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4, marginTop: 2, },
  imageButtonText: { color: '#fff', fontSize: 12, fontWeight: 'bold', },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#242424ff', 
    paddingVertical: 20, 
    borderTopWidth: 1, 
    borderTopColor: '#ccc', },
  headerButton: { paddingHorizontal: 6, paddingVertical: 4, borderRadius: 5, backgroundColor: '#fff', elevation: 1, marginHorizontal: 1, minWidth: 55, alignItems: 'center', },
  headerButtonText: { fontSize: 14, fontWeight: '500', color: '#242424ff', },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 14, elevation: 2, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 3, shadowOffset: { width: 0, height: 1 }, },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, color: '#333', textAlign: 'center', },
  cardParagraph: { fontSize: 12, color: '#444', lineHeight: 17, textAlign: 'center', paddingBottom: 8, },
  inputBox: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 6, fontSize: 14, backgroundColor: '#f9f9f9', },
  checkbox: { width: 22, height: 22, borderRadius: 5, borderWidth: 2, borderColor: '#c68600ff', justifyContent: 'center', alignItems: 'center', marginRight: 10, backgroundColor: '#fff', },
  checkboxChecked: { backgroundColor: '#c68600ff', borderColor: '#c68600ff', },
  checkboxInner: { width: 12, height: 12, backgroundColor: '#fff', borderRadius: 2, },
  cartBadge: { position: 'absolute', top: -6, right: -6, backgroundColor: '#f00', borderRadius: 10, minWidth: 20, height: 20, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4, },
  cartBadgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  toast: { position: 'absolute', left: 20, right: 20, bottom: 100, backgroundColor: '#000000cc', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, alignItems: 'center', },
  toastText: { color: '#fff', fontSize: 14, },
  calcButton: { backgroundColor: '#c68600ff', borderRadius: 6, paddingVertical: 8, alignItems: 'center', marginTop: 10, },
  calcButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16, },
  calcButtonDisabled: { backgroundColor: '#d0d0d0', },
  submitButton: { backgroundColor: '#242424ff', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginTop: 10, },
  submitButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16, },
  courseText: { color: '#000000ff', fontSize: 14, textAlign: 'left', },
   categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  // If you want buttons inside the category container
  categoryButton: {
    backgroundColor: '#c68600ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  categoryButtonActive: {
    backgroundColor: '#242424ff',
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryTextActive: {
    color: '#c68600ff',
  },
  emptyText: {
  textAlign: 'center',
  fontSize: 16,
  color: '#666',
  marginVertical: 20,
},

cartItem: {
  padding: 12,
  backgroundColor: '#fff',
  marginVertical: 6,
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},

itemTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#333',
},

itemPrice: {
  fontSize: 14,
  color: '#444',
  marginTop: 4,
},

removeText: {
  color: 'red',
  marginTop: 6,
  fontWeight: '600',
},
  tabHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});