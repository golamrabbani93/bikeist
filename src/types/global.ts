import {BaseQueryApi} from '@reduxjs/toolkit/query';

export type TError = {
	data: {
		message: string;
		stack: string;
		success: boolean;
	};
	status: number;
};
export type TMeta = {
	limit: number;
	page: number;
	total: number;
	totalPage: number;
};

type TData<T> = {
	data?: T;
	meta?: TMeta;
};
export type TResponse<T> = {
	data?: T;
	error?: TError;
	success: boolean;
	message: string;
	statusCode: number;
};
export type TResponseM<T> = {
	data?: TData<T>;
	error?: TError;
	success: boolean;
	message: string;
	statusCode: number;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
export type TResponseReduxM<T> = TResponseM<T> & BaseQueryApi;

export type TQueryParam = {
	name: string;
	value: boolean | React.Key;
};
