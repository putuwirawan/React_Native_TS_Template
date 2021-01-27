import React from 'react';
import {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ListItemProps {
  title: string;
  key?: string | number | undefined | null;
  color?: string; //background color
  subTitle?: string; //
  onPress: () => void;
  iconRight?: boolean;
  enableDot?: boolean;
  avatar?: React.ReactNode;
  style?: any;
}

export const ListItem: FC<ListItemProps> = (props) => {
  const {title, onPress, subTitle, avatar, color, key, style} = props;
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={{padding: 2}} key={key}>
      <View
        style={[
          {
            minWidth: 100,
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
          style,
        ]}>
        <View
          style={{
            flex: 8,
            paddingLeft: 10,
            flexDirection: 'row',
            backgroundColor: color ? color : colors.border,
            borderTopLeftRadius: 5,
          }}>
          {avatar ? (
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingHorizontal: 2,
                minWidth:25
              }}>
              {avatar}
            </View>
          ) : null}

          <View
            style={{
              paddingLeft: 10,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.text, fontSize: 17, fontWeight: '600'}}>
              {title}
            </Text>
            {subTitle ? (
              <Text
                style={{color: colors.text, fontSize: 14, fontWeight: '500', fontStyle:'italic'}}>
                {subTitle}
              </Text>
            ) : null}
          </View>
        </View>

        <View
          style={{
            backgroundColor: color ? color : colors.border,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Icon
            name="chevron-forward-outline"
            color={colors.primary}
            type="ionicon"
          />
        </View>
      </View>
    </TouchableOpacity>

    //  name="g-translate"
  );
};
