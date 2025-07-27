import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const TodayMoodAnalyticsChart = () => {
  const data = [
    { mood: 'Happy', count: 12 },
    { mood: 'Sad', count: 19 },
    { mood: 'Angry', count: 3 },
    { mood: 'Surprised', count: 5 },
    { mood: 'Neutral', count: 2 },
  ];

  const emoticons: any = {
    Happy: '😊',
    Sad: '😢',
    Angry: '😡',
    Surprised: '😲',
    Neutral: '😐',
  };

  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, bottom: 5, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="mood"
            type="category"
            tickFormatter={(mood) => emoticons[mood]}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodayMoodAnalyticsChart;
