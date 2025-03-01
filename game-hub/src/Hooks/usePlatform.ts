import useData from "./useData";

interface Platform{
    id:number;
    name:string;
    slug:string;
}

const usePlatform=()=> {const{data,error,isLoading}=useData<Platform>('/platforms/lists/parents');
    return{data,error,isLoading};
};

export default usePlatform;