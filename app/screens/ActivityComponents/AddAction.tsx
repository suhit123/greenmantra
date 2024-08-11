import { View } from "react-native";
import { Text } from "react-native-paper";
import CustomSelectOption from "../components/CustomSelectOption";
import CustomTextInput from "../components/TextInputCustom";
import ConstButton from "../components/CustomButton";
import { useState } from "react";

const selection=[
    {title:'Open Bag', icon: 'Open Bag'},
    {title:'Close Bag', icon: 'Close Bag'},
    {title:'Open Packet', icon: 'Open Packet'},
    {title:'Close Packet', icon: 'Close Packet'},
];
const AddAction=()=>{
    const [currentActivity, setCurrentActivity] = useState({
        title: 'Add Stock',
        icon: 'Add Stock',
    });
    return (
        <View style={{
            gap: 10,
        }}>
            <CustomSelectOption items={selection} label={'Select Action'} value={currentActivity} setSelect={()=>{}} />
            <CustomTextInput 
                label="Quantity"
                placeholder="Enter Quantity"
                value=""
                onChange={()=>{}}
                multiline={true}
                lines={10}
            />
            <ConstButton title="Add Action" onPress={()=>{}} />
        </View>
    );
};

export default AddAction;