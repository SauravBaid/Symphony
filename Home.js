import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I've live in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I'm in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I'm going home
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Living room
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                the toilet
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                the bathroom
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I'm in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                the garden
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
