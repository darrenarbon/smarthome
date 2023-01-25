import axios from 'axios';
import { useEffect, useState } from 'react';

import { CategoryTab } from './CategoryTab/CategoryTab';
import { Heating } from './Heating/Heating';
import { Product, DeviceType } from './hiveTypes';
import { HotWater } from './HotWater/HotWater';
import { Light } from './Light/Light';
import { Plug } from './Plug/Plug';

type NavItem = {
  label: string;
  devices: Product[];
};

type NavItems = {
  [DeviceType.Heating]: NavItem;
  [DeviceType.Light]: NavItem;
  [DeviceType.Motion]: NavItem;
  [DeviceType.Plug]: NavItem;
  [DeviceType.HotWater]: NavItem;
};

const baseNavItems: NavItems = {
  [DeviceType.Heating]: { label: 'Heating', devices: [] },
  [DeviceType.Light]: { label: 'Lights', devices: [] },
  [DeviceType.Motion]: { label: 'Motion', devices: [] },
  [DeviceType.Plug]: { label: 'Plugs', devices: [] },
  [DeviceType.HotWater]: { label: 'Hot Water', devices: [] },
};

export const Hive = () => {
  const [navItems, setNavItems] = useState<NavItems>();

  const loadProducts = async () => {
    axios
      .get('/api/hive/products')
      .then((a) => a.data)
      .then((products: Product[]) => {
        const currentNavItems = JSON.parse(JSON.stringify(baseNavItems));
        products.forEach((product) => {
          currentNavItems[product.type].devices.push(product);
        });
        setNavItems(currentNavItems);
        console.log(currentNavItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadProducts();
    }, 3000);
    loadProducts();
    return () => clearInterval(intervalId);
  }, []);

  const categoryComponent = (name: string, product: Product) => {
    if (name === DeviceType.Light) {
      return <Light product={product} key={product.id} />;
    }

    if (name === DeviceType.Plug) {
      return <Plug product={product} key={product.id} />;
    }

    if (name === DeviceType.HotWater) {
      return <HotWater product={product} key={product.id} />;
    }

    if (name === DeviceType.Heating) {
      return <Heating product={product} key={product.id} />;
    }
  };

  return (
    <div className="accordion open" id="hiveGroups">
      {navItems &&
        Object.entries(navItems).map(([key, value]) => (
          <CategoryTab label={value.label} key={key}>
            <div className="row">
              {value.devices.map((device) => {
                return categoryComponent(key, device);
              })}
            </div>
          </CategoryTab>
        ))}
    </div>
  );
};
