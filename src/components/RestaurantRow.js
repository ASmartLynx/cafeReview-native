import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Stars from 'components/Stars';

export default class RestaurantRow extends React.Component {
  state = {
    showInfo: false
  }

  infoPressed = () => {
    // this.setState({ showInfo: !this.state.showInfo });
    this.props.navigation.navigate('Info', { 
      place: this.props.place
    });
  }

  render() {
    const {
      place,
      index
    } = this.props;

    return(
      <View key={place.name} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>

        <View style={styles.row}>
          <View style={styles.stars}>
            <Stars rating={place.rating} />
          </View>
          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.addressText}>{place.address}</Text>
          </View>
          <View style={styles.edges}>
            <TouchableOpacity 
              onPress={this.infoPressed}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {
          this.state.showInfo &&
          <View style={styles.info}>
            <Text>Restaurant Info</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50
  },
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50
  },
  nameAddress: {
    flexDirection: 'column',
    flex: 8
  },
  addressText: {
    color: 'grey'
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff'
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4
  }
});
