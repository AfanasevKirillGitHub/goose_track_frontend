import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { useFetchServicesQuery } from '../../redux/services/servicesOperations';
import { Loader } from '../Loader/Loader';
import { FriendsItem } from './FriendsItem';
import * as SC from './FriendsList.styled';

export const FriendsList = () => {
  const { lang } = useGetSearchParams();
  const { data, isFetching } = useFetchServicesQuery(
    { lang },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <>
      {isFetching && <Loader />}
      <SC.FriendsList>
        {data?.map(
          ({
            _id,
            title,
            url,
            addressUrl,
            imageUrl,
            address,
            workDays,
            phone,
            email,
          }) => (
            <FriendsItem
              key={_id}
              title={title}
              url={url}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              address={address}
              workDays={workDays}
              phone={phone}
              email={email}
              _id={_id}
            />
          )
        )}
      </SC.FriendsList>
    </>
  );
};
