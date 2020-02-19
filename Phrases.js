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
                By the way
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Did you see
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I agree
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I don't agree.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                I dont think so.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Guess what?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Understood
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Funny
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                Sure.
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
