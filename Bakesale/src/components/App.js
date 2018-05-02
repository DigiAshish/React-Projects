import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';

class App extends React.Component {
	state = {
		deals: [],
	};

	async componentDidMount(){
		const deals = await ajax.fetchInitialDeals();
		this.setState({ deals });
	}

	render(){
		return (
			<View style={styles.container}>
			<Text style={styles.header}>Bakesale</Text>
			<DealList deals = {this.state.deals}/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
