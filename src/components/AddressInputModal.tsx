import React, { useState } from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { Address, AddressModalProps } from "../types";
import { AddressInputModalStyles as styles } from "./AddressInputModal.style";
import { LabeledInput } from "./LabeledInput";
import { GradientButton } from "./GradientButton";

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
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.locationButtonText}>Location</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Enter Address</Text>

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
              style={{ marginTop: -20 }}
            />

            <LabeledInput
              label="Index (optional)"
              value={tempAddress.index || ""}
              onChangeText={(text) => handleFieldChange("index", text)}
              placeholder="Enter index"
              style={{ marginTop: -20 }}
            />

            <View
              style={
                (styles.modalButtons,
                { flexDirection: "row", justifyContent: "space-between" })
              }
            >
              <GradientButton
                onPress={handleSave}
                label="Save"
                containerStyle={{ width: 150 }}
              />
              <GradientButton
                onPress={() => setModalVisible(false)}
                label="Cancel"
                containerStyle={{ width: 150 }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AddressInputModal;
