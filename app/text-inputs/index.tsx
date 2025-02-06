import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const TextInputsScreen = () => {

  const iOs = Platform.OS === 'ios'

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={iOs ? 'padding' : undefined}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput 
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text)=>setForm({...form, name: text})} 
            />
            <ThemedTextInput 
              placeholder='Coreo electrónico'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text)=>setForm({...form, email: text})} 
            />
            <ThemedTextInput 
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text)=>setForm({...form, phone: text})} 
            />
          </ThemedCard>
          <ThemedCard className='my-5'>
            <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-5'>
            <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-5'>
            <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-5'>
            <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-5'>
            <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-5'>
            <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-5'>
            <ThemedText>{ JSON.stringify(form, null, 2) }</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-5' >
          <ThemedTextInput 
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text)=>setForm({...form, phone: text})} 
            />
          </ThemedCard>
        </ThemedView>

        { iOs && <ThemedView style={{ marginBottom: 100 }} /> }

      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
