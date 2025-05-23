import React, { useState } from "react";
import { View, Modal, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { Address, AddressModalProps } from "../types";
import { AddressInputModalStyles as styles } from "./AddressInputModal.style";
import { LabeledInput } from "./LabeledInput";
import { GradientButton } from "./GradientButton";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

function AddressInputModal({ location, setLocation }: AddressModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempAddress, setTempAddress] = useState<Address>(location);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!tempAddress.county.trim()) newErrors.county = "County is required";
    if (!tempAddress.city.trim()) newErrors.city = "City is required";
    if (!tempAddress.street.trim()) newErrors.street = "Street is required";
    if (!tempAddress.house.trim()) newErrors.house = "House is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      setLocation(tempAddress);
      setModalVisible(false);
    }
  };

  const handleFieldChange = (field: keyof Address, value: string) => {
    setTempAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.locationIcon, { fontSize: moderateScale(20) }]}>
          📍
        </Text>
        <Text
          style={[
            styles.locationButtonText,
            { fontSize: moderateScale(18), fontWeight: "600" },
          ]}
        >
          Location
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ScrollView
              contentContainerStyle={{
                paddingBottom: verticalScale(20),
                paddingHorizontal: scale(8),
              }}
              showsVerticalScrollIndicator={false}
            >
              <Text
                style={[styles.modalTitle, { fontSize: moderateScale(20) }]}
              >
                Enter Address
              </Text>

              <LabeledInput
                label="County"
                value={tempAddress.county}
                onChangeText={(text) => handleFieldChange("county", text)}
                errorMessage={errors.county}
                placeholder="Enter county"
              />

              <LabeledInput
                label="City"
                value={tempAddress.city}
                onChangeText={(text) => handleFieldChange("city", text)}
                errorMessage={errors.city}
                placeholder="Enter city"
              />

              <LabeledInput
                label="Street"
                value={tempAddress.street}
                onChangeText={(text) => handleFieldChange("street", text)}
                errorMessage={errors.street}
                placeholder="Enter street"
              />

              <LabeledInput
                label="House"
                value={tempAddress.house}
                onChangeText={(text) => handleFieldChange("house", text)}
                errorMessage={errors.house}
                placeholder="Enter house"
              />

              <LabeledInput
                label="Room (optional)"
                value={tempAddress.room || ""}
                onChangeText={(text) => handleFieldChange("room", text)}
                placeholder="Enter room"
                style={{ marginTop: verticalScale(-20) }}
              />

              <LabeledInput
                label="Index (optional)"
                value={tempAddress.index || ""}
                onChangeText={(text) => handleFieldChange("index", text)}
                placeholder="Enter index"
                style={{ marginTop: verticalScale(-20) }}
              />

              <View
                style={[
                  styles.modalButtons,
                  {
                    marginTop: verticalScale(22),
                    justifyContent: "space-between",
                  },
                ]}
              >
                <GradientButton
                  onPress={handleSave}
                  label="Save"
                  containerStyle={{ width: scale(110) }}
                />
                <GradientButton
                  onPress={() => setModalVisible(false)}
                  label="Cancel"
                  containerStyle={{ width: scale(110) }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AddressInputModal;
