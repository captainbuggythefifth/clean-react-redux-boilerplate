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


export interface IProfileState {
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
};

export const profileInitialState: IProfileState = {
    "gender": "male",
    "name": {
        "title": "mr",
          "first": "brad",
          "last": "gibson"
        },
        "location": {
          "street": "9278 new road",
          "city": "kilcoole",
          "state": "waterford",
          "postcode": "93027",
          "coordinates": {
            "latitude": "20.9267",
            "longitude": "-7.9310"
          },
          "timezone": {
            "offset": "-3:30",
            "description": "Newfoundland"
          }
        },
        "email": "brad.gibson@example.com",
        "login": {
          "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
          "username": "silverswan131",
          "password": "firewall",
          "salt": "TQA1Gz7x",
          "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
          "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
          "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
          "date": "1993-07-20T09:44:18.674Z",
          "age": 26
        },
        "registered": {
          "date": "2002-05-21T10:59:49.966Z",
          "age": 17
        },
        "phone": "011-962-7516",
        "cell": "081-454-0666",
        "id": {
          "name": "PPS",
          "value": "0390511T"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE"
};

 