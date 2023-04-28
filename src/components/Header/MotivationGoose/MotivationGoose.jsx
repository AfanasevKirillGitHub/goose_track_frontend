import { useFetchTasksQuery } from "../../../redux/task/taskOperations";



export const MotivationGoose = () => {
    const { data } = useFetchTasksQuery()

    return (<>
        {data?.length > 0 && <p>goose</p>}
    </>)
}