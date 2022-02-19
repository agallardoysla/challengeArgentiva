import React, {ReactNode} from 'react';
import {View} from 'react-native';
import SkeletonListView from './SkeletonListView';
import ListErrorRetryView from './ListErrorRetryView';

const GenericListContainer = ({
  isLoading,
  error,
  children,
  onRetry,
}: {
  isLoading: boolean;
  error: string;
  children: ReactNode;
  onRetry: () => void;
}) => {
  if (error) {
    return (
      <View style={{flex: 1}}>
        <ListErrorRetryView
          message={error}
          onRetryPress={onRetry}
          showAsButton={true}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{flex: 1}}>
        <SkeletonListView />
      </View>
    );
  }

  return <View style={{flex: 1}}>{children}</View>;
};

export default GenericListContainer;
