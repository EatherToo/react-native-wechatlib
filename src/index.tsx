import { NativeModules } from 'react-native';

type WechatlibType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Wechatlib } = NativeModules;

export default Wechatlib as WechatlibType;
