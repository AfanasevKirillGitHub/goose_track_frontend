import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const CalendarRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/user/calendar/month');
  }, [navigate]);

  return <Outlet />;
};

export default CalendarRedirect;
