import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View, TextInput, ScrollView, Image, TouchableHighlight } from 'react-native'
import { CheckBox } from "react-native-btr";

const Anamnesis = () => {
  const navigation= useNavigation()
  const [age, setAge]= useState(()=> ({
    age1: false, 
    age2: false,
    age3: false
  }))
  const [f, setF]= useState(()=> ({
    f1: true, 
    f2: true,
    f3: true
  }))
  const [g, setG]= useState(()=> ({
    g1: false,
    g2: false
  }))
  const [x, setX]= useState(()=> ({
    x1: false,
    x2: false
  }))
  const [l, setL]= useState(()=> ({
    a1: false,
    a2: false, 
    a3: false, 
    a4: false, 
    a5: false,
  }))
  const ageFunc1= ()=> {
    if(age.age1 === false ) {
      setAge({age1: true, age2: false, age3: false})
    }
    else {
      setAge({age1: false, age2: true, age3: true})
    }
  }
  const ageFunc2= ()=> {
    if(age.age2 === false ) {
      setAge({age1: false, age2: true, age3: false})
    }
    else {
      setAge({age1: true, age2: false, age3: true})
    }
  }
  const ageFunc3= ()=> {
    if(age.age3 === false ) {
      setAge({age1: false, age2: false, age3: true})
    }
    else {
      setAge({age1: true, age2: true, age3: false})
    }
  }

  const af1= ()=> {
    if(age.f1 === false ) {
      setF({f1: true, f2: false, f3: false})
    }
    else {
      setF({f1: false, f2: true, f3: true})
    }
  }
  const af2= ()=> {
    if(age.f2 === false ) {
      setF({f1: false, f2: true, f3: false})
    }
    else {
      setF({f1: true, f2: false, f3: true})
    }
  }
  const af3= ()=> {
    if(age.f3 === false ) {
      setF({f1: false, f2: false, f3: true})
    }
    else {
      setF({f1: true, f2: true, f3: false})
    }
  }


  const gf1= ()=> {
    if(g.g1 === false ) {
      setG({g1: true, g2: false})
    }
    else {
      setG({g1: false, g2: true})
    }
  }
  const gf2= ()=> {
    if(g.g2 === false ) {
      setG({g1: false, g2: true})
    }
    else {
      setG({g1: true, g2: false})
    }
  }
  // 
  const xf1= ()=> {
    if(x.x1 === false ) {
      setX({x1: true, x2: false})
    }
    else {
      setX({x1: false, x2: true})
    }
  }
  const xf2= ()=> {
    if(x.x2 === false ) {
      setX({x1: false, x2: true})
    }
    else {
      setX({x1: true, x2: false})
    }
  }
  return (
    <ScrollView>
      <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 8, marginTop: 18}}>
          <Image source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673508056/single/323541225_680521660225267_2950794772534507758_n_f6u3we.png"}} style={{width: 100, height: 100, borderRadius: 50}} />
        </View>
        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 17, fontWeight: "600", marginBottom: 18, textAlign: "center"}}>Thông tin bệnh nhân</Text>
        </View>
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
          <Text style={{width: 100}}>Tuổi của bạn: </Text>
          <TextInput style={{width: 350, backgroundColor: "#fff", height: 40, padding: 10}} placeholder={"Nhập tuổi "} />
        </View>
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
          <Text style={{width: 100}}>BMI: </Text>
          <TextInput style={{width: 350, backgroundColor: "#fff", height: 40, padding: 10}} placeholder={"Nhập chỉ số bmi của bạn "} />
        </View>
        <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
          <Text style={{width: 100}}>Công việc: </Text>
          <TextInput style={{width: 350, backgroundColor: "#fff", height: 40, padding: 10}} placeholder={"Nhập công việc của bạn "} />
        </View>
        <View style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
          <Text style={{width: 100}}>Giới tính: </Text>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={ageFunc1} checked={age.age1} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Nam</Text>
          </View>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={ageFunc2} checked={age.age2} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Nữ</Text>
          </View>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={ageFunc3} checked={age.age3} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Khác</Text>
          </View>
        </View>
        {/*  */}
        <View style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
          <Text style={{width: 100}}>Tình trạng hôn nhân: </Text>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={af1} checked={!f.f1} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Độc thân</Text>
          </View>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={af2} checked={!f.f2} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Đã kết hôn</Text>
          </View>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={af3} checked={!f.f3} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Khác</Text>
          </View>
        </View>
        {/*  */}
        <View style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
          <Text style={{width: 100}}>Nơi ở: </Text>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={gf1} checked={g.g1} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Nông thôn</Text>
          </View>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={gf2} checked={g.g2} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Thành phố</Text>
          </View>
        </View>
        {/*  */}
        <View style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
          <Text style={{width: 100}}>Bạn có hút thuốc không: </Text>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={xf1} checked={x.x1} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Có</Text>
          </View>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
            <CheckBox onPress={xf2} checked={x.x2} />
            <Text style={{marginLeft: 12, fontSize: 12}}>Không</Text>
          </View>
        </View>
        <View style={{width: "100%", padding: 10}}>
          <Text style={{marginBottom: 12, fontSize: 18, fontWeight: "600"}}>Tiền sử bệnh</Text>
          <View style={{display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 10}}>
            <CheckBox onPress={()=> setL((prev)=> ({...prev, a1: !l.a1}))} checked={l.a1} />
            <Text style={{marginLeft: 12, fontSize: 18}}>Ung thư</Text>
          </View>
          <View style={{display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 10}}>
            <CheckBox onPress={()=> setL((prev)=> ({...prev, a2: !l.a2}))} checked={l.a2} />
            <Text style={{marginLeft: 12, fontSize: 18}}>Bệnh tim</Text>
          </View>
          <View style={{display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 10}}>
            <CheckBox onPress={()=> setL((prev)=> ({...prev, a3: !l.a3}))} checked={l.a3} />
            <Text style={{marginLeft: 12, fontSize: 18}}>Bệnh tiểu đường</Text>
          </View>
          <View style={{display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 10}}>
            <CheckBox onPress={()=> setL((prev)=> ({...prev, a4: !l.a4}))} checked={l.a4} />
            <Text style={{marginLeft: 12, fontSize: 18}}>Cholesterol cao</Text>
          </View>
          <View style={{display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 10}}>
            <CheckBox onPress={()=> setL((prev)=> ({...prev, a5: !l.a5}))} checked={l.a5} />
            <Text style={{marginLeft: 12, fontSize: 18}}>Đột quỵ</Text>
          </View>
          <View style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginBottom: 12, padding: 10}}>
            <TouchableHighlight onPress={()=> navigation.navigate("Stats", {is_summary: true})} underlayColor={"#2e89ff"} style={{borderRadius: 100}}>
                <View style={{padding: 20, borderRadius: 100, backgroundColor: "#2e89ff", display: "flex", justifyContent: "center", alignItems: "center", width: 200}}>
                    <Text style={{fontWeight: "600", color: "#fff"}}>Tiếp tục</Text>
                </View>
            </TouchableHighlight>
        </View>
        </View>
      </View>
    </ScrollView>
    </ScrollView>
  )
}

export default Anamnesis