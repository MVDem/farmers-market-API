export class SignedUserDto {
  id: number;
  email: string;
  role: string;
  farmer: {
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
    email: string;
    phone: string;
    coordinateLat: number;
    coordinateLong: number;
    userId: number;
    imageURL: string;
  };
}
