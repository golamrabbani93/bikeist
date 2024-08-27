import {Form, Input} from 'antd';
import {Controller} from 'react-hook-form';

type TInputProps = {
	type: string;
	name: string;
	label?: string;
	placeholder?: string;
};

const BikeistInput = ({type, name, label, placeholder}: TInputProps) => {
	return (
		<div style={{marginBottom: '20px'}}>
			<Controller
				name={name}
				render={({field, fieldState: {error}}) => (
					<Form.Item label={label}>
						<Input {...field} type={type} id={name} size="large" placeholder={placeholder} />
						{error && <small className="text-[14px] text-primary">{error.message}</small>}
					</Form.Item>
				)}
			/>
		</div>
	);
};

export default BikeistInput;
