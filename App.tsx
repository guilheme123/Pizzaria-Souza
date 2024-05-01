
import { useState } from 'react'
import {ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')
  const [password2Field, setPassword2Field] = useState<string>('')
  const [cepField, setCEPField] = useState<string>('')
  const [nomeField, setNomeField] = useState<string>('')
  const [paginaLogin, setPaginaLogin] = useState('1')
  const [paginaInicial, setPaginaInicial] = useState('0')
  const [paginaSenha, setPaginaSenha] = useState('0')
  const [paginaCadastro, setPaginaCadastro] = useState('0')
  const handleForgotButton = () => {
    setPaginaLogin('0')
    setPaginaSenha('1')
  }

  const handleLoginButton = () => {
    alert(emailField)
    alert(passwordField)
    setPaginaLogin('0')
    setPaginaInicial('1')
  }

  const handleSignUpButton = () => {
    setPaginaLogin('0')
    setPaginaCadastro('1')
    

  }

  return (
    <ScrollView style={styles.scrollView}>
    {paginaLogin == '1' &&
    <>

      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/202109011424_EFTL_.webp')}/>
        <Text style={styles.h1}>Pizzaria Souza</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu email'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>  

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        
        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Fulano</Text>
        </View>
      </View>

      </>
    }
    {paginaInicial == '1' &&
    <>
      <View style={styles.container}>
    
      </View>
    </>
    }
    {paginaSenha == '1' &&
    <>
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Digite Sua Nova Senha Aqui</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua senha' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
      </View>
         <View style={styles.inputArea}>

          <Text style={styles.inputLabel}>Confirme Sua Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Confirmar' 
            placeholderTextColor='#d1d1d1'
            value={password2Field}
            onChangeText={t => setPassword2Field(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button2} onPress={handleLoginButton}>
          <Text style={styles.button2Text}>Redefinir</Text>
        </TouchableOpacity>
  
      </View>
    </>
    }
     {paginaCadastro == '1' &&
    <>
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Nome Completo</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu nome completo' 
            placeholderTextColor='#d1d1d1'
            value={nomeField}
            onChangeText={t => setNomeField(t)}
            autoCapitalize='none'
            keyboardType='default'
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu email' 
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>
         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua senha' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>CEP</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu CEP' 
            placeholderTextColor='#d1d1d1'
            value={cepField}
            onChangeText={t => setCEPField(t)}
            autoCapitalize='none'
            keyboardType='numeric'
          />
        </View>
        <TouchableOpacity style={styles.button2} onPress={handleLoginButton}>
          <Text style={styles.button2Text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
    }
    
    </ScrollView>
  )
}