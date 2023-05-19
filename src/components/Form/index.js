import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import styles from "./style";
import { getRealm} from "../../realmDB/realm";
import uuid from 'react-native-uuid';



export  default function Form() {
    
const [nome, setNome]=useState("")
const [cpf, setCpf]=useState("")
const [end, setEnd]=useState("")
const [cep, setCep]=useState("")
const [textButton, setTextButton]=useState("Cadastrar")

async function catNewCad() {
  const realm = await getRealm();

  try {
    realm.write(() => {
      const created =
      realm.create( "cadClient", {
        _id:uuid.v4(),
        nome,
        cpf,
        end,
        cep,
        date: new Date(),
      });
      console.log("CADASTRADO ==>", created);
    });

    Alert.alert("Cadastro", "Cadastro realizado com sucesso!");
  } catch (e){
    console.error(e);
    Alert.alert("Cadastro", "Não foi possível realizar o cadastro!");
  } finally {
    realm.close;
  }
    
}

function cadClient(){
  if(nome !=null && cpf !=null && end !=null && cep !=null){
    catNewCad()
    setTextButton("Novo Cadastro")
    return
  }
  setTextButton("Cadastrar")
}
  
  return (
      <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Dados</Text>
            <TextInput
            style={styles.input}
            onChangeText={setNome}
            placeholder="Nome completo"
            />

            <TextInput
            style={styles.input}
            onChangeText={setCpf}
            placeholder="CPF"
            />

            <Text style={styles.formLabel}>Endeceço</Text>

            <TextInput
            style={styles.input}
            onChangeText={setEnd}
            placeholder="Av/Rua, Nº & Bairro"
            />

            <TextInput
            style={styles.input}
            onChangeText={setCep}
            placeholder="CEP"
            />

         <TouchableOpacity
          style={styles.buttonCad}
          onPress={() =>
            catNewCad()
          }
          >
            <Text style={styles.textButtonCad}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }