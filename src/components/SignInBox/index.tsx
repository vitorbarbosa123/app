import React from 'react';

import { View } from 'react-native';

import { colors } from '../../../assets/theme';

import { Button } from '../Button'

import { styles } from './styles';

export function SignInBox(){
  return (
    <View style={styles.container}>

        <Button
            title="ENTRAR COM GITHUB"
            color={colors.BLACK_PRIMARY}
            backgroundColor={colors.YELLOW}
            icon="github"
        />

    </View>
  );
}