import React from "react"
import { Button, View, Text, Image, ImageBackground } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation" // Version can be specified in package.json
import AnimatedSnow from "./AnimatedSnow"

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Cold"
          onPress={() => this.props.navigation.navigate("Cold")}
        />
        <Button
          title="Hot"
          onPress={() => this.props.navigation.navigate("Hot")}
        />
      </View>
    )
  }
}

class FrostyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          }}
          source={{
            uri:
              "https://www.hdiphonewalls.com/wp-content/uploads/iPhoneX/Nature/Static%20snow%20iPhone%20X%20Wallpapers.jpg"
          }}
        >
          <AnimatedSnow style={styles.snow} />
        </ImageBackground>
      </View>
    )
  }
}

class FireyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>You are cold</Text>

        {/* Look here! We "push" the Details route */}
      </View>
    )
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
