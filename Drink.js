import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'turquoise', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I would like 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                TEA
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                COFFEE
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                PEPSI
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                COLD
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                ICE TEA
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                SURPRISE ME
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                MILK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                MOCKTAIL 
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
