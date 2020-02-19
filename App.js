import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import Common from './Common'
import Food from './Food'
import Drink from './Drink'
import Activity from './Activity'
import Feelings from './Feelings'
import Medical from './Medical'
import Home from './Home'
import Work from './Work'
import Phrases from './Phrases'

export default class App extends Component {

  state = {
    common: false,
    food: false,
    drink: false,
    activity: false,
    feelings: false,
    medical: false,
    home: false,
    work: false,
    phrases: false,
    text:" "
  }
  handleText = (data) => {
    console.log(data)
    // Alert.alert("sEX")
    this.setState({
      text:[...this.state.text,data]
    })
  }
  handleClearText = () => {
    this.setState({
      text:" "
    })
  }
  render() {
    return (
      <ScrollView>
      <View>
        <View style={{display:'flex',flexDirection:'row'}}>
          <View style={{ height: 100, borderWidth: 2,flex:4,marginTop:10,marginLeft:10 }} >
            <Text>{this.state.text}</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'red',padding:15}} onPress={this.handleClearText}>
              <Text style={{color:'white'}}>CLEAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ margin: 0}} >
          <View style={{ flexDirection: 'row' }} >
            
            <TouchableOpacity onPress={()=> this.setState({ common: !this.state.common,
    food: false,
    drink: false,
    activity: false,
    feelings: false,
    medical: false,
    home: false,
    work: false,
    phrases: false }) } >
            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Common
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.setState({ food: !this.state.food,
              common: false,
    drink: false,
    activity: false,
    feelings: false,
    medical: false,
    home: false,
    work: false,
    phrases: false }) } >
            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Food
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.setState({ drink: !this.state.drink, common: false,
    food: false,
    activity: false,
    feelings: false,
    medical: false,
    home: false,
    work: false,
    phrases: false }) } >
            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Drink
              </Text>
            </View>
          </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }} >
          <TouchableOpacity onPress={()=> this.setState({ activity: !this.state.activity, common: false,
              food: false,
              drink: false,
              feelings: false,
              medical: false,
              home: false,
              work: false,
              phrases: false }) } >
            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Activity
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.setState({ feelings: !this.state.feelings, common: false,
    food: false,
    drink: false,
    activity: false,
    medical: false,
    home: false,
    work: false,
    phrases: false }) } >

            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Feelings
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.setState({ medical: !this.state.medical, common: false,
    food: false,
    drink: false,
    activity: false,
    feelings: false,
    home: false,
    work: false,
    phrases: false }) } >

            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Medical
              </Text>
            </View>
          </TouchableOpacity>

          </View>


          <View style={{ flexDirection: 'row', borderBottomWidth: 3 }} >
            <TouchableOpacity onPress={()=> this.setState({ home: !this.state.home, common: false,
    food: false,
    drink: false,
    activity: false,
    feelings: false,
    medical: false,
    work: false,
    phrases: false }) } >
            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Home
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.setState({ work: !this.state.work, common: false,
    food: false,
    drink: false,
    activity: false,
    feelings: false,
    medical: false,
    home: false,
    phrases: false }) } >

            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Work
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.setState({ phrases: !this.state.phrases, common: false,
    food: false,
    drink: false,
    activity: false,
    feelings: false,
    medical: false,
    home: false,
    work: false,
     }) } >

            <View style={{height: 60, width: 110, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', margin: 10  }} >
              <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }} >
                Phrases
              </Text>
            </View>
            </TouchableOpacity>
          </View>

          { this.state.common ? <Common item={this.handleText}/> : null }
          { this.state.food ? <Food item={this.handleText} /> :  null }
          { this.state.drink ? <Drink item={this.handleText} /> :  null }  
          { this.state.activity ? <Activity item={this.handleText} /> :  null }
          { this.state.feelings ? <Feelings item={this.handleText} /> :  null }
          { this.state.medical ? <Medical item={this.handleText} /> :  null } 
          { this.state.home ? <Home item={this.handleText} /> :  null } 
          { this.state.work ? <Work item={this.handleText} /> :  null }
          { this.state.phrases ? <Phrases item={this.handleText} /> : null }

        </View>

      </View>
      </ScrollView>
    )
  }
}
