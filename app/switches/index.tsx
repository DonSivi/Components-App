import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const Switches = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin clasName='mt-2'>
      <ThemedCard>
        <ThemedSwitch
            text='Activo'
            onValueChange={ (value) => setState({...state, isActive: value})}
            className='mb-4'
            value={state.isActive}
          />

          <ThemedSwitch
            text='Hambriento'
            onValueChange={ (value) => setState({...state, isHungry: value})}
            className='mb-4'
            value={state.isHungry}
          />

        <ThemedSwitch
            text='Feliz'
            onValueChange={ (value) => setState({...state, isHappy: value})}
            className='mb-4'
            value={state.isHappy}
          />
        </ThemedCard>

        
    </ThemedView>
  );
};
export default Switches;
