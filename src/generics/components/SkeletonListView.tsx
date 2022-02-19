import {View} from 'react-native';
import React, {Component} from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

interface Props {}

interface State {}

export default class SkeletonListView extends Component<Props, State> {
  render = () => {
    let body = [];
    for (let i = 0; i < 8; i++) {
      body.push(
        <ContentLoader key={i.toString()} animate={true} height={96}>
          <Rect x={0} y={0} width={'40%'} height={8} />
          <Rect x={0} y={20} width={'100%'} height={8} />
          <Rect x={0} y={40} width={'100%'} height={8} />
        </ContentLoader>,
      );
    }
    return <View style={{padding: 16}}>{body}</View>;
  };
}
