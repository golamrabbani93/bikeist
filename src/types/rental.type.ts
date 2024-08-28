import {TBike} from './bike.type';

export interface TRental {
	_id: string;
	userId: string;
	bikeId: TBike;
	startTime: string;
	returnTime: string;
	totalCost: number;
	paymentStatus: string;
	payment: number;
	isReturned: boolean;
}
