import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { Audio } from 'expo-av';

const Summary = () => {
  const [data, setData]= useState("")
  async function playSound() {
    const sound = new Audio.Sound()
    await sound.loadAsync({
      uri: "https://res.cloudinary.com/cockbook/video/upload/v1673677218/single/hello_zcl0em.mp3"
    })
  
    await sound.playAsync()
  }
  async function playSound2() {
    const sound = new Audio.Sound()
    await sound.loadAsync({
      uri: "https://res.cloudinary.com/cockbook/video/upload/v1673677360/single/hello_yjy2lj.mp3"
    })
  
    await sound.playAsync()
  }
  async function playSound3() {
    const sound = new Audio.Sound()
    await sound.loadAsync({
      uri: "https://res.cloudinary.com/cockbook/video/upload/v1673677073/single/089937_sfxwav-88208_iegpfv.mp3"
    })
  
    await sound.playAsync()
  }
  useEffect(()=> {
    const intervalId= setInterval(
      async()=> {
        const res= await axios({
          url: "https://stroke.xarest.com/stroke/result",
          method: "get"
        })
        const result= await res.data
        console.log(result)
        if(parseInt(result)=== 0) {
          playSound()
          clearInterval(intervalId)
          return setData(result)
        }
        else if(parseInt(result)=== 1) {
          clearInterval(intervalId)
          playSound2()
          playSound3()
          return setData(result)
        }
      } , 5000)
    return ()=> clearInterval(intervalId)
  }, [])
  return (
    <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {
        data=== "" && <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={"large"} color={"#2e89ff"} />
        <Text style={{fontSize: 18, fontWeight: "600", marginTop: 12, textAlign: 'center'}}>
          AIDoctor đang phân tích dữ liệu, xin khách hàng chờ trong ít phút
        </Text>
      </View>
      }
      {
        parseInt=== 1 && 
      <View style={{display: "flex", justifyContent:"center", alignItems: "center", position: "relative"}}>
          <View style={{display: "flex",justifyContent: "center", alignItems: "center", position: "absolute", top: -100, right: -60, zIndex: 99}}>
              <Text style={{color: "#fff", position: "absolute", zIndex: 999, fontSize: 14}}>Bạn có nguy cơ đột quỵ cao</Text>
              <Image style={{width: 120, height: 100, borderRadius: 50}} source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673523979/single/grid_landscape-removebg-preview_apyeqt.png"}} /> 
          </View>
          <Image style={{width: 100, height: 100, borderRadius: 50}} source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673523605/single/323590283_1231675807787654_3231914162958629634_n.png_cycdu6.png"}} />
        </View>
      }
      {
        parseInt(data)=== 0 && 
      <View style={{display: "flex", justifyContent:"center", alignItems: "center", position: "relative"}}>
          <View style={{display: "flex",justifyContent: "center", alignItems: "center", position: "absolute", top: -130, right: -60, zIndex: 99}}>
              <Text style={{color: "#fff", position: "absolute", zIndex: 999, fontSize: 14, width: 140, left: 50}}>Sức khỏe của bạn bình thường</Text>
              <Image style={{width: 200, height: 120}} source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673523979/single/grid_landscape-removebg-preview_apyeqt.png"}} /> 
          </View>
          <Image style={{width: 100, height: 100, borderRadius: 50}} source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673523605/single/323590283_1231675807787654_3231914162958629634_n.png_cycdu6.png"}} />
        </View>
      }
    </View>
    
  )
}

export default Summary