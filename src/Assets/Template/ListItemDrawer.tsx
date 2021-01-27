import React from 'react';
import {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


interface DrawerProps {
  title: string;
  keyIndext?: string | number | undefined;
  color?: string; //background color
  subTitle?: string; //
  onPress: () => void;
  iconRight?: boolean;
  enableDot?: boolean;
  avatar?: React.ReactNode;
  style?: any;
}

export const ListItemDrawer: FC<DrawerProps> = (props) => {
  const {title, onPress, subTitle, avatar, color, keyIndext, style} = props;
  const {colors} = useTheme();

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{padding: 2}}
        key={keyIndext}>
        <View
          style={{
            paddingLeft: 10,
          
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              paddingLeft: 10,
            
              flexDirection: 'row',
              backgroundColor: color ? color : colors.border,
              borderTopLeftRadius: 5,
            }}>
            {avatar ? <View>{avatar}</View> : null}

            <View
              style={{
                paddingLeft: 10,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: colors.text, fontSize: 17, fontWeight: '700'}}>
                {title}
              </Text>
              {subTitle ? (
                <Text
                  style={{color: colors.text, fontSize: 14, fontWeight: '500'}}>
                  {subTitle}
                </Text>
              ) : null}
            </View>
          </View>

          <View
            style={{
              flex: 1,
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
    </View>

    //  name="g-translate"
  );
};
