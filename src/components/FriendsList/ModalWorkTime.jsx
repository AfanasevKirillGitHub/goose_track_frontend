import * as SC from './FriendsList.styled';

export const ModalWorkTime = ({ data }) => {
  const days = {
    0: 'MN',
    1: 'TU',
    2: 'WE',
    3: 'TH',
    4: 'FR',
    5: 'SA',
    6: 'SU',
  };

  if (!data || data.length === 0) {
    return;
  }

  return (
    <SC.ModalTime>
      {data.map((day, idx) => {
        return (
          <SC.DaysItem key={idx}>
            <SC.Time>{days[idx]}</SC.Time>
            {day.from ? (
              <SC.Time>
                {day.from}-{day.to}
              </SC.Time>
            ) : (
              <SC.Time>-------------</SC.Time>
            )}
          </SC.DaysItem>
        );
      })}
    </SC.ModalTime>
  );
};
