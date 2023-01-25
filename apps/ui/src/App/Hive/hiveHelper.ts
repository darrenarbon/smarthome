import axios from 'axios';
import { BrightnessPayload, Product } from './hiveTypes';

export const toggleLight = async (light: Product) => {
  if (!light.props.online) {
    return;
  }
  const status = light.state.status === 'ON' ? 'OFF' : 'ON';
  await axios.post(`api/hive/nodes/${light.type}/${light.id}`, {
    status,
  });
};

export const changeBrightness = async (
  event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  light: Product
) => {
  console.log(event.currentTarget.value);
  const newVal = +event.currentTarget.value * 10;
  const payload: BrightnessPayload = {
    brightness: newVal,
  };
  if (light.state.status === 'OFF') {
    payload.status = 'ON';
  }
  await axios.post(`api/hive/nodes/${light.type}/${light.id}`, payload);
};
