import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I work 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                at
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Home
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Kitchen
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Going to work
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Google
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                a MNC
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                the Bank
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                from
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
