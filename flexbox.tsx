import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ContainerAtas}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <View style={styles.ContainerTengah}>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/drive-storage/AJQWtBMp9E01F8kAhZDfmSqDwDJqeHMj4cd_fUUlMAn7biX8GdzGE9skdUrcimqN_TE_T96_hywBCAf4p6EjggF0KCdwXS5vhsG214I1mSfdy3qllO0=w1920-h1159?auditContext=forDisplay',
          }}
          style={styles.logo}
        />
      </View>

      <View style={styles.ContainerBawah}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ContainerAtas: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ContainerTengah: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerBawah: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  blackBox: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    marginHorizontal: 15,
  },
  yellowBox: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    marginHorizontal: 15,
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
});
