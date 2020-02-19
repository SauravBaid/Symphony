import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Can't Speak
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                My name is
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I live in
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Good evening
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Good night
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Goodbye
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                See ya
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I like it 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Of course.
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
