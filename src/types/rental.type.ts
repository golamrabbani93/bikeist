import {TBike} from './bike.type';
import {TUserData} from './user.type';

export interface TRental {
	_id: string;
	userId: TUserData;
	bikeId: TBike;
	startTime: string;
	returnTime: string;
	totalCost: number;
	paymentStatus: string;
	payment: number;
	isReturned: boolean;
}
