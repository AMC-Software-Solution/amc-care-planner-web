const { useRef, useState } = require('react');
const { useEffect } = require('react');

const useChartData = () => {
  const [chartData, setChartData] = useState({});
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const { data } = ref.current.chartInstance;
      setChartData(data);
    }
  }, []);

  return { ref, chartData };
};

export default useChartData;
