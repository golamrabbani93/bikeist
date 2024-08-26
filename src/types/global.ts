import {BaseQueryApi} from '@reduxjs/toolkit/query';

export type TError = {
	data: {
		message: string;
		stack: string;
		success: boolean;
	};
	status: number;
};
export type TResponse<T> = {
	[x: string]: any;
	_id: any;
	data?: T;
	error?: TError;
	success: boolean;
	message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
	name: string;
	value: boolean | React.Key;
};
