import React from "react";
import createBottomTabNavigator from "react-navigation/bottom-tabs";

const BottomBar = createBottomTabNavigator();

export const TabBar = ({barColor}) => (
    <NavigationContainer>
        <BottomBar.Navigator tabBar={(props) => (
            <View style={StyleSheet.navigatorContainer}></View>
        )}
        tabBarOptions={{
            showIcon: true,
            style: styles.navigator,
            tabStyle: {
                backgroundColor: barColor
            }
        }}></BottomBar.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    navigatorContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      // SHADOW
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    navigator: {
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      elevation: 30
    },
    xFillLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 34
    }
  });