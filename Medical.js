import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I am ok.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I need help
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I've got
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Sick
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Pain
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                cramps
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Ok.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Bathroom.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Doctor.
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
