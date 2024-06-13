export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  geo: UserGeo;
  phone: string;
  website: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserGeo {
  lat: string;
  lng: string;
}
