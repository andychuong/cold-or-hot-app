import React from "react"
import { View, Text, Image, ImageBackground } from "react-native";
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation" // Version can be specified in package.json
import Snow from "react-native-snow";


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} source={{ uri: "https://i.pinimg.com/236x/06/d2/cf/06d2cf424f7b494d0328ce1728f0ba61--fire-art-fire-and-ice.jpg" }}>
        <Text style={{fontSize:80, color:'white', backgroundColor:'rgba(0, 0, 0, 0.3)'}}>Are You</Text>
        <Text></Text>
        
        <Button
          backgroundColor='blue'
          color='white'
          title="Cold"
          onPress={() => this.props.navigation.navigate("Cold")}
        />
        <Text style={{fontSize:60, color:'white'}}>or</Text>
        <Button
          backgroundColor='red'
          color= 'black'
          title="Hot"
          onPress={() => this.props.navigation.navigate("Hot")}
        />
        <Text style={{fontSize:60, color:'white'}}>?</Text>
        </ImageBackground>
        
      </View>
    )
  }
}

class FrostyScreen extends React.Component {
  render() {
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} source={{ uri: "http://www.algonquinadventures.com/wallpaper/phones/StephenElms-SPWP-2.jpg" }}>
      </ImageBackground>
      <Snow />
      </View>;
  }
}

class FireyScreen extends React.Component {
  render() {
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground style={{ alignItems: "center", width: "100%", height: "100%" }} source={{ uri: "https://i.pinimg.com/originals/62/7d/79/627d791dd52df9227cecf798494946dd.jpg" }}>
        <Image layout={10,10,10,10} style = {{ width:'20%', height:'20%', marginTop:'106%'}} source={require('../img/fire.gif')}>
        </Image>        
      </ImageBackground>

        {/* Look here! We "push" the Details route */}
      </View>;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Cold: FireyScreen,
    Hot: FrostyScreen
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
const styles = {
  snow: {
    backgroundColor: "#FFFFFF",
    width: 100,
    height: 100,
    borderRadius: 50
  }
}
