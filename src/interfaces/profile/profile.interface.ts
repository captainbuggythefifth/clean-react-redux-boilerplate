import { IResponseDataState } from "../common.interface";

interface IProfileName {
    title: string,
    first: string,
    last: string
}

interface IProfileLocation {
    street: string,
    city: string,
    state: string,
    postcode: string,
    coordinates: IProfileLocationCoordinate,
    timezone: IProfileLocationTimezone
}

interface IProfileLocationCoordinate {
    latitude: string,
    longitude: string
}

interface IProfileLocationTimezone {
    offset: string,
    description: string
}

interface IProfileLogin {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
}

interface IProfileDOB {
    date: string,
    age: number
}

interface IProfileID {
    name: string,
    value: string
}

interface IProfilePicture {
    large: string,
    medium: string,
    thumbnail: string
}


export interface IProfileState extends IResponseDataState {
    data: {
      gender: string,
      name: IProfileName,
      location: IProfileLocation
      email: string,
      login: IProfileLogin,
      dob: IProfileDOB,
      registered: IProfileDOB,
      phone: string,
      cell: string,
      id: IProfileID,
      picture: IProfilePicture,
      nat: string
    } | null,
};

export const profileInitialState: IProfileState = {
  data: null,
    success: false,
    isRequesting: false
};

 