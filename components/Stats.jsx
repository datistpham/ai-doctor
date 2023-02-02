import { useNavigation, useRoute } from '@react-navigation/native'
import _ from 'lodash'
import React, { Fragment, useEffect, useState } from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import Summary from './Summary'

const Stats = () => {
  const route= useRoute()
  const navigation= useNavigation()
  const [change, setChange]= useState(false)
  const renderNumber= (min, max, floating)=> {
    return _.random(min, max, floating)
  }
  useEffect(()=> {
    const intervalId= setInterval(()=> {
        setChange(prev=> !prev)
    }, renderNumber(3000, 5000))
    return ()=> clearInterval(intervalId)
  }, [])
  
  return (
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        {
            route.params?.is_summary=== true ? <Fragment>
            <View style={{marginTop: 50}}></View>
            <Summary />
        </Fragment> : <View style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 8}}>
            <Image source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673446156/single/323799695_1148820099170062_3224064458722686714_n_ipn8gq.png"}} style={{width: 100, height: 100, borderRadius: 50}} />
        </View>
        }
        
        <View style={{width: "100%", marginBottom: 18}}>
            <Text style={{textAlign: "center", fontSize: 17}}>Xin chào <Text style={{fontWeight: "600", fontSize: 19}}>Nguyễn Long</Text>, tôi là AiDoctor</Text>
        </View>
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số Glucôzơ:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(100, 110)}</Text>
            </View>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số Lipit:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(140, 150)}</Text>
            </View>
        </View>
        {/*  */}
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số RBC:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(4.5, 4.8, 1).toFixed(1)}</Text>
            </View>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số HGB:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(140, 150)}</Text>
            </View>
        </View>
        {/*  */}
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số HCT:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(0.37, 0.43).toFixed(2)}</Text>
            </View>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số MCV:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{(renderNumber(0.37, 0.43) / renderNumber(4.5, 4.8, 1)).toFixed(2)}</Text>
            </View>
        </View>
        {/*  */}
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số MCH:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(0.43, 0.52).toFixed(2)}</Text>
            </View>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số MCHC:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(0.13, 0.22).toFixed(2)}</Text>
            </View>
        </View>
        {/*  */}
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số RDW:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(11, 14)}%</Text>
            </View>
            <View style={{display: "flex", alignItems: "center", flexDirection: "row", width: "50%"}}>
                <Text style={{width: "50%"}}>Chỉ số WBC:</Text>
                <Text style={{marginLeft: 12, fontWeight: "600", fontSize: 17}}>{renderNumber(5, 9)}G/L</Text>
            </View>
        </View>
        <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
            <TouchableHighlight onPress={()=> navigation.navigate("Anamnesis")} underlayColor={"#2e89ff"} style={{borderRadius: 100}}>
                <View style={{padding: 20, borderRadius: 100, backgroundColor: "#2e89ff", display: "flex", justifyContent: "center", alignItems: "center", width: 200}}>
                    <Text style={{fontWeight: "600", color: "#fff"}}>Tiếp tục</Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>
  )
}

export default Stats