import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I am 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                SAD
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                HAPPY
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                OVERWHELMED
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                IN LOVE
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                AFRAID
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                GLAD
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                ANGRY
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                SICK
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
