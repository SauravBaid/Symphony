import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'

export default class Common extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} 
                onPress={()=>{
                    this.props.item("I'm going to")
                }}
            >
            <View>
              <Text>
                I'm going to
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} 
                onPress={()=>{
                    this.props.item(" Carnival")
                }}
            >
              <Text>
                CARNIVAL
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} 
                onPress={()=>{
                    this.props.item(" Town")
                }}
            >
              <Text>
                TOWN
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} 
            onPress={()=>{
                    this.props.item(" Market")
                }}>
              <Text>
                MARKET
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                HOME
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                BEACH
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                PLAY
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                WORK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 60, width: 110, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text>
                CHILL
              </Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
      </ScrollView>
    )
  }
}
