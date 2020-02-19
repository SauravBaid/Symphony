import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Tasty
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Potatoes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Eggs
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Sandwich
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                and
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Cheese
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Hungry
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Burger
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
