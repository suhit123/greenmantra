import {StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const CustomSelectOption = ({items,label,showlabel=true,setSelect,value}:any) => {
  return (
    <View>
      {showlabel &&<Text style={styles.label}>{label}</Text>}
      <SelectDropdown
        defaultValue={value}
        data={items}
        onSelect={(selectedItem, index) => {
          setSelect(selectedItem);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'Select an option'}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && {backgroundColor: '#D2D9DF'}),
              }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: 'black',
    fontWeight: 'semibold',
  },
  dropdownButtonStyle: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    height: 40,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default CustomSelectOption;
