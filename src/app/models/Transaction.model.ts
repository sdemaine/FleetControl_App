import {Vehicle} from '../primeng/domain/vehicle';

export class TransactionModel {
  id: number;
  locationId: number;
  customerId: number;
  cardId: number;
  vehicleId: number;
  vehicle: Vehicle;
  driverId: number;
}
