import React, { useContext } from 'react';
import { TopicContext } from '../../Layout/Main';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	LineChart,
	Line,
	PieChart,
	Pie,
} from 'recharts';

const Statistics = () => {
	const topics = useContext(TopicContext);

	return (
        <div>
            <h1 className='text-5xl text-center font-bold my-5 text-purple-800'>Statistics</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1300px] mx-auto gap-5 ">
				<ResponsiveContainer width={'99%'} height={300} className="mt-10">
					<BarChart width={150} height={40} data={topics}>
						<Tooltip />
						<XAxis dataKey="name" />
						<Bar dataKey="total" fill="#A91079" />
						<Legend />
					</BarChart>
				</ResponsiveContainer>

				<ResponsiveContainer width={'99%'} height={300} className="mt-10">
					<LineChart width={300} height={100} data={topics}>
						<Line type="monotone" dataKey="total" stroke="#FF731D" strokeWidth={2} />
						<XAxis dataKey="name" />
						<Legend />
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default Statistics;
